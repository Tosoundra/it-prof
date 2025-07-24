'use client';
import { useTranslations } from '@/config/i18n/i18n';
import styles from './Features.module.css';

const items = [
	{
		title: 'Разработка сайтов',
		desc: 'Для компаний, представленных в различных областях бизнеса, мы разрабатываем сайты и порталы любой сложности: от сайта-визитки до интернет-магазина или корпоративного портала.',
	},
	{
		title: 'Управление веб-контентом',
		desc: 'Предлагаем услуги по управлению веб - контентом сайтов  (1С-Битрикс: Управление сайтом, Joomla, Drupal, WordPress и другие платформы)',
	},
	{
		title: 'Разработка ПО на заказ',
		desc: 'Мы имеем большой опыт в создании и модернизации  систем, реализованных на различных программных платформах и средах',
	},
	{
		title: 'Техническая поддержка',
		desc: 'Мы предлагаем услуги по администрированию компьютерных систем любой сложности и архитектуры',
	},
];

export default function Features() {
	const t = useTranslations();
	return (
		<section>
			<h2 className={styles.title}>{t.features.title}</h2>
			<div className={styles.features}>
				{items.map((f, i) => (
					<div key={i} className={styles.card}>
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
