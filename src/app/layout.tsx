import Link from 'next/link';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
	title: 'IT-Prof',
	description: 'Կարենիծ ծրագրեր և ծառայություններ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='am'>
			<body>
				<header
					style={{
						padding: '1rem 0',
						borderBottom: '1px solid rgba(255,255,255,0.1)',
					}}>
					<div
						className='container'
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<nav>
							<Link href='/'>IT-Prof</Link>
							<Link href='/#top-features' style={{ marginRight: '1rem' }}>
								Ծառայություններ
							</Link>
							<Link href='/projects' style={{ marginRight: '1rem' }}>
								Նախագծեր
							</Link>
							<Link href='/contact'>Կոնտակտներ</Link>
						</nav>
					</div>
				</header>
				<main>{children}</main>
				<footer
					style={{
						padding: '2rem 0',
						textAlign: 'center',
						borderTop: '1px solid rgba(255,255,255,0.1)',
						marginTop: '4rem',
					}}>
					© {new Date().getFullYear()} IT-Prof
				</footer>
			</body>
		</html>
	);
}
