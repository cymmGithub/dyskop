/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.public.blob.vercel-storage.com",
			},
		],
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

export default nextConfig;
