'use client';

import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';

interface GalleryProps {
	images: {
		image: string;
		base64: string;
	}[];
}

export default function Gallery({ images }: GalleryProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	return (
		<section className='container mx-auto h-full relative overflow-hidden pt-20 md:pt-32'>
			<div className='relative z-20 px-2 sm:py-4 grid gap-1 grid-cols-3 sm:grid-cols-gallery-sm md:gap-2 max-w-5xl mx-auto -mb-20 mt-6 md:mt-0'>
				{images.map((imageWithBlur, i) => (
					<div
						key={i}
						className={`aspect-square bg-gray-200 rounded-md shadow-sm relative overflow-hidden group md:shadow-md md:rounded-lg ${
							i >= 12 ? 'hidden md:block' : ''
						}`}
						onClick={() => {
							setPhotoIndex(i);
							setIsOpen(true);
						}}
					>
						<Image
							src={`/img/gallery/${imageWithBlur.image}`}
							alt={`${imageWithBlur.image} - zdjęcie z galerii`}
							className='object-cover cursor-pointer md:group-hover:opacity-75 md:group-hover:scale-110 transition-all duration-300 ease-in-out'
							fill={true}
							sizes='(max-width: 768px) 28vw, (min-width: 1380px) 180px, (min-width: 1120px) calc(20vw - 24px), (min-width: 860px) calc(25vw - 32px), calc(33vw - 50px)'
							placeholder='blur'
							blurDataURL={imageWithBlur.base64}
						/>
					</div>
				))}
			</div>

			<Lightbox
				open={isOpen}
				close={() => setIsOpen(false)}
				index={photoIndex}
				slides={images.map((img) => ({
					src: `/img/gallery/${img.image}`,
				}))}
			/>
		</section>
	);
}