'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import en from './localization/en.json';
import ru from './localization/ru.json';
import am from './localization/am.json';
import de from './localization/de.json';
import { locales, defaultLocale } from './config';

export type Messages = typeof en;
const resources: Record<string, Messages> = { en, ru, am, de };
const I18nContext = createContext<{
	locale: string;
	setLocale: (l: string) => void;
	messages: Messages;
}>({ locale: defaultLocale, setLocale: () => {}, messages: en });

export function I18nProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<string>(defaultLocale);
	const messages = resources[locale] || resources[defaultLocale];

	return <I18nContext.Provider value={{ locale, setLocale, messages }}>{children}</I18nContext.Provider>;
}

export function useTranslations() {
	const { messages } = useContext(I18nContext);
	return messages;
}

export function useLocale() {
	const { locale, setLocale } = useContext(I18nContext);
	return { locale, setLocale };
}
