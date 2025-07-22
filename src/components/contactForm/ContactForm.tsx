import styles from './ContactForm.module.css';

export default function ContactForm() {
	return (
		<section className={styles.contact}>
			<h2>Свяжитесь с нами</h2>
			<form className={styles.form}>
				<input type='text' placeholder='Ваше имя' required />
				<input type='email' placeholder='E-mail' required />
				<textarea placeholder='Сообщение' rows={4} required />
				<button type='submit'>Отправить</button>
			</form>
		</section>
	);
}
