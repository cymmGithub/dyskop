import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center text-center'>
			<h1>
				<b>404 not found</b>
			</h1>
			<h2>Przykro nam, ale strona nie istnieje :(</h2>
			<Link href='/' passHref legacyBehavior>
				<Button
					className='my-10 bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
					size='lg'
				>
					Wróć do strony głównej
				</Button>
			</Link>
		</section>
	);
}
