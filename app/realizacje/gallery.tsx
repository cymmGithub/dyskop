"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
	images: {
		src: string;
		base64: string;
		alt?: string;
	}[];
}

const IMAGES_PER_PAGE = 8;

const GRID_AREAS = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

const AREA_SIZES: Record<string, string> = {
	a: "(max-width: 768px) 48vw, 40vw",
	b: "(max-width: 768px) 48vw, 18vw",
	c: "(max-width: 768px) 48vw, 18vw",
	d: "(max-width: 768px) 48vw, 18vw",
	e: "(max-width: 768px) 48vw, 18vw",
	f: "(max-width: 768px) 48vw, 18vw",
	g: "(max-width: 768px) 48vw, 18vw",
	h: "(max-width: 768px) 48vw, 35vw",
};

export default function Gallery({ images }: GalleryProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
	const startIndex = currentPage * IMAGES_PER_PAGE;
	const currentPageImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const changePage = useCallback((newPage: number) => {
		if (newPage < 0 || newPage >= totalPages || newPage === currentPage) return;
		setIsTransitioning(true);
		setTimeout(() => {
			setCurrentPage(newPage);
			setIsTransitioning(false);
		}, 150);
	}, [totalPages, currentPage]);

	const goToNextPage = useCallback(() => {
		changePage(currentPage + 1);
	}, [changePage, currentPage]);

	const goToPreviousPage = useCallback(() => {
		changePage(currentPage - 1);
	}, [changePage, currentPage]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen) return;
			if (e.key === "ArrowRight") goToNextPage();
			if (e.key === "ArrowLeft") goToPreviousPage();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, goToNextPage, goToPreviousPage]);

	return (
		<section className="h-full flex flex-col">
			{/* Desktop: Bento mosaic grid */}
			<div className="hidden md:block flex-1 min-h-0 px-4 md:px-8 py-4 relative mt-32">
				{/* Left chevron */}
				{currentPage > 0 && (
					<button
						onClick={goToPreviousPage}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
						aria-label="Poprzednia strona"
					>
						<ChevronLeft className="w-5 h-5 text-gray-800" />
					</button>
				)}

				<div
					className={`h-full gap-2 transition-opacity duration-300 ${
						isTransitioning ? "opacity-0" : "opacity-100"
					}`}
					style={{
						display: "grid",
						gridTemplateAreas: `"a a b c" "a a d e" "f g h h"`,
						gridTemplateColumns: "2fr 1fr 1fr 2fr",
						gridTemplateRows: "1fr 1fr 1fr",
					}}
				>
					{GRID_AREAS.map((area, i) => {
						const image = currentPageImages[i];
						if (!image) return null;
						const isFeatured = area === "a";

						return (
							<div
								key={`${currentPage}-${area}`}
								className={`relative overflow-hidden rounded-lg group cursor-pointer ${
									hasMounted && !isTransitioning ? "opacity-0 animate-fade-in" : ""
								}`}
								style={{
									gridArea: area,
									animationDelay: hasMounted ? `${i * 0.05}s` : "0s",
								}}
								onClick={() => {
									setPhotoIndex(startIndex + i);
									setIsOpen(true);
								}}
							>
								{image && (
									<>
										<Image
											src={image.src}
											alt={image.alt || `Zdjęcie z galerii ${startIndex + i + 1}`}
											className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
											fill
											sizes={AREA_SIZES[area]}
											placeholder={image.base64 ? "blur" : "empty"}
											blurDataURL={image.base64 || undefined}
											priority={currentPage === 0 && isFeatured}
										/>

										{/* Hover overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

										{/* Image number badge */}
										<span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm pointer-events-none">
											{startIndex + i + 1}
										</span>

										{/* Featured accent bar */}
										{isFeatured && (
											<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
										)}
									</>
								)}
							</div>
						);
					})}
				</div>

				{/* Right chevron */}
				{currentPage < totalPages - 1 && (
					<button
						onClick={goToNextPage}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
						aria-label="Następna strona"
					>
						<ChevronRight className="w-5 h-5 text-gray-800" />
					</button>
				)}
			</div>

			{/* Mobile: 2-col scrollable grid */}
			<div className="md:hidden flex-1 overflow-y-auto px-2 py-4 mt-24 grid grid-cols-2 gap-1.5 auto-rows-[160px] content-start">
				{images.map((image, i) => (
					<div
						key={i}
						className="relative overflow-hidden rounded-lg"
						onClick={() => {
							setPhotoIndex(i);
							setIsOpen(true);
						}}
					>
						<Image
							src={image.src}
							alt={image.alt || `Zdjęcie z galerii ${i + 1}`}
							className="object-cover cursor-pointer"
							fill
							sizes="48vw"
							placeholder={image.base64 ? "blur" : "empty"}
							blurDataURL={image.base64 || undefined}
						/>
					</div>
				))}
			</div>

			<Lightbox
				open={isOpen}
				close={() => setIsOpen(false)}
				index={photoIndex}
				slides={images.map((img) => ({
					src: img.src,
				}))}
			/>
		</section>
	);
}
