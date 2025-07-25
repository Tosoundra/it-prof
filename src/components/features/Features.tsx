'use client';
import { useTranslations } from '@/config/i18n/i18n';
import styles from './Features.module.css';
import { useData } from './mock/useData';

export default function Features() {
	const t = useTranslations();
	const items = useData();

	return (
		<section id='features' className={styles.section}>
			<h2 className={styles.title}>{t.features.title}</h2>
			<div className={styles.grid}>
				{items.map((f, i) => (
					<div key={i} className={styles.card} style={{ backgroundImage: `url(${f.img.src})` }}>
						<div className={styles.overlay} />
						<div className={styles.cardContent}>
							<h3>{f.title}</h3>
							<p className={styles.desc}>{f.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
