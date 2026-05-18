import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header: mascot logo + app name */}
      <View className="flex-row items-center px-6 pt-2">
        <Image
          source={images.mascotLogo}
          className="w-10 h-10"
          resizeMode="contain"
        />
        <Text className="font-poppins-bold text-xl color-foreground ml-2">
          lingua
        </Text>
      </View>

      {/* Heading */}
      <View className="px-6 mt-6">
        <Text className="h1">Your AI language</Text>
        <Text className="h1 color-lingua-purple">teacher.</Text>
        <Text className="body-md color-muted mt-2.5">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Mascot illustration with speech bubbles */}
      <View className="flex-1 items-center justify-center">
        <View className="w-[320px] h-[320px] relative items-center justify-center">
          <Image
            source={images.mascotWelcome}
            className="w-60 h-60"
            resizeMode="contain"
          />

          {/* Hello! bubble — left side */}
          <View className="absolute top-[110px] left-[8px] bg-white rounded-[20px] px-3.5 py-2 shadow">
            <Text className="font-poppins-semibold text-sm color-foreground">
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble — upper right */}
          <View className="absolute top-[40px] right-[8px] bg-white rounded-[20px] px-3.5 py-2 shadow">
            <Text className="font-poppins-semibold text-sm color-foreground">
              ¡Hola!
            </Text>
          </View>

          {/* 你好！ bubble — lower right */}
          <View className="absolute top-[175px] right-[8px] bg-white rounded-[20px] px-3.5 py-2 shadow">
            <Text className="font-poppins-semibold text-sm color-error">
              你好！
            </Text>
          </View>
        </View>
      </View>

      {/* Get Started button */}
      <View className="px-6 pb-4">
        <TouchableOpacity
          className="bg-lingua-purple rounded-[20px] py-[18px] flex-row items-center justify-center gap-2"
          activeOpacity={0.85}
        >
          <Text className="font-poppins-semibold text-[17px] text-white">
            Get Started
          </Text>
          <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
