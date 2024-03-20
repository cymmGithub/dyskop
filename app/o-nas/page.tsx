'use client';

import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { ReactImageTurntable } from 'react-image-turntable';
import { get360images } from '@/lib/get360images';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export default function AboutUs() {
	return (
		<div className='bg-white sm:py-20'>
			<div className='mx-auto flex justify-evenly flex-col-reverse sm:flex-row'>
				<div className='max-w-md mx-5'>
					<p className='leading-8 text-gray-600'>
						Firma Dys-Kop mieści się w Dysie k. Lublina. Świadczymy usługi
						profesjonalną minikoparką <b>Caterpillar 301.8</b> o wadze 2 ton.
						Maszyna ta ma największą moc w klasie koparek do 2 ton przez co jest
						w stanie dotrzeć tam gdzie nie wjedzie duży sprzęt i wykonać roboty
						ziemne szybko i sprawnie.
					</p>
					<p className='mt-6 leading-8 text-gray-600'>
						Usługi świadczymy głównie w <b>Lublinie</b> i powiecie lubelskim
						oraz na terenie powiatów ościennych: <b>świdnickiego</b>,{' '}
						<b>lubartowskiego</b>, <b>opolskiego</b>, <b>puławskiego</b> i{' '}
						<b>kraśnickiego</b>. Przy większych projektach działamy na terenie
						całego województwa lubelskiego oraz ościennych.
					</p>
				</div>
				<div className='turntable-image-container'>
					<Popover>
						<PopoverTrigger className='flex gap-2 ms-7 text-xs text-center items-center'>
							<FaCircleInfo className='hover:scale-125 text-lg' />
							<span>Informacje techniczne</span>
						</PopoverTrigger>
						<PopoverContent className='flex flex-col gap-2 shadow-xl'>
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
							System automatycznie w czasie jazdy koryguje jego pozycję, dzięki
							czemu po zakończeniu wykopów teren zostanie idealnie wyrównany.
						</PopoverContent>
					</Popover>
					<ReactImageTurntable
						images={get360images}
						className='cursor-pointer mx-5 sm:mx-0'
					/>
				</div>
			</div>
		</div>
	);
}
