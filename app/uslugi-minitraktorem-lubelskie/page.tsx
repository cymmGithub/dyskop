import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const attachments = [
	{
		title: "KOSIARKA PIELĘGNACYJNA",
		image: "/img/kosiarka-pielegnacyjna-minitraktor.png",
		alt: "Kosiarka pielęgnacyjna na minitraktorze — koszenie trawników Lublin",
		href: "#",
		items: ["koszenie trawników", "pielęgnacja terenów zielonych"],
	},
	{
		title: "GLEBOGRYZARKA SEPARACYJNA",
		image: "/img/glebogryzarka-separacyjna-minitraktor.png",
		alt: "Glebogryzarka separacyjna — przygotowanie terenu pod trawnik Lublin",
		href: "#",
		items: ["przygotowanie terenu pod trawnik", "uprawa gleby"],
	},
	{
		title: "PŁUG",
		image: "/img/plug-minitraktor.png",
		alt: "Pług do minitraktor — orka ogrodów i działek Lublin",
		href: "#",
		items: ["orka pod uprawy", "orka ogrodów"],
	},

	{
		title: "KOSIARKA BIJAKOWA",
		image: "/img/kosiarka-bijakowa-minitraktor.png",
		alt: "Kosiarka bijakowa — mulczowanie nieużytków i koszenie Lublin",
		href: "#",
		items: ["mulczowanie nieużytków", "koszenie wysokiej roślinności"],
	},
];

const cardDelays = ["0.2s", "0.4s", "0.6s", "0.8s"];

export default function UslugiMinitraktorem() {
	return (
		<main className='relative overflow-hidden min-h-screen'>
			<div className='sketchy-bg absolute inset-0 opacity-30 pointer-events-none' />

			<div className='relative z-10 container mx-auto px-5 sm:px-10 pt-20 md:pt-24 pb-4 min-h-screen flex flex-col'>
				<div className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:gap-y-4 flex-1 mt-8 [&_p]:text-left'>
					{/* Row 1, Left: Farmtrac image */}
					<div
						className='md:col-span-2 flex items-end justify-center order-2 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
					>
						<Image
							src='/img/minitraktor-farmtrac-26-pro.png'
							alt='Minitraktor Farmtrac 26 PRO — usługi minitraktorem Lublin i okolice'
							width={500}
							height={340}
							priority
							className='w-full max-w-[300px] object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
						/>
					</div>

					{/* Row 1, Right: headline + intro */}
					<div
						className='md:col-span-3 flex flex-col justify-center border-l-4 border-amber-500 pl-5 order-1 md:order-none [&_p]:text-left opacity-0 animate-slideUp'
						style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
					>
						<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
							Usługi minitraktorem
							<span className='block text-amber-500 text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-normal'>
								powiat lubelski i&nbsp;okolice
							</span>
						</h1>
						<p className='mt-2 text-sm leading-snug text-gray-600 max-w-lg'>
							Oferujemy profesjonalne usługi minitraktorem wykonywane
							kompaktowym ciągnikiem o&nbsp;mocy{" "}
							<b className='text-gray-800'>26&nbsp;KM</b>. To niewielka, ale
							niezwykle wszechstronna maszyna, która doskonale sprawdza się
							zarówno na terenach prywatnych, jak i&nbsp;inwestycyjnych. Dzięki
							małym gabarytom i&nbsp;dużej zwrotności możemy pracować
							w&nbsp;miejscach niedostępnych dla ciężkiego sprzętu.
						</p>

						{/* Row 2, Right: coverage area */}
						<div
							className='md:col-span-2 flex flex-col justify-start order-3 md:order-none opacity-0 animate-slideUp'
							style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
						>
							<h2 className='flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2 mt-2'>
								<FaMapMarkerAlt className='text-amber-500 text-xs' />
								Gdzie realizujemy usługi minitraktorem?
							</h2>
							<span className='text-xs text-gray-500 leading-snug'>
								Usługi minitraktorem realizujemy na terenie{" "}
								<span className='text-gray-600 font-medium'>Lublina</span>,
								powiatu lubelskiego oraz w&nbsp;miejscowościach oddalonych do
								ok.&nbsp;
								<span className='text-gray-600 font-medium'>30–40&nbsp;km</span>{" "}
								od Lublina — m.in. Świdnik, Lubartów, Konopnica, Garbów,
								Jastków, Jakubowice, Turka i&nbsp;okolice. Traktor wyposażony
								jest w profesjonalny osprzęt do uprawy ziemi, mulczowania
								nieużytków i koszenia terenów zielonych. Szczegóły dostępne są w
								opisach poszczególnych osprzętów.
							</span>
						</div>
					</div>

					{/* Row 2: attachment cards spanning full width */}
					<div className='md:col-span-5 order-4 md:order-none'>
						<h2 className='text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2'>
							Osprzęt
						</h2>
						<div className='grid grid-cols-2 xl:grid-cols-4 gap-3'>
							{attachments.map((attachment, i) => (
								<Link
									key={attachment.title}
									href={attachment.href}
									className='group opacity-0 animate-slideUp'
									style={{
										animationDelay: cardDelays[i],
										animationFillMode: "forwards",
									}}
								>
									<article className='relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-amber-400/15 group-hover:border-amber-300'>
										{/* Amber accent top line */}
										<div className='absolute top-0 left-0 right-0 h-0.5 bg-amber-400 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-10' />

										{/* Image strip */}
										<div className='h-24 sm:h-28 flex items-center justify-center overflow-hidden'>
											<Image
												src={attachment.image}
												height={100}
												width={180}
												alt={attachment.alt}
												className='p-2 object-contain max-h-full opacity-80 transition-transform duration-500 ease-out group-hover:scale-105'
											/>
										</div>

										{/* Title row */}
										<div className='flex items-center justify-between gap-2 px-3 py-2 border-b border-gray-100'>
											<h3 className='font-bold text-xs text-gray-800 transition-colors duration-500 ease-out group-hover:text-amber-600'>
												{attachment.title}:
											</h3>
											<HiArrowRight className='text-gray-300 text-xs transition-all duration-500 ease-out group-hover:text-amber-500 group-hover:translate-x-1' />
										</div>

										{/* Service list */}
										<ul className='px-3 py-1.5 text-xs text-gray-600 space-y-0'>
											{attachment.items.map((item) => (
												<li key={item} className='flex items-start space-x-1.5'>
													<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.3rem]' />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</article>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
