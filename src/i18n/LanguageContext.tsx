"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations } from "./translations";

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: TranslationKey, key?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("klb-language") as Language;
    if (saved && (saved === "en" || saved === "es" || saved === "cs")) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("klb-language", lang);
  };

  const t = (section: TranslationKey, key?: string) => {
    if (!mounted) {
      // Server-side rendering / initial hydration mismatch prevention: always return English initially or current state
      const text = translations[language][section];
      if (key && typeof text === "object" && text !== null) {
        return (text as any)[key] || key;
      }
      return text;
    }

    const dict = translations[language][section];
    if (key && typeof dict === "object" && dict !== null) {
      return (dict as any)[key] || key;
    }
    return dict;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageKeyWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return <div key={language}>{children}</div>;
}
