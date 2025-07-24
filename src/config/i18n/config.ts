import { useTranslations } from './i18n';

export const locales = ['en', 'ru', 'am', 'de'];

export const useLocale = () => {
	const t = useTranslations();
	const locales = [t.header.en, t.header.ru, t.header.am, t.header.de];
	return locales;
};

export const defaultLocale = 'ru';
