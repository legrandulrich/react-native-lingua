import { useAuth } from "@clerk/expo";
import { Redirect, Stack, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { LANGUAGES } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const clearLanguage = useLanguageStore((state) => state.clearLanguage);

  // Wait for both auth and persisted language state before deciding a route.
  if (!isLoaded || !hasHydrated) return null;

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  // Authenticated users without a language must pick one first.
  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  const language = LANGUAGES.find((item) => item.code === selectedLanguage);

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="h1 text-center color-lingua-blue">Lingua</Text>
      <Text className="body-md color-muted">Welcome back!</Text>

      {language && (
        <View className="flex-row items-center gap-2 mt-1">
          <Image
            source={{ uri: language.flag }}
            className="w-8 h-6 rounded-md"
            resizeMode="cover"
          />
          <Text className="body-md color-foreground">
            Learning {language.name}
          </Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => router.push("/language-selection")}
        className="mt-4 px-6 py-3 bg-lingua-blue rounded-2xl"
      >
        <Text className="body-md text-white">Select Language</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()} className="px-6 py-3 bg-lingua-purple rounded-2xl">
        <Text className="body-md text-white">Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => clearLanguage()}
        className="px-6 py-3 bg-muted/30 rounded-2xl"
      >
        <Text className="body-md color-muted">Clear Language (Test)</Text>
      </TouchableOpacity>
    </View>
  );
}
