'use client';
import ContactModal from '../contactModal/ContactModal';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer id='contacts' className={styles.footer}>
			<div className={styles.info}>
				<div className={styles.item}>
					<p className={styles.label}>Эл. почта:</p>
					<a href='mailto:info@it-prof.am' className={styles.value}>
						info@it-prof.am
					</a>
				</div>
				<div className={styles.item}>
					<p className={styles.label}>Адрес:</p>
					<address className={styles.value}>Республика Армения, Ереван, 001, ул. Московян, дом 3А</address>
				</div>
			</div>
			<ContactModal />
		</footer>
	);
}
