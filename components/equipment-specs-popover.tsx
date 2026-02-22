'use client';

import { FaCircleInfo } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export default function EquipmentSpecsPopover() {
	return (
		<Popover>
			<PopoverTrigger>
				<Badge
					variant='secondary'
					className='inline-flex items-center gap-1 cursor-pointer bg-amber-300 hover:bg-amber-400 transition-colors duration-200 text-xs font-bold px-1.5 py-1'
				>
					<FaCircleInfo className='w-3 h-3' />
					<small className='mt-[2px]'>Koparka</small>
				</Badge>
			</PopoverTrigger>
			<PopoverContent className='flex flex-col gap-2 shadow-xl text-sm'>
				- Podstawowe możliwości wykopów:
				<ul className='list-disc mx-5'>
					<li>
						łyżki kopiące o szer.: <b>30cm, 60cm, 100cm</b> (skarpowa)
					</li>
					<li>
						maksymalna głębokość kopania - <b>2,5m</b>
					</li>
					<li>
						maksymalny zasięg ramienia - <b>3,8m</b>
					</li>
					<li>
						gąsiennice rozsuwane od <b>100cm</b> do <b>130cm</b>
					</li>
				</ul>
				<b>
					Maszyna ma fukncje pływającego lemiesza (niespotykaną w innych
					minikoparkach).
				</b>
				System automatycznie w czasie jazdy koryguje jego pozycję,
				dzięki czemu po zakończeniu wykopów teren zostanie idealnie
				wyrównany.
			</PopoverContent>
		</Popover>
	);
}
