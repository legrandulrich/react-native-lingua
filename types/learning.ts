export type ActivityType =
  | "vocabulary"
  | "phrase"
  | "translation"
  | "multiple_choice"
  | "listen_and_select";

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
}

export interface PhraseItem {
  phrase: string;
  translation: string;
  pronunciation: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  xpReward: number;
  order: number;
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  activities: Activity[];
  goals: string[];
  aiTeacherPrompt: string;
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  color: string;
  lessonIds: string[];
}

export type LanguageCode = "es" | "fr" | "ja" | "de";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  totalUnits: number;
  totalLessons: number;
}
