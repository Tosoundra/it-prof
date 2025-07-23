import About from '@/components/about/About';
import Features from '@/components/features/Features';
import Hero from '../components/hero/Hero';


export default function Home() {
	return (
		<>
			<Hero />
			<section className='container'>
				<Features />
				<About />
			</section>
			
		</>
	);
}
