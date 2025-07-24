import Features from '@/components/features/Features';
import Hero from '../components/hero/Hero';
import Projects from '@/components/projects/Projects';

export default function Home() {
	return (
		<>
			<Hero />
			<section className='container'>
				<Features />
				<Projects />
			</section>
		</>
	);
}
