import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

export type Language = 'en' | 'it';

export interface LocalizedString {
    en: string;
    it: string;
}

export interface LanguageContextType {
    lang: Language;
    setLang: Dispatch<SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    setLang: () => { },
});

export const useLanguage = () => useContext(LanguageContext);
