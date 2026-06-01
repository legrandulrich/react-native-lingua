import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { LANGUAGES } from "@/data/languages";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";

const LANGUAGE_GREETING: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  de: "Hallo",
};

const STREAK = 12;
const DAILY_XP = 15;
const DAILY_XP_GOAL = 20;

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();

  const language = LANGUAGES.find((l) => l.code === selectedLanguage);
  const languageUnits = units.filter((u) => u.languageId === selectedLanguage);
  const currentUnit = languageUnits[0];
  const currentLesson = currentUnit
    ? lessons.find((l) => l.id === currentUnit.lessonIds[0])
    : null;

  const greeting = selectedLanguage
    ? (LANGUAGE_GREETING[selectedLanguage] ?? "Hello")
    : "Hello";
  const firstName = user?.firstName ?? "there";
  const progressPercent = (DAILY_XP / DAILY_XP_GOAL) * 100;

  const dailyPlan = [
    {
      id: "lesson",
      title: "Lesson",
      subtitle: currentLesson?.title ?? "Current lesson",
      iconName: "book" as const,
      iconBg: "#EEF3FF",
      iconColor: colors.linguaBlue,
      completed: true,
    },
    {
      id: "conversation",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      iconName: "headset" as const,
      iconBg: "#F0EEFF",
      iconColor: colors.linguaPurple,
      completed: false,
    },
    {
      id: "words",
      title: "New words",
      subtitle: "10 words",
      iconName: "chatbubble-ellipses" as const,
      iconBg: "#FFF0F0",
      iconColor: colors.error,
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
          <View className="flex-row items-center" style={{ gap: 10 }}>
            {language && (
              <Image
                source={{ uri: language.flag }}
                style={styles.flagImage}
              />
            )}
            <Text className="h4">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center" style={{ gap: 14 }}>
            <View className="flex-row items-center" style={{ gap: 4 }}>
              <Image source={images.streakFire} style={styles.streakIcon} />
              <Text style={styles.streakText}>{STREAK}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.foreground}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Daily Goal Card */}
        <View className="mx-5 mt-3 mb-4" style={styles.goalCard}>
          <View className="flex-row items-center px-5 py-4">
            <View className="flex-1">
              <Text style={styles.goalLabel}>Daily goal</Text>
              <Text style={styles.goalXP}>
                {DAILY_XP}{" "}
                <Text style={styles.goalXPMax}>/ {DAILY_XP_GOAL} XP</Text>
              </Text>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progressPercent}%` as unknown as number },
                  ]}
                />
              </View>
            </View>
            <Image
              source={images.treasure}
              style={styles.treasureImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Continue Learning Banner */}
        {language && (
          <View className="mx-5 mb-4" style={styles.bannerCard}>
            <Image
              source={images.palace}
              style={styles.palaceImage}
              resizeMode="contain"
            />
            <View className="px-5 py-5">
              <Text style={styles.bannerSubtitle}>Continue learning</Text>
              <Text style={styles.bannerTitle}>{language.name}</Text>
              {currentUnit && (
                <Text style={styles.bannerUnit}>
                  A1 • Unit {currentUnit.order}
                </Text>
              )}
              <TouchableOpacity activeOpacity={0.85} style={styles.continueBtn}>
                <Text style={styles.continueBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Today's Plan */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="h4">Today's plan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.planCard}>
            {dailyPlan.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.planItem,
                  index < dailyPlan.length - 1 && styles.planItemBorder,
                ]}
              >
                <View
                  style={[styles.planIcon, { backgroundColor: item.iconBg }]}
                >
                  <Ionicons
                    name={item.iconName}
                    size={20}
                    color={item.iconColor}
                  />
                </View>
                <View className="flex-1">
                  <Text style={styles.planTitle}>{item.title}</Text>
                  <Text style={styles.planSubtitle}>{item.subtitle}</Text>
                </View>
                {item.completed ? (
                  <View style={styles.checkDone}>
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </View>
                ) : (
                  <View style={styles.checkEmpty} />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Next Up Card */}
        <View className="mx-5" style={styles.nextCard}>
          <View className="flex-row items-center px-5 py-4">
            <View className="flex-1">
              <Text style={styles.nextLabel}>Next up</Text>
              <Text style={styles.nextTitle}>AI Video Call</Text>
              <Text style={styles.nextSubtitle}>Practice speaking</Text>
            </View>
            <View>
              <Image
                source={{
                  uri: "https://picsum.photos/seed/aiteacher/150/150",
                }}
                style={styles.avatarImage}
              />
              <View style={styles.videoBadge}>
                <Ionicons name="videocam" size={10} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flagImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  streakIcon: {
    width: 20,
    height: 20,
  },
  streakText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: colors.streak,
  },
  goalCard: {
    backgroundColor: "#FFF6ED",
    borderRadius: 16,
    overflow: "hidden",
  },
  goalLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: colors.muted,
  },
  goalXP: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    color: colors.foreground,
    marginTop: 2,
    marginBottom: 10,
  },
  goalXPMax: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.muted,
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#FFDFBA",
    borderRadius: 4,
    overflow: "hidden",
    width: "90%",
  },
  progressFill: {
    height: 8,
    backgroundColor: colors.streak,
    borderRadius: 4,
  },
  treasureImage: {
    width: 80,
    height: 80,
    marginLeft: 12,
  },
  bannerCard: {
    backgroundColor: colors.linguaPurple,
    borderRadius: 16,
    overflow: "hidden",
    minHeight: 150,
  },
  palaceImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 120,
    height: 150,
  },
  bannerSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    marginBottom: 4,
  },
  bannerTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#fff",
  },
  bannerUnit: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
    marginTop: 2,
  },
  continueBtn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 22,
    alignSelf: "flex-start",
    marginTop: 16,
  },
  continueBtnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: colors.linguaPurple,
  },
  viewAll: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: colors.linguaPurple,
  },
  planCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  planItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  planItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  planIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  planTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: colors.foreground,
  },
  planSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: colors.muted,
    marginTop: 1,
  },
  checkDone: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
  },
  checkEmpty: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
  },
  nextCard: {
    backgroundColor: "#EDFFF5",
    borderRadius: 16,
    overflow: "hidden",
  },
  nextLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: colors.muted,
    marginBottom: 2,
  },
  nextTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: colors.foreground,
  },
  nextSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: "#fff",
  },
  videoBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.linguaGreen,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
});
