"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "tr" | "en";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  mounted: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "mtk-site-language";

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;

    if (saved === "tr" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "tr";
    }

    setMounted(true);
  }, []);

  const setLang = (value: Language) => {
    setLangState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.lang = value;
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      mounted,
    }),
    [lang, mounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}