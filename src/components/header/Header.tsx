'use client';
import Link from 'next/link';

import styles from './Header.module.css';
import LanguageSwitcher from '@/features/languageSwitcher/LanguageSwitcher';
import ContactModal from '../contactModal/ContactModal';
import { useTranslations } from '@/config/i18n/i18n';

export default function Header() {
	const t = useTranslations();
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<Link href='#features' className={styles.link}>
						{t.header.services}
					</Link>
					<Link href='#projects' className={styles.link}>
						{t.header.projects}
					</Link>
					<Link href='#contacts' className={styles.link}>
						{t.header.contacts}
					</Link>
					<ContactModal />
				</nav>
				<LanguageSwitcher />
			</div>
		</header>
	);
}
