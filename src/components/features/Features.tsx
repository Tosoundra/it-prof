'use client';
import { useTranslations } from '@/config/i18n/i18n';
import styles from './Features.module.css';
import { images } from './mock/data';

const items = [
	{
		title: 'Разработка сайтов',
		desc: 'Для компаний, представленных в различных областях бизнеса, мы разрабатываем сайты и порталы любой сложности: от сайта-визитки до интернет-магазина или корпоративного портала.',
		img: images[0],
	},
	{
		title: 'Управление веб-контентом',
		desc: 'Предлагаем услуги по управлению веб-контентом сайтов (1С-Битрикс: Управление сайтом, Joomla, Drupal, WordPress и другие платформы)',
		img: images[1],
	},
	{
		title: 'Разработка ПО на заказ',
		desc: 'Мы имеем большой опыт в создании и модернизации систем, реализованных на различных программных платформах и средах',
		img: images[2],
	},
	{
		title: 'Техническая поддержка',
		desc: 'Мы предлагаем услуги по администрированию компьютерных систем любой сложности и архитектуры',
		img: images[3],
	},
];

export default function Features() {
	const t = useTranslations();
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
