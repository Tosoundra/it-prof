import { useTranslations } from '@/config/i18n/i18n';
import content_managing from './content_managing.png';
import site_develop from './site_develope.png';
import software from './software_develope.png';
import support from './support.png';

export const images = [site_develop, content_managing, software, support];

export const useData = () => {
	const t = useTranslations();

	const data = t.features.items.map((item: { title: string; description: string }, index: number) => ({
		title: item.title,
		desc: item.description,
		img: images[index % images.length],
	}));

	return data;
};
