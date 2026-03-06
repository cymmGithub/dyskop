import { getPayload } from "payload";
import config from "@payload-config";
import Gallery from "./gallery";

export default async function RealizationsPage() {
	const payload = await getPayload({ config });
	const result = await payload.find({
		collection: "media",
		sort: "displayOrder",
		limit: 200,
	});

	const images = result.docs.map((doc) => ({
		src: `${doc.url}?v=${new Date(doc.updatedAt).getTime()}`,
		base64: "",
		alt: doc.alt,
	}));

	return <Gallery images={images} />;
}
