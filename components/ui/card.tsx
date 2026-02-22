"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const cards = [
	{
		label: "Usługi minikoparką",
		image: "/img/homepage/minikoparka-prace-ziemne-lublin.png",
		alt: "Minikoparka do prac ziemnych i wykopów — usługi Lublin",
		href: "/uslugi-minikoparka-lubelskie",
	},
	{
		label: "Konstrukcje sadownicze",
		image: "/img/homepage/konstrukcje-sadownicze-wiertnica-lublin.png",
		alt: "Konstrukcje sadownicze — wiertnica i słupki Lublin",
		href: "/konstrukcje-sadownicze-lubelskie",
	},
	{
		label: "Usługi minitraktorem",
		image: "/img/homepage/minitraktor-przygotowanie-terenu-lublin.png",
		alt: "Minitraktor do przygotowania terenu — usługi Lublin",
		href: "/uslugi-minitraktorem-lubelskie",
	},
];

const delays = ["1.8s", "2.1s", "2.4s"];

export default function ServiceCards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-xs md:max-w-none mx-auto">
			{cards.map((card, i) => (
				<Link
					key={card.label}
					href={card.href}
					className="group animate-slideUp opacity-0"
					style={{
						animationDelay: delays[i],
						animationFillMode: "forwards",
					}}
				>
					<div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-amber-400/15 group-hover:border-amber-300">
						{/* Amber accent line */}
						<div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-400 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-10" />

						<div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
							<Image
								src={card.image}
								alt={card.alt}
								fill
								className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</div>

						{/* Label inside the card */}
						<div className="flex items-center justify-center gap-2 px-4 py-2.5 border-t border-gray-100">
							<h3 className="font-bold text-sm text-gray-800 transition-colors duration-500 ease-out group-hover:text-amber-600">
								{card.label}
							</h3>
							<HiArrowRight className="text-gray-300 text-sm transition-all duration-500 ease-out group-hover:text-amber-500 group-hover:translate-x-1" />
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
