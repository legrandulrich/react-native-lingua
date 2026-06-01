import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

const CIRCLE_SIZE = 52;
const TAB_BAR_HEIGHT = 64;

type TabConfig = {
  label: string;
  activeIcon: keyof typeof Ionicons.glyphMap;
  inactiveIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: Record<string, TabConfig> = {
  index: { label: "Home", activeIcon: "home", inactiveIcon: "home-outline" },
  learn: { label: "Learn", activeIcon: "book", inactiveIcon: "book-outline" },
  "ai-teacher": {
    label: "AI Teacher",
    activeIcon: "sparkles",
    inactiveIcon: "sparkles-outline",
  },
  chat: {
    label: "Chat",
    activeIcon: "chatbubble-ellipses",
    inactiveIcon: "chatbubble-ellipses-outline",
  },
  profile: {
    label: "Profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
  },
};

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabWidth = width / state.routes.length;

  const circleX = useSharedValue(
    state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2
  );

  useEffect(() => {
    circleX.value = withTiming(
      state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
      { duration: 200, easing: Easing.out(Easing.quad) }
    );
  }, [state.index, tabWidth]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabsRow}>
        <Animated.View style={[styles.circle, circleStyle]} />

        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const config = TAB_CONFIG[route.name] ?? {
            label: route.name,
            activeIcon: "ellipse" as keyof typeof Ionicons.glyphMap,
            inactiveIcon: "ellipse-outline" as keyof typeof Ionicons.glyphMap,
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tab, { width: tabWidth }]}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isFocused ? config.activeIcon : config.inactiveIcon}
                size={22}
                color={isFocused ? colors.canvas : colors.muted}
              />
              {!isFocused && (
                <Text style={styles.label}>{config.label}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.canvas,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  tabsRow: {
    flexDirection: "row",
    height: TAB_BAR_HEIGHT,
    alignItems: "center",
    position: "relative",
  },
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.linguaPurple,
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    left: 0,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    height: TAB_BAR_HEIGHT,
    gap: 3,
  },
  label: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: colors.muted,
  },
});
