import Image from 'next/image';
import { imageData } from './data';
import styles from './Projects.module.css'


export default function Projects() {
	return (
		<section id='projects' className={styles.projects}>
			<div className='container'>
				<h2 className={styles.project__title}>Технологии</h2>
				<div className='technologies__grid'>
					{imageData.map((image, i) => (
						<div key={i} className='technologies__item'>
							<div className='technologies__image'>
								<Image src={image} alt='image'/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
