import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h2>Իմացեք Անդանջակից IT պրոֆեսիոնալների հետ</h2>
				<p>Լավագույն կրթական ծրագրերը, որոնք կբարձրացնեն ձեր հմտությունները:</p>
				<a href='#courses' className={styles.btn}>
					Սկսեք հիմա
				</a>
			</div>
		</section>
	);
}
