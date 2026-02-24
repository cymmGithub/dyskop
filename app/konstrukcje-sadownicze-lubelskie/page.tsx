import Image from "next/image";
import { H2, P } from "@/components/ui/text";

const scopeItems = [
	{
		title: "Odwierty wiertnicą",
		desc: "System pionowania HALO – gwarancja pionu i powtarzalnych odwiertów pod kątem",
	},
	{
		title: "Kotwy naciągowe",
		desc: "Wkręcanie kotew naciągowych adapterem zamontowanym na wiertnicy",
	},
	{
		title: "Montaż słupków",
		desc: "Wstawianie chwytakiem słupków betonowych i drewnianych",
	},
	{
		title: "Demontaż",
		desc: "Wyciąganie starych słupków przy modernizacji istniejących konstrukcji",
	},
];

export default function KonstrukcjeSadownicze() {
	return (
		<main className='relative overflow-hidden min-h-screen'>
			<div className='sketchy-bg absolute inset-0 opacity-30 pointer-events-none' />

			<div className='relative z-10 container mx-auto px-5 sm:px-10 pt-20 md:pt-24 pb-4 min-h-screen flex flex-col'>
				{/* Z-pattern grid — stacks on mobile, 5-col on desktop */}
				<div className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:gap-y-4 flex-1 mt-12 [&_p]:text-left'>
					{/* Row 1, Left: headline + intro */}
					<div
						className='md:col-span-3 flex flex-col justify-center order-1 md:order-none [&_p]:text-left opacity-0 animate-slideUp'
						style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
					>
						<div className='border-l-4 border-amber-500 pl-5'>
							<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
								Konstrukcje sadownicze
								<span className='block text-amber-500 text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-normal'>
									wiercenie otworów i&nbsp;montaż słupów — Woj.&nbsp;lubelskie
								</span>
							</h1>
							<P className='mt-2 text-sm leading-snug text-gray-600 max-w-lg'>
								Specjalizujemy się w precyzyjnym wierceniu otworów pod słupy
								sadownicze oraz montażu słupów betonowych i drewnianych przy
								użyciu chwytaka. Realizujemy prace zarówno przy nowych
								nasadzeniach, jak i przy modernizacji istniejących sadów i
								plantacji.
							</P>
						</div>
					</div>

					{/* Row 1, Right: gripper image */}
					<div
						className='md:col-span-2 flex items-end justify-center order-2 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
					>
						<Image
							src='/img/konstrukcje-sadownicze-chwytak-slup-lublin.png'
							alt='Konstrukcje sadownicze — montaż słupów betonowych chwytakiem na minikoparce Lublin'
							width={460}
							height={307}
							priority
							className='w-full max-w-[200px] object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
						/>
					</div>

					{/* Row 2, Left: scope of work 2×2 cards */}
					<div
						className='md:col-span-3 order-4 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
					>
						<H2 className='text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2'>
							Zakres prac:
						</H2>
						<div className='grid grid-cols-2 gap-2'>
							{scopeItems.map((item) => (
								<div
									key={item.title}
									className='relative bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 px-3 py-2'
								>
									<div className='absolute top-0 left-0 w-8 h-0.5 bg-amber-400 rounded-full' />
									<h3 className='text-xs md:text-sm font-bold text-gray-800'>
										{item.title}
									</h3>
									<p className='text-xs text-gray-500 mt-0.5 leading-snug'>
										{item.desc}
									</p>
								</div>
							))}
						</div>
						<p className='mt-2 text-xs text-gray-400 leading-snug'>
							Zlecenia realizujemy na terenie całego województwa lubelskiego, a
							przy większych projektach również w regionach sąsiednich.{" "}
							<span className='text-gray-600 font-medium'>
								Obsługujemy największe zagłębia sadownicze w promieniu do 150 km
								od Lublina
							</span>{" "}
							– Powiśle Lubelskie (Opole Lubelskie, Józefów nad Wisłą, Wilków,
							Łaziska), rejon Kraśnika i Urzędowa, okolice Puław i Nałęczowa,
							północne Lubelskie (Wisznice, Jabłoń, okolice Łukowa) oraz powiat
							lipski (Lipsko, Sienno) i rejon Sandomierza.
							<span className='text-gray-600 font-medium'>
								{" "}Duże realizacje wykonujemy także w zagłębiu grójeckim na
								Mazowszu, m.in. w rejonie Grójca, Warki i Wilgi.
							</span>
						</p>
					</div>

					{/* Row 2, Right: drill image */}
					<div
						className='md:col-span-2 flex items-start justify-center order-3 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
					>
						<Image
							src='/img/minikoparka-wiertnica-konstrukcje-sadownicze-lublin.png'
							alt='Konstrukcje sadownicze — wiercenie otworów pod słupy wiertnicą z systemem pionowania Lublin'
							width={460}
							height={307}
							className='w-full max-w-[180px] object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
