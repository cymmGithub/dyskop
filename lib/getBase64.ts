import path from 'node:path';
import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

const getImage = async (src: string) => {
	const buffer = await fs.readFile(path.join('./public/img/gallery', src));

	const {
		metadata: { height, width },
		...plaiceholder
	} = await getPlaiceholder(buffer, { size: 10 });

	return {
		...plaiceholder,
		img: { src, height, width },
	};
};

export const addBlurredDataUrls = async (images: string[]) => {
	const base64Promises = images.map((image) => getImage(image));
	const base64Results = await Promise.all(base64Promises);
	const imagesWithBlur = images.map((image, i) => {
		return {
			image,
			base64: base64Results[i].base64
		}
	});

	return imagesWithBlur;
};
