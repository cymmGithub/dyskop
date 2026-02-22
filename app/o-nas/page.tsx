import Image from 'next/image';
import Link from 'next/link';
import { FaCircleInfo } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import EquipmentSpecsPopover from '@/components/equipment-specs-popover';
import { H1, P, Span } from '@/components/ui/text';

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
						<H1 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight'>
							O nas
						</H1>

						<P className='mt-2 text-sm leading-snug text-gray-600'>
							Dys-Kop to firma specjalizująca się w usługach minikoparką, wiertnicą
							oraz minitraktorem na terenie Lublina i województwa lubelskiego.
							Realizujemy prace ziemne oraz przygotowanie terenu pod inwestycje
							budowlane, ogrodowe i sadownicze.
						</P>

						<div className='mt-2'>
							<P className='text-sm leading-snug text-gray-600 mb-1.5'>
								Zakres naszych usług obejmuje:
							</P>
							<ul className='space-y-1 text-sm text-gray-600'>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<Span>
										<Link href='/uslugi-minikoparka-lubelskie' className='font-semibold text-amber-600 underline'>usługi minikoparką</Link>
										{' '}– wykopy pod przyłącza i fundamenty, wiercenie otworów pod słupy, przygotowanie terenu
									</Span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<Span>
										<Link href='/konstrukcje-sadownicze-lubelskie' className='font-semibold text-amber-600 underline'>konstrukcje sadownicze</Link>
										{' '}– wiercenie otworów, wkręcanie kotew i montaż słupów pod sady i plantacje
									</Span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
									<Span>
										<Link href='/uslugi-minitraktorem-lubelskie' className='font-semibold text-amber-600 underline'>usługi minitraktorem</Link>
										{' '}– glebogryzarka separacyjna, koszenie działek i nieużytków, uprawa gleby i rekultywacja terenu
									</Span>
								</li>
							</ul>
						</div>

						<P className='mt-2 text-sm leading-snug text-gray-600'>
							Działamy głównie w <b>Lublinie</b> i okolicznych powiatach:{' '}
							<b>lubelskim</b>, <b>świdnickim</b>, <b>lubartowskim</b>,{' '}
							<b>opolskim</b>, <b>puławskim</b> i <b>kraśnickim</b>.
							Większe projekty, w tym konstrukcje sadownicze, realizujemy na terenie
							całego województwa lubelskiego oraz w regionach sąsiednich.
						</P>
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
												src='/img/homepage/wiertlo-digga-odwierty-zblizenie-lublin.png'
												alt='Wiertnica DIGGA PDX2H-2 do odwiertów — Lublin'
												width={100}
												height={100}
												className='rounded-md object-contain'
											/>
											<Image
												src='/img/homepage/wiertlo-digga-spirala-szczegoly-lublin.png'
												alt='Wiertło wiertnica DIGGA PDX2H-2 — szczegóły konstrukcji Lublin'
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
