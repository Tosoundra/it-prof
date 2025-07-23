'use client';
import { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import en from './localization/en.json';
import ru from './localization/ru.json';
// import am from './localization/am.json';
import { locales, defaultLocale } from './config';

export type Messages = typeof en;
const resources: Record<string, Messages> = { en, ru };
const I18nContext = createContext<Messages>(en);

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname() || '';
	const parts = pathname.split('/').filter(Boolean);
	const locale = parts[0] && locales.includes(parts[0]) ? parts[0] : defaultLocale;
	const messages = resources[locale] || resources[defaultLocale];

	return <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>;
}

export function useTranslations() {
	return useContext(I18nContext);
}
