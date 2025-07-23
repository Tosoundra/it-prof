import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { I18nProvider } from '@/config/i18n/i18n';

export const metadata = {
	title: 'IT-Prof',
	description: 'Курсы и услуги от IT-Prof',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<I18nProvider>
				{
					<body>
						<Header />
						<main>{children}</main>
						<Footer />
					</body>
				}
			</I18nProvider>
		</html>
	);
}
