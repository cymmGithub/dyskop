import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { addBlurredDataUrls } from '@/lib/getBase64';

export default async function Realizations() {
	const dirRelativeToPublicFolder = 'img/gallery';
	const dir = path.resolve('./public', dirRelativeToPublicFolder);
	const filenames = fs.readdirSync(dir);
	const blurredImages = await addBlurredDataUrls(filenames)

	return (
		<section className='px-2 my-3 grid gap-2 grid-cols-gallery'>
			{blurredImages.map((imageWithBlur, i) => (
				<div
					key={i}
					className='h-64 bg-gray-200 rounded-xl shadow-lg relative overflow-hidden group'
				>
					<Image
						src={`/img/gallery/${imageWithBlur.image}`}
						alt='test image'
						className='object-cover cursor-pointer group-hover:opacity-75'
						fill={true}
						sizes='(min-width: 1380px) 251px, (min-width: 1120px) calc(25vw - 26px), (min-width: 860px) calc(33.33vw - 32px), (min-width: 780px) calc(50vw - 44px), (min-width: 540px) 50vw, calc(100vw - 16px)'
						placeholder='blur'
						blurDataURL={imageWithBlur.base64}
					/>
				</div>
			))}
		</section>
	);
}
