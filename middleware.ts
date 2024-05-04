import { NextResponse } from 'next/server';
import requestIp from 'request-ip'

const rateLimitMap = new Map();

// This function can be marked `async` if using `await` inside
export function middleware(req: any, res: any) {
	const ip = requestIp.getClientIp(req);
	const limit = 1; // Limiting requests to 5 per minute per IP
	const windowMs = 60 * 1000; // 1 minute

	if (!rateLimitMap.has(ip)) {
		rateLimitMap.set(ip, {
			count: 0,
			lastReset: Date.now(),
		});
	}

	const ipData = rateLimitMap.get(ip);

	if (Date.now() - ipData.lastReset > windowMs) {
		ipData.count = 0;
		ipData.lastReset = Date.now();
	}

	if (ipData.count >= limit) {
		return NextResponse.json({
			status: 429,
			message: 'Spróbuj ponownie za 1 minutę'
		})
	}

	ipData.count += 1;
}

export const config = {
  matcher: '/api/contact-form',
}