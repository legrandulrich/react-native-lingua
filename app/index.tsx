import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);

  // Wait for both auth and persisted language state before deciding a route.
  if (!isLoaded || !hasHydrated) return null;

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  // Authenticated users without a language must pick one first.
  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/(tabs)" />;
}
