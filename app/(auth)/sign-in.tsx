import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn, useSSO } from "@clerk/expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) return;

    const { error } = await signIn.password({ emailAddress: email, password });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({ navigate: () => router.replace("/") });
    } else if (signIn.status === "needs_client_trust") {
      await signIn.mfa.sendEmailCode();
      setVerifyError("");
      setModalVisible(true);
    }
  };

  const handleVerifyMFA = async (code: string) => {
    setVerifyError("");
    const { error } = await signIn.mfa.verifyEmailCode({ code });
    if (error) {
      setVerifyError(error.message ?? "Invalid code. Please try again.");
      return;
    }
    if (signIn.status === "complete") {
      setModalVisible(false);
      await signIn.finalize({ navigate: () => router.replace("/") });
    }
  };

  const handleResendMFA = async () => {
    setVerifyError("");
    await signIn.mfa.sendEmailCode();
  };

  const handleModalClose = () => {
    setModalVisible(false);
    signIn.reset();
  };

  const handleSSOSignIn = async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
    const redirectUrl = Linking.createURL("/");
    const { createdSessionId, setActive } = await startSSOFlow({ strategy, redirectUrl });
    if (createdSessionId && setActive) {
      await setActive({ session: createdSessionId });
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#001132" />
        </TouchableOpacity>

        {/* Heading */}
        <Text className="h2 mb-1">Welcome back</Text>
        <Text className="body-md color-muted mb-5">
          Sign in to continue your journey ✨
        </Text>

        {/* Mascot */}
        <View className="items-center mb-5">
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Email input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="alex@gmail.com"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.inputField}
          />
        </View>
        {errors.fields.identifier ? (
          <Text style={styles.fieldError}>{errors.fields.identifier.message}</Text>
        ) : null}

        {/* Password input */}
        <View style={[styles.inputContainer, styles.inputContainerRow]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#9ca3af"
              secureTextEntry={!showPassword}
              style={styles.inputField}
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeBtn}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#9ca3af"
            />
          </TouchableOpacity>
        </View>
        {errors.fields.password ? (
          <Text style={styles.fieldError}>{errors.fields.password.message}</Text>
        ) : null}

        {/* Sign In button */}
        <TouchableOpacity
          className="bg-lingua-purple items-center rounded-[16px] py-[18px] mb-5"
          activeOpacity={0.85}
          onPress={handleSignIn}
          disabled={fetchStatus === "fetching"}
        >
          <Text className="font-poppins-semibold text-[17px] text-white">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-border" />
          <Text className="body-sm color-muted mx-3">or continue with</Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social buttons */}
        <View className="gap-3 mb-7">
          <TouchableOpacity
            style={styles.socialBtn}
            activeOpacity={0.8}
            onPress={() => handleSSOSignIn("oauth_google")}
          >
            <Ionicons name="logo-google" size={22} color="#EA4335" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialBtn}
            activeOpacity={0.8}
            onPress={() => handleSSOSignIn("oauth_facebook")}
          >
            <Ionicons name="logo-facebook" size={22} color="#1877F2" />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialBtn}
            activeOpacity={0.8}
            onPress={() => handleSSOSignIn("oauth_apple")}
          >
            <Ionicons name="logo-apple" size={22} color="#000000" />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up link */}
        <View className="flex-row justify-center">
          <Text className="body-md color-muted">Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="body-md color-lingua-purple font-poppins-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={handleModalClose}
        onVerify={handleVerifyMFA}
        onResend={handleResendMFA}
        isLoading={fetchStatus === "fetching"}
        error={verifyError}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 36,
  },
  backBtn: {
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  mascot: {
    width: 160,
    height: 160,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: "#ffffff",
    marginBottom: 14,
  },
  inputContainerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 2,
  },
  inputField: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001132",
    paddingVertical: 4,
  },
  eyeBtn: {
    paddingLeft: 8,
    paddingBottom: 4,
  },
  fieldError: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#d32f2f",
    marginTop: -10,
    marginBottom: 8,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    gap: 12,
  },
  socialText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#001132",
  },
});
