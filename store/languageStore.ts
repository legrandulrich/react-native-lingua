import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { LanguageCode } from "@/types/learning";

interface LanguageState {
  selectedLanguage: LanguageCode | null;
  // Tracks when the persisted state has finished loading from AsyncStorage.
  // We need this to avoid redirecting before the saved language is restored.
  hasHydrated: boolean;
  setLanguage: (code: LanguageCode) => void;
  clearLanguage: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      hasHydrated: false,
      setLanguage: (code) => set({ selectedLanguage: code }),
      clearLanguage: () => set({ selectedLanguage: null }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "lingua-language",
      storage: createJSONStorage(() => AsyncStorage),
      // Only persist the selected language, not the transient hydration flag.
      partialize: (state) => ({ selectedLanguage: state.selectedLanguage }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
