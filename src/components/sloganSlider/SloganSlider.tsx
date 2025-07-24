'use client';
import { useState, useEffect } from 'react';
import styles from './SloganSlider.module.css';

const slogans = [
	'Команда с опытом международных проектов',
	'Программирование на различных платформах',
	'Реализация проектов на 5 языках (армянский, болгарский, русский, английский, немецкий)',
	'Разумные цены на услуги и обучение',
	'Высокое качество выполненных работ',
];

export default function SloganSlider() {
	const [idx, setIdx] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => setIdx((i) => (i + 1) % slogans.length), 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className={styles.sliderContainer}>
			<div className={styles.slider} style={{ transform: `translateX(-${idx * 100}%)` }}>
				{slogans.map((text, i) => (
					<div key={i} className={styles.slide}>
						<p className={styles.text}>{text}</p>
					</div>
				))}
			</div>
			<ul className={styles.dots}>
				{slogans.map((_, i) => (
					<li key={i} className={i === idx ? styles.activeDot : ''} />
				))}
			</ul>
		</section>
	);
}
