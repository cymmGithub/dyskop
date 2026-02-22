import Image from 'next/image';
import { FaCircleInfo } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import EquipmentSpecsPopover from '@/components/equipment-specs-popover';

export default function AboutUs() {
	return (
		<main className='relative overflow-x-hidden pt-20 md:pt-28 pb-4 md:pb-36'>
			<div className='sketchy-bg absolute inset-0 opacity-30 pointer-events-none' />
			<div className='relative z-10 container mx-auto px-5 sm:px-10'>
				<div
					className='flex flex-col items-start md:flex-row md:items-center gap-6 md:gap-8 mt-2 md:mt-4 opacity-0 animate-slideUp'
					style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
				>
					{/* LEFT — Text content */}
					<div className='w-full md:w-1/2 border-l-4 border-amber-500 pl-5 [&_p]:text-left'>
						<h1 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight'>
							O nas
						</h1>

						<p className='mt-2 text-sm leading-snug text-gray-600'>
							Dys-Kop to firma specjalizująca się w&nbsp;usługach minikoparką, wiertnicą
							oraz minitraktorem na terenie Lublina i&nbsp;województwa lubelskiego.
							Realizujemy prace ziemne oraz przygotowanie terenu pod inwestycje
							budowlane, ogrodowe i&nbsp;sadownicze.
						</p>

						<div className='mt-2'>
							<p className='text-sm leading-snug text-gray-600 mb-1.5'>
								Zakres naszych usług obejmuje:
							</p>
							<ul className='space-y-1 text-sm text-gray-600'>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<span>
										<span className='font-semibold text-amber-600 underline'>usługi minikoparką</span>
										{' '}– wykopy pod przyłącza i&nbsp;fundamenty, wiercenie otworów pod słupy, przygotowanie terenu
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<span>
										<span className='font-semibold text-amber-600 underline'>konstrukcje sadownicze</span>
										{' '}– wiercenie otworów, wkręcanie kotew i&nbsp;montaż słupów pod sady i&nbsp;plantacje
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<span>
										<span className='font-semibold text-amber-600 underline'>usługi minitraktorem</span>
										{' '}– glebogryzarka separacyjna, koszenie działek i&nbsp;nieużytków, uprawa gleby i&nbsp;rekultywacja terenu
									</span>
								</li>
							</ul>
						</div>

						<p className='mt-2 text-sm leading-snug text-gray-600'>
							Działamy głównie w&nbsp;<b>Lublinie</b> i&nbsp;okolicznych powiatach:{' '}
							<b>lubelskim</b>, <b>świdnickim</b>, <b>lubartowskim</b>,{' '}
							<b>opolskim</b>, <b>puławskim</b> i&nbsp;<b>kraśnickim</b>.
							Większe projekty, w&nbsp;tym konstrukcje sadownicze, realizujemy na terenie
							całego województwa lubelskiego oraz w&nbsp;regionach sąsiednich.
						</p>
					</div>

					{/* RIGHT — Equipment showcase */}
					<div
						className='w-full md:w-1/2 relative flex flex-col items-center md:self-start md:mt-12 opacity-0 animate-slideUp'
						style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
					>
						<div className='relative'>
							<Image
								src='/img/minikoparka-caterpillar-301-wiertnica-digga.png'
								alt='Minikoparka Caterpillar 301.8 z wiertnicą DIGGA PDX2H-2 — Lublin'
								width={320}
								height={240}
								priority
								className='w-full max-w-[250px] md:max-w-[230px] object-contain'
							/>
							<div className='absolute top-[9%] right-[15%]'>
								<EquipmentSpecsPopover />
							</div>
							<div className='absolute top-[44%] left-[-30%]'>
								<Popover>
									<PopoverTrigger>
										<Badge
											variant='secondary'
											className='inline-flex items-center gap-1 cursor-pointer bg-amber-300 hover:bg-amber-400 transition-colors duration-200 text-xs font-bold px-1.5 py-1'
										>
											<FaCircleInfo className='w-3 h-3' />
											<small className='mt-[2px]'>Wiertnica</small>
										</Badge>
									</PopoverTrigger>
									<PopoverContent className='flex flex-col gap-2 shadow-xl text-sm sm:text-base w-80 sm:w-96'>
										<div className='flex justify-center gap-2 mb-2'>
											<Image
												src='/img/homepage/wiertlo-1.png'
												alt='Wiertnica DIGGA PDX2H-2 do odwiertów — Lublin'
												width={100}
												height={100}
												className='rounded-md object-contain'
											/>
											<Image
												src='/img/homepage/wiertlo-2.png'
												alt='Wiertło wiertnica DIGGA PDX2H-2 — szczegóły konstrukcji'
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
							</div>
						</div>

					</div>
				</div>
			</div>
		</main>
	);
}
