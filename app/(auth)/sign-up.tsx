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
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = () => {
    if (email.trim()) setModalVisible(true);
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
        <Text className="h2 mb-1">Create your account</Text>
        <Text className="body-md color-muted mb-5">
          Start your language journey today ✨
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

        {/* Sign Up button */}
        <TouchableOpacity
          className="bg-lingua-purple items-center rounded-[16px] py-[18px] mb-5"
          activeOpacity={0.85}
          onPress={handleSignUp}
        >
          <Text className="font-poppins-semibold text-[17px] text-white">
            Sign Up
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
          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <Ionicons name="logo-google" size={22} color="#EA4335" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <Ionicons name="logo-facebook" size={22} color="#1877F2" />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
            <Ionicons name="logo-apple" size={22} color="#000000" />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In link */}
        <View className="flex-row justify-center">
          <Text className="body-md color-muted">Already have an account? </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-in")}
            activeOpacity={0.7}
          >
            <Text className="body-md color-lingua-purple font-poppins-semibold">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
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
