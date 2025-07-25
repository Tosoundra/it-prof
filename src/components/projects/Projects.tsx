'use client';
import { useTranslations } from '@/config/i18n/i18n';
import Image from 'next/image';
import { imageData } from './data';
import styles from './Projects.module.css';

export default function Projects() {
	const t = useTranslations();
	return (
		<section id='projects' className={styles.projects}>
			<div className='container'>
				<h2 className={styles.projects__title}>{t.projects.title}</h2>
				<div className={styles.technologies__grid}>
					{imageData.map((image, i) => (
						<div key={i} className={styles.technologies__item}>
							<div className={styles.technologies__image}>
								<Image src={image} alt='technology' width={80} height={80} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
