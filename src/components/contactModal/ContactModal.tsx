'use client';
import { useState } from 'react';

import styles from './ContactModal.module.css';
import { useTranslations } from '@/config/i18n/i18n';

export default function ContactModal() {
	const [open, setOpen] = useState(false);
	const t = useTranslations();

	return (
		<>
			<button className={styles.openButton} onClick={() => setOpen(true)}>
				{t.contact.openButton}
			</button>
			{open && (
				<div className={styles.overlay} onClick={() => setOpen(false)}>
					<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
						<h2 className={styles.title}>{t.contact.title}</h2>
						<form className={styles.form} onSubmit={() => setOpen(false)}>
							<input type='text' placeholder={t.contact.name} required className={styles.input} />
							<input type='email' placeholder={t.contact.phone} required className={styles.input} />
							<textarea placeholder={t.contact.message} rows={4} required className={styles.textarea} />
							<button type='submit' className={styles.submitButton}>
								{t.contact.send}
							</button>
						</form>
						<button className={styles.closeButton} onClick={() => setOpen(false)}>
							×
						</button>
					</div>
				</div>
			)}
		</>
	);
}
