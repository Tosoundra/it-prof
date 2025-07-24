import ContactModal from '../contactModal/ContactModal';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<p>© {new Date().getFullYear()} IT-Prof</p>
				<p>Эл. почта:</p>
				<span>info@it-prof.am</span>
				<p>Адрес</p>
				<span>Республика Армения, Ереван, 001, ул. Московян, дом 3А</span>
			</div>
			<ContactModal />
		</footer>
	);
}
