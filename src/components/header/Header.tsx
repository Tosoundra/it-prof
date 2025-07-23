'use client';
import Link from 'next/link';

import styles from './Header.module.css';
import LanguageSwitcher from '@/features/languageSwitcher/LanguageSwitcher';
import ContactModal from '../contactModal/ContactModal';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<Link href='#features' className={styles.link}>
						Услуги
					</Link>
					<Link href='/projects' className={styles.link}>
						Проекты
					</Link>
					<Link href='#contact' className={styles.link}>
						Контакты
					</Link>
					<ContactModal />
				</nav>
				<LanguageSwitcher />
			</div>
		</header>
	);
}
