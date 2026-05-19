import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRef, useState, useEffect } from "react";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  onResend: () => void;
  isLoading?: boolean;
  error?: string;
}

export default function VerificationModal({
  visible,
  email,
  onClose,
  onVerify,
  onResend,
  isLoading,
  error,
}: Props) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleChangeText = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(digits);
    if (digits.length === 6 && !isLoading) {
      onVerify(digits);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.overlay}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={StyleSheet.absoluteFill} />
        </TouchableWithoutFeedback>

        <View style={styles.card}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We sent a 6-digit code to{"\n"}
            <Text style={styles.emailText}>{email || "your email"}</Text>
          </Text>

          {/* Code digit boxes */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
            style={styles.codeRow}
          >
            {Array.from({ length: 6 }).map((_, i) => {
              const isFilled = i < code.length;
              const isActive = i === code.length;
              return (
                <View
                  key={i}
                  style={[
                    styles.codeBox,
                    isFilled && styles.codeBoxFilled,
                    isActive && styles.codeBoxActive,
                  ]}
                >
                  <Text style={styles.codeText}>{code[i] ?? ""}</Text>
                </View>
              );
            })}
          </TouchableOpacity>

          {/* Hidden number-pad input */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChangeText}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
            editable={!isLoading}
          />

          {isLoading && (
            <ActivityIndicator
              size="small"
              color="#6c4ef5"
              style={{ marginBottom: 12 }}
            />
          )}

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <Text style={styles.resendRow}>
            Didn't receive the code?{" "}
            <Text style={styles.resendLink} onPress={onResend}>
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#001132",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 22,
  },
  emailText: {
    fontFamily: "Poppins-SemiBold",
    color: "#001132",
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  codeBox: {
    width: 44,
    height: 52,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    backgroundColor: "#f6f7fb",
    alignItems: "center",
    justifyContent: "center",
  },
  codeBoxFilled: {
    borderColor: "#6c4ef5",
    backgroundColor: "#f0edff",
  },
  codeBoxActive: {
    borderColor: "#6c4ef5",
    backgroundColor: "#ffffff",
  },
  codeText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#001132",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  errorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#d32f2f",
    textAlign: "center",
    marginBottom: 12,
  },
  resendRow: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#6c4ef5",
  },
});
