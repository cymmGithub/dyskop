import fs from 'fs';
import path from 'path';
import { addBlurredDataUrls } from '@/lib/getBase64';
import Gallery from './gallery';

export default async function RealizationsPage() {
	const dirRelativeToPublicFolder = 'img/gallery';
	const dir = path.resolve('./public', dirRelativeToPublicFolder);
	const filenames = fs.readdirSync(dir);
	const images = await addBlurredDataUrls(filenames);

	return <Gallery images={images} />;
}
