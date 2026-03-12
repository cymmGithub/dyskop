export default function GalleryLoading() {
	return (
		<section className="h-full flex flex-col">
			{/* Desktop: Bento grid skeleton */}
			<div className="hidden md:block flex-1 min-h-0 px-4 md:px-8 py-4 mt-32">
				<div
					className="h-full gap-2"
					style={{
						display: "grid",
						gridTemplateAreas: `"a a b c" "a a d e" "f g h h"`,
						gridTemplateColumns: "2fr 1fr 1fr 2fr",
						gridTemplateRows: "1fr 1fr 1fr",
					}}
				>
					{["a", "b", "c", "d", "e", "f", "g", "h"].map((area) => (
						<div
							key={area}
							className="rounded-lg bg-gray-200 animate-pulse"
							style={{ gridArea: area }}
						/>
					))}
				</div>
			</div>

			{/* Mobile: 2-col grid skeleton */}
			<div className="md:hidden flex-1 px-2 py-4 mt-24 grid grid-cols-2 gap-1.5 auto-rows-[160px] content-start">
				{Array.from({ length: 8 }).map((_, i) => (
					<div
						key={i}
						className="rounded-lg bg-gray-200 animate-pulse"
					/>
				))}
			</div>
		</section>
	);
}
