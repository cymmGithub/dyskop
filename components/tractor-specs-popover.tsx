'use client';

import { FaCircleInfo } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export default function TractorSpecsPopover() {
	return (
		<Popover>
			<PopoverTrigger>
				<Badge
					variant='secondary'
					className='inline-flex items-center gap-1 cursor-pointer bg-amber-300 hover:bg-amber-400 transition-colors duration-200 text-xs font-bold px-1.5 py-1'
				>
					<FaCircleInfo className='w-3 h-3' />
					<small className='mt-[2px]'>Traktor</small>
				</Badge>
			</PopoverTrigger>
			<PopoverContent className='flex flex-col gap-2 shadow-xl text-sm'>
				Farmtrac 26 PRO 4WD — dane techniczne:
				<ul className='list-disc mx-5'>
					<li>
						silnik: 3-cylindrowy, <b>26&nbsp;KM</b> @ 2500&nbsp;obr/min
					</li>
					<li>
						skrzynia biegów: <b>9&nbsp;przód + 3&nbsp;tył</b>
					</li>
					<li>
						WOM (PTO): <b>540/540E</b>&nbsp;obr/min
					</li>
					<li>
						hydraulika: kat.&nbsp;I&nbsp;N, udźwig <b>750&nbsp;kg</b>
					</li>
					<li>
						napęd: <b>4WD</b> z blokadą mechanizmu różnicowego
					</li>
					<li>
						układ kierowniczy: <b>wspomagany</b>
					</li>
					<li>
						hamulce: <b>olejowe</b>
					</li>
					<li>
						opony: przód 6×12, tył 8.3×20
					</li>
					<li>
						masa: <b>869–879&nbsp;kg</b>
					</li>
					<li>
						zbiornik paliwa: <b>24&nbsp;l</b>
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
}
