import About from '@/components/about/About';
import ContactForm from '@/components/contactForm/ContactForm';
import Features from '@/components/features/Features';
import Hero from '../components/hero/Hero';

export default function Home() {
	return (
		<>
			<Hero />
			<section className='container'>
				<Features />
				<About />
				<ContactForm />
			</section>
		</>
	);
}
