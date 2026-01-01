"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
	images: {
		src: string;
		base64: string;
		alt?: string;
	}[];
}

const IMAGES_PER_PAGE = 24;

export default function Gallery({ images }: GalleryProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);

	const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
	const startIndex = currentPage * IMAGES_PER_PAGE;
	const currentPageImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

	// Create array of 24 items, filling with null for empty slots
	const gridItems = Array.from({ length: IMAGES_PER_PAGE }, (_, i) =>
		currentPageImages[i] || null
	);

	const goToNextPage = () => {
		if (currentPage < totalPages - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<section className='container mx-auto min-h-screen relative h-full overflow-y-auto pt-20 md:pt-32 pb-32 md:pb-20'>
			{/* Desktop: Paginated gallery with chevrons */}
			<div className='hidden md:block relative px-2 sm:py-4 max-w-4xl mx-auto mt-6 md:mt-0'>
				{/* Left Chevron */}
				{currentPage > 0 && (
					<button
						onClick={goToPreviousPage}
						className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
						aria-label='Previous page'
					>
						<ChevronLeft className='w-6 h-6 text-gray-800' />
					</button>
				)}

				{/* Grid */}
				<div className='grid gap-1 grid-cols-3 sm:grid-cols-gallery-sm md:gap-2'>
					{gridItems.map((imageWithBlur, i) => (
						<div
							key={i}
							className='aspect-square bg-gray-200 rounded-md shadow-sm relative overflow-hidden group md:shadow-md md:rounded-lg'
							onClick={() => {
								if (imageWithBlur) {
									setPhotoIndex(startIndex + i);
									setIsOpen(true);
								}
							}}
							style={!imageWithBlur ? { opacity: 0, pointerEvents: 'none' } : {}}
						>
							{imageWithBlur && (
								<Image
									src={imageWithBlur.src}
									alt={imageWithBlur.alt || `Zdjęcie z galerii ${startIndex + i + 1}`}
									className='object-cover cursor-pointer md:group-hover:opacity-75 md:group-hover:scale-110 transition-all duration-300 ease-in-out'
									fill={true}
									sizes='(max-width: 768px) 28vw, (min-width: 1380px) 180px, (min-width: 1120px) calc(20vw - 24px), (min-width: 860px) calc(25vw - 32px), calc(33vw - 50px)'
									placeholder={imageWithBlur.base64 ? 'blur' : 'empty'}
									blurDataURL={imageWithBlur.base64 || undefined}
								/>
							)}
						</div>
					))}
				</div>

				{/* Right Chevron */}
				{currentPage < totalPages - 1 && (
					<button
						onClick={goToNextPage}
						className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
						aria-label='Next page'
					>
						<ChevronRight className='w-6 h-6 text-gray-800' />
					</button>
				)}
			</div>

			{/* Mobile: Scrollable gallery with all images */}
			<div className='md:hidden relative px-2 sm:py-4 grid gap-1 grid-cols-3 sm:grid-cols-gallery-sm max-w-4xl mx-auto mt-6'>
				{images.map((imageWithBlur, i) => (
					<div
						key={i}
						className='aspect-square bg-gray-200 rounded-md shadow-sm relative overflow-hidden group'
						onClick={() => {
							setPhotoIndex(i);
							setIsOpen(true);
						}}
					>
						<Image
							src={imageWithBlur.src}
							alt={imageWithBlur.alt || `Zdjęcie z galerii ${i + 1}`}
							className='object-cover cursor-pointer transition-all duration-300 ease-in-out'
							fill={true}
							sizes='(max-width: 768px) 28vw, (min-width: 1380px) 180px, (min-width: 1120px) calc(20vw - 24px), (min-width: 860px) calc(25vw - 32px), calc(33vw - 50px)'
							placeholder={imageWithBlur.base64 ? 'blur' : 'empty'}
							blurDataURL={imageWithBlur.base64 || undefined}
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
