import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.public.blob.vercel-storage.com",
			},
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 2592000,
	},
	async redirects() {
		return [
			{
				source: "/zakres-uslug",
				destination: "/uslugi-minikoparka-lubelskie",
				permanent: true,
			},
		];
	},
};

export default withPayload(nextConfig);
