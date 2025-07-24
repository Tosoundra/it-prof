'use client';

import { locales } from '@/config/i18n/config';
import { useLocale } from '@/config/i18n/i18n';
import styles from './Switcher.module.css';

export default function LanguageSwitcher({ className }: { className?: string }) {
	const { locale, setLocale } = useLocale();
	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			<select value={locale} onChange={(e) => setLocale(e.target.value)} className={styles.select}>
				{locales.map((l) => (
					<option key={l} value={l}>
						{l.toUpperCase()}
					</option>
				))}
			</select>
		</div>
	);
}
