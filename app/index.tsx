import { useAuth } from "@clerk/expo";
import { Redirect, Stack, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="h1 text-center color-lingua-blue">Lingua</Text>
      <Text className="body-md color-muted">Welcome back!</Text>
      <TouchableOpacity
        onPress={() => router.push("/language-selection")}
        className="mt-4 px-6 py-3 bg-lingua-blue rounded-2xl"
      >
        <Text className="body-md text-white">Select Language</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()} className="px-6 py-3 bg-lingua-purple rounded-2xl">
        <Text className="body-md text-white">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
