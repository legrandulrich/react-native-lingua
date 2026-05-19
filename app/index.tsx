import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="h1 text-center color-lingua-blue">Lingua</Text>
      <Text className="body-md color-muted">Welcome back!</Text>
    </View>
  );
}
