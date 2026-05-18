import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="h1 text-center color-lingua-blue">Lingua</Text>
      <Link href="/onboarding" className="body-md color-lingua-purple underline">
        View Onboarding →
      </Link>
    </View>
  );
}
