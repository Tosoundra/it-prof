'use client';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '../../config/i18n/config';

export default function LanguageSwitcher() {
	const router = useRouter();
	const change = (lng: string) => {
		router.replace(`/${lng}`);
	};
	return (
		<select onChange={(e) => change(e.target.value)} defaultValue={defaultLocale}>
			{locales.map((l) => (
				<option key={l} value={l}>
					{l.toUpperCase()}
				</option>
			))}
		</select>
	);
}
