import { Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-unit-1",
    languageId: "es",
    title: "Basics",
    description: "Greetings, numbers, and everyday words",
    order: 1,
    color: "#58CC02",
    lessonIds: ["es-1-1", "es-1-2"],
  },
  {
    id: "es-unit-2",
    languageId: "es",
    title: "People & Family",
    description: "Talk about yourself and the people around you",
    order: 2,
    color: "#CE82FF",
    lessonIds: ["es-2-1", "es-2-2"],
  },

  // French
  {
    id: "fr-unit-1",
    languageId: "fr",
    title: "Basics",
    description: "Greetings, numbers, and everyday words",
    order: 1,
    color: "#FF9600",
    lessonIds: ["fr-1-1", "fr-1-2"],
  },
  {
    id: "fr-unit-2",
    languageId: "fr",
    title: "Food & Drink",
    description: "Order food and talk about what you like",
    order: 2,
    color: "#FF4B4B",
    lessonIds: ["fr-2-1", "fr-2-2"],
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageId: "ja",
    title: "Basics",
    description: "Essential greetings and introductions",
    order: 1,
    color: "#1CB0F6",
    lessonIds: ["ja-1-1", "ja-1-2"],
  },
  {
    id: "ja-unit-2",
    languageId: "ja",
    title: "Numbers & Time",
    description: "Count and tell the time in Japanese",
    order: 2,
    color: "#FF4B4B",
    lessonIds: ["ja-2-1", "ja-2-2"],
  },
];
