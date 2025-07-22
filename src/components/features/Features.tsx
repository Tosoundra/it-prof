import styles from './Features.module.css';

const items = [
	{ title: 'Практические курсы', desc: 'Реальные задачи и проекты' },
	{ title: 'Опытные преподаватели', desc: 'IT-эксперты с рынком' },
	{ title: 'Сертификат по окончании', desc: 'Подтверждение ваших навыков' },
];

export default function Features() {
	return (
		<section className={styles.features}>
			{items.map((f, i) => (
				<div key={i} className={styles.card}>
					<h3>{f.title}</h3>
					<p>{f.desc}</p>
				</div>
			))}
		</section>
	);
}
