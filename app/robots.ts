import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://dys-kop.pl';

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin/', '/login/', '/api/', '/actions/'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
