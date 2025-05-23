'use client';

import React from 'react';
import Image from 'next/image';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { ReactImageTurntable } from 'react-image-turntable';
import { get360images } from '@/lib/get360images';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';

export default function AboutUs() {
	return (
		<div className='relative h-full overflow-y-auto overflow-x-hidden pt-24 md:pt-28'>
			<div className='relative z-10 min-h-full flex items-center py-4 sm:py-8'>
				<div className='container mx-auto flex justify-evenly flex-col-reverse sm:flex-row'>
					<div className='w-full max-w-md mx-auto px-2 sm:mx-5 sm:px-0'>
						<p className='leading-[1.5rem] sm:leading-8 text-sm sm:text-[13px] text-gray-600 text-center sm:text-left'>
							Firma Dys-Kop mieści się w Dysie k. Lublina. Świadczymy usługi
							profesjonalną minikoparką <b>Caterpillar 301.8</b> o wadze 2 ton.
						</p>
						<p className='mt-4 sm:mt-3 leading-[1.5rem] sm:leading-8 text-sm sm:text-[13px] text-gray-600 text-center sm:text-left'>
							Oferujemy również odwierty wiertnicą{' '}
							<Popover>
								<PopoverTrigger>
									<Badge
										variant="secondary"
										className="inline-flex items-center gap-1 cursor-pointer hover:bg-amber-100 transition-colors duration-200 text-xs sm:text-[13px] font-bold px-2 py-0.5"
									>
										<FaCircleInfo className="w-3 h-3" />
										DIGGA PDX2H-2
									</Badge>
								</PopoverTrigger>
								<PopoverContent className='flex flex-col gap-2 shadow-xl text-sm sm:text-base w-80 sm:w-96'>
									<div className='flex justify-center gap-2 mb-2'>
										<Image
											src='/img/homepage/wiertlo-1.png'
											alt='Wiertnica DIGGA PDX2H-2 - widok 1'
											width={100}
											height={100}
											className='rounded-md object-contain'
										/>
										<Image
											src='/img/homepage/wiertlo-2.png'
											alt='Wiertnica DIGGA PDX2H-2 - widok 2'
											width={50}
											height={50}
											className='rounded-md object-contain'
										/>
									</div>
									<ul className='list-disc mx-5 text-xs sm:text-sm'>
										<li>Dostępne średnice wierteł: <b>øfi 150mm; øfi 250mm</b> (lub inne w zależności od skali przedsięwzięcia)</li>
										<li>Głębokość wiercenia - standardowo do <b>120cm</b> (przy szczególnych projektach możliwość zastosowania przedłużki)</li>
										<li>Adapter do wkręcania kotew</li>
										<li>System pionowania <b>HALO</b> opierający się na 6 czujnikach zamontowanych w obudowie napędu. Czujniki dają dokładny pomiar nachylenia jednostki napędowej. System pozwala również na utrzymanie prostego odwiertu pod wybranym kątem.</li>
										<li>Max. moment obrotowy <b>1743 Nm</b></li>
									</ul>
								</PopoverContent>
							</Popover>
							, która gwarantuje wykonanie idealnie równych i pionowych odwiertów
							(możliwe również wiercenie pod innym zadanym kątem). Realizujemy
							kompleksowe usługi dla branży sadowniczej i ogrodzeniowej,
							polegające na wykonaniu odwiertów i wstawieniu chwytakiem słupków
							betonowych lub drewnianych. Ponadto wkręcamy różnego rodzaju
							kotwy.
						</p>
						<p className='mt-4 sm:mt-3 leading-[1.5rem] sm:leading-8 text-sm sm:text-[13px] text-gray-600 text-center sm:text-left'>
							Usługi świadczymy głównie w <b>Lublinie</b> i powiecie lubelskim
							oraz na terenie powiatów ościennych: <b>świdnickiego</b>,{' '}
							<b>lubartowskiego</b>, <b>opolskiego</b>, <b>puławskiego</b> i{' '}
							<b>kraśnickiego</b>. Przy większych projektach działamy na terenie
							całego województwa lubelskiego oraz ościennych.
						</p>
					</div>
					<div className='turntable-image-container'>
						<Popover>
							<PopoverTrigger className='flex gap-2 ms-7 text-xs sm:text-sm text-center items-center'>
								<FaCircleInfo className='hover:scale-125 text-lg' />
								<span>Informacje techniczne</span>
							</PopoverTrigger>
							<PopoverContent className='flex flex-col gap-2 shadow-xl text-sm sm:text-base'>
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
						<ReactImageTurntable
							images={get360images}
							className='cursor-pointer mx-5 sm:mx-0'
						/>
						<div className='flex justify-center items-center gap-2 text-gray-500 mt-2 mb-8 sm:mb-0'>
							<FaArrowLeft className='animate-pulse' />
							<span className='text-sm'>Obróć 360°</span>
							<FaArrowRight className='animate-pulse' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
