import { H1, Span } from '@/components/ui/text';

/** Shared title and label slots keep service navigation visually stable. */
export default function ServiceHeading({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<H1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
			<Span className='block min-h-[2.5em] xl:min-h-[1.25em]'>{title}</Span>
			<Span className='block min-h-[4.5em] lg:min-h-[3em] text-amber-600 text-base sm:text-lg md:text-xl leading-normal mt-1 font-semibold tracking-normal'>
				{subtitle}
			</Span>
		</H1>
	);
}
