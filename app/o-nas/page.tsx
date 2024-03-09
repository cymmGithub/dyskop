'use client';
import React, { useState } from 'react';
import { ReactImageTurntable } from 'react-image-turntable';
import { get360images } from '@/lib/get360images';

export default function Example() {
	const [rotationDisabled, setRotationDisabled] = useState(false);
	const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
		if (rotationDisabled) return;

		if (ev.key === 'ArrowLeft' || ev.key === 'ArrowRight') {
			setRotationDisabled(true);
		}
	};
	return (
		<div className='bg-white sm:py-20'>
			<div className='mx-auto flex justify-evenly flex-col-reverse sm:flex-row'>
				<div className='max-w-md mx-5'>
					<p className='mt-6 leading-8 text-gray-600'>
						Nasza firma dysponuje profesjonalną koparką jednonaczyniową
						Caterpillar 301.8. Maszyna ta ma największą moc w klasie koparek do
						2 ton przez co jest w stanie dotrzeć tam gdzie nie wjedzie duży
						sprzęt i wykonać roboty ziemne szybko i sprawnie.
					</p>
					<p className='mt-6 leading-8 text-gray-600'>
						Koparka posiada rozsuwane gąsiennice dzięki czemu może wjechać w
						bardzo ciasne miejsca - nawet o szerokości 1m.
					</p>
					<p className='mt-6 leading-8 text-gray-600'>
						Maszyna ma fukncje pływającego lemiesza (niespotykaną w innych
						minikoparkach) polegającą na tym, że system automatycznie w czasie
						jazdy koryguje jego pozycję, dzięki czemu po zakończeniu wykopów
						teren zostanie idealnie wyrównany.
					</p>
				</div>
				<div className=''>
					<ReactImageTurntable
						images={get360images}
					/>
				</div>
			</div>
		</div>
	);
}
