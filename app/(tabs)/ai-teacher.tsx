import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <View className="flex-1 justify-center items-center">
        <Text className="h3">AI Teacher</Text>
        <Text className="body-md color-muted mt-2">AI video lessons coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
