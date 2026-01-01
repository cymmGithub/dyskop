import { put, list, del } from "@vercel/blob";

export interface GalleryImage {
	id: string;
	url: string;
	base64: string; // Will be empty string
	width?: number;
	height?: number;
}

export async function getGalleryData(): Promise<GalleryImage[]> {
	try {
		const { blobs } = await list();

		// Filter out non-image files (like the old json file) and map to GalleryImage
		const images = blobs
			.filter(blob => !blob.pathname.endsWith('.json'))
			.map(blob => ({
				id: blob.url,
				url: blob.url,
				base64: '', // No blur data available from simple list
			}));

		// Sort by pathname (filename) alphabetical
		images.sort((a, b) => a.url.localeCompare(b.url));

		return images;
	} catch (error) {
		console.warn("Failed to fetch gallery data (check BLOB_READ_WRITE_TOKEN):", error);
		return [];
	}
}

export async function addImage(file: File): Promise<GalleryImage> {
	// 1. Upload Image to Blob
	// Sanitize filename
	const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');

	const blob = await put(sanitizedFilename, file, {
		access: "public",
	});

	// 2. Return Image Object
	return {
		id: blob.url,
		url: blob.url,
		base64: '',
	};
}

export async function deleteImage(id: string) {
	// id is the url in our new simplified approach
	try {
		await del(id);
	} catch (error) {
		console.warn("Failed to delete blob:", error);
	}
}
