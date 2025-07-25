'use client';
import { useTranslations } from '@/config/i18n/i18n';
import ContactModal from '../contactModal/ContactModal';
import styles from './Footer.module.css';

export default function Footer() {
	const t = useTranslations();
	
	return (
		<footer id='contacts' className={styles.footer}>
			<div className={styles.info}>
				<div className={styles.item}>
					<p className={styles.label}>{t.contact.contacts.email.title}:</p>
					<a href='mailto:info@it-prof.am' className={styles.value}>
						{t.contact.contacts.email.value}
					</a>
				</div>
				<div className={styles.item}>
					<p className={styles.label}>{t.contact.contacts.address.title}:</p>
					<address className={styles.value}>{t.contact.contacts.address.value}</address>
				</div>
			</div>
			<ContactModal />
		</footer>
	);
}
