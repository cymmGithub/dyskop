import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center text-center px-5'>
			<h1 className='text-4xl sm:text-5xl font-bold text-gray-900'>404</h1>
			<h2 className='text-base sm:text-lg text-gray-500 mt-2'>Przykro nam, ale strona nie istnieje</h2>
			<Link href='/'>
				<Button
					className='mt-8 bg-gray-900 text-sm font-semibold text-white shadow-sm hover:bg-brand'
					size='lg'
				>
					Wróć do strony głównej
				</Button>
			</Link>
		</section>
	);
}
