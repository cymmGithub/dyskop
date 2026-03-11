import { getPayload } from "payload";
import config from "@payload-config";
import Gallery from "./gallery";

export default async function RealizationsPage() {
	let images: { src: string; base64: string; alt: string }[] = [];

	try {
		const payload = await getPayload({ config });
		const result = await payload.find({
			collection: "media",
			sort: "displayOrder",
			limit: 200,
		});

		images = result.docs.map((doc) => ({
			src: `${doc.url}?v=${new Date(doc.updatedAt).getTime()}`,
			base64: "",
			alt: doc.alt,
		}));
	} catch {
		// Payload/database unavailable — render empty gallery
	}

	return <Gallery images={images} />;
}
