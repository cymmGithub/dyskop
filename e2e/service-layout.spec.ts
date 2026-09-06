import { test, expect } from '@playwright/test';

const services = [
	'uslugi-minikoparka',
	'uslugi-minitraktorem',
	'konstrukcje-sadownicze',
	'glebogryzarka-separacyjna',
	'koszenie-dzialek',
	'orka-dzialek',
];

for (const width of [375, 768, 1280, 1536]) {
	test(`service titles and labels stay aligned at ${width}px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 900 });
		let reference: { x: number; y: number }[] | undefined;
		for (const service of services) {
			await page.goto(`/${service}-lubelskie`);
			const heading = page.getByRole('heading', { level: 1 });
			await expect(heading).toBeVisible();
			await page.evaluate(() => document.fonts.ready);
			const readPositions = () => heading.locator(':scope > span').evaluateAll(elements =>
				elements.map(element => {
					const { x, y } = element.getBoundingClientRect();
					return { x, y };
				})
			);
			await expect.poll(async () => {
				const positions = await readPositions();
				if (positions.length !== 2 || positions.some(position => position.x <= 0)) return false;
				if (!reference) reference = positions;
				return true;
			}).toBe(true);
			await expect.poll(readPositions, { message: `${service}: title and label alignment` }).toEqual(reference);
			await expect(page.locator('#main-content')).toHaveCSS('overflow-y', width >= 1280 ? 'hidden' : 'auto');
		}
	});
}
