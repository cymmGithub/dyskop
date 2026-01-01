import fs from "fs";
import path from "path";
import { addBlurredDataUrls } from "@/lib/getBase64";
import { getGalleryData } from "@/lib/storage";
import Gallery from "./gallery";

// Ensure the page is dynamic so it fetches the latest gallery data
export const dynamic = "force-dynamic";

export default async function RealizationsPage() {
	// 1. Try to get images from Blob Storage
	try {
		const blobImages = await getGalleryData();

		if (blobImages.length > 0) {
			return (
				<Gallery
					images={blobImages.map((img) => ({
						src: img.url,
						base64: img.base64,
					}))}
				/>
			);
		}
	} catch (error) {
		console.error("Failed to fetch blob images:", error);
	}

	// 2. Fallback to File System (Legacy)
	const dirRelativeToPublicFolder = "img/gallery";
	const dir = path.resolve("./public", dirRelativeToPublicFolder);

	let filenames: string[] = [];
	try {
		if (fs.existsSync(dir)) {
			filenames = fs.readdirSync(dir);
		}
	} catch (e) {
		console.error("Failed to read gallery directory", e);
	}

	const images = await addBlurredDataUrls(filenames);

	const formattedLegacyImages = images.map((img) => ({
		src: `/img/gallery/${img.image}`,
		base64: img.base64,
	}));

	return <Gallery images={formattedLegacyImages} />;
}
