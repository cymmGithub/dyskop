import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function middleware(req: NextRequest) {
	const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
	const limit = 1;
	const windowMs = 60 * 1000; // 1 minute

	if (!rateLimitMap.has(ip)) {
		rateLimitMap.set(ip, {
			count: 0,
			lastReset: Date.now(),
		});
	}

	const ipData = rateLimitMap.get(ip)!;

	if (Date.now() - ipData.lastReset > windowMs) {
		ipData.count = 0;
		ipData.lastReset = Date.now();
	}

	if (ipData.count >= limit) {
		return NextResponse.json(
			{ message: 'Spróbuj ponownie za 1 minutę' },
			{ status: 429 }
		);
	}

	ipData.count += 1;

	return NextResponse.next();
}

export const config = {
	matcher: '/api/contact-form',
};
