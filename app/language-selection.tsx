import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { LANGUAGES } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { Language, LanguageCode } from "@/types/learning";

export default function LanguageSelectionScreen() {
  const [selected, setSelected] = useState<LanguageCode | null>(null);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleConfirm = () => {
    if (!selected) return;
    setLanguage(selected);
    router.replace("/(tabs)");
  };

  const renderItem = ({ item }: { item: Language }) => {
    const isSelected = selected === item.code;

    return (
      <TouchableOpacity
        onPress={() => setSelected(item.code)}
        activeOpacity={0.8}
        className="flex-1 m-2"
      >
        <View
          className={`rounded-2xl p-4 items-center border-2 ${
            isSelected
              ? "border-lingua-purple bg-purple-50"
              : "border-border bg-white"
          }`}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          {isSelected && (
            <View className="absolute top-2 right-2 w-5 h-5 rounded-full bg-lingua-purple items-center justify-center">
              <Ionicons name="checkmark" size={12} color="#fff" />
            </View>
          )}

          <Image
            source={{ uri: item.flag }}
            className="w-14 h-10 rounded-md"
            resizeMode="cover"
          />

          <Text className="font-poppins-semibold text-sm color-foreground mt-3 text-center">
            {item.name}
          </Text>
          <Text className="body-sm color-muted text-center">
            {item.nativeName}
          </Text>
          <View className="flex-row items-center mt-1.5 gap-1">
            <Ionicons name="people-outline" size={11} color="#6b7280" />
            <Text className="caption">{item.learners}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center px-5 pt-2 pb-1">
        <TouchableOpacity onPress={() => router.back()} className="p-1 mr-2">
          <Ionicons name="arrow-back" size={24} color="#001132" />
        </TouchableOpacity>
      </View>

      {/* Earth image + title */}
      <View className="items-center px-6 pt-2 pb-4">
        <Image
          source={images.earth}
          className="w-28 h-28"
          resizeMode="contain"
        />
        <Text className="h2 text-center mt-3">Which language do you</Text>
        <Text className="h2 text-center color-lingua-purple">
          want to learn?
        </Text>
        <Text className="body-md color-muted text-center mt-2">
          Choose a language to start your journey
        </Text>
      </View>

      {/* Language grid */}
      <FlatList
        data={LANGUAGES}
        keyExtractor={(item) => item.code}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Confirm button */}
      <View className="px-6 pb-4">
        <TouchableOpacity
          onPress={handleConfirm}
          activeOpacity={0.85}
          disabled={!selected}
          className={`rounded-[20px] py-[18px] flex-row items-center justify-center gap-2 ${
            selected ? "bg-lingua-purple" : "bg-muted/30"
          }`}
        >
          <Text
            className={`font-poppins-semibold text-[17px] ${
              selected ? "text-white" : "color-muted"
            }`}
          >
            Start Learning
          </Text>
          {selected && (
            <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
