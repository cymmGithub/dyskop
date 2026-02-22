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
				Dane techniczne:
				<ul className='list-disc mx-5'>
					<li>napęd <b>4x4</b></li>
					<li>moc <b>26&nbsp;KM</b></li>
					<li>masa: <b>1067&nbsp;kg</b></li>
					<li>udźwig podnośnika: <b>800&nbsp;kg</b></li>
					<li>długość — <b>270&nbsp;cm</b> / szerokość — <b>120&nbsp;cm</b></li>
				</ul>
			</PopoverContent>
		</Popover>
	);
}
