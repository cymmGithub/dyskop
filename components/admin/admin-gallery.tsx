"use client";

import { useState, useTransition } from "react";
import { uploadImageAction, deleteImageAction } from "@/app/actions/gallery";
import Image from "next/image";
import { GalleryImage } from "@/lib/storage";
import { logout } from "@/app/actions/auth";

export default function AdminGallery({
	initialImages,
}: {
	initialImages: GalleryImage[];
}) {
	const [isPending, startTransition] = useTransition();
	const [imageToDelete, setImageToDelete] = useState<GalleryImage | null>(null);

	const handleDelete = () => {
		if (!imageToDelete) return;
		startTransition(async () => {
			await deleteImageAction(imageToDelete.id);
			setImageToDelete(null);
		});
	};

	return (
		<div className='container mx-auto px-4 py-8 h-100 min-h-[600px] flex flex-col'>
			<div className='flex justify-between items-center mb-8 flex-shrink-0'>
				<h1 className='text-3xl font-bold'>Zarządzanie Galerią</h1>
				<form action={logout}>
					<button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors'>
						Wyloguj
					</button>
				</form>
			</div>

			<div className='bg-white p-6 rounded-lg shadow-md mb-8 flex-shrink-0'>
				<h2 className='text-xl font-semibold mb-4'>Dodaj nowe zdjęcie</h2>
				<form
					action={async (formData) => {
						startTransition(async () => {
							await uploadImageAction(formData);
						});
					}}
					className='flex gap-4 items-center'
				>
					<input
						type='file'
						name='file'
						accept='image/*'
						required
						className='block w-full text-sm text-gray-500
						file:mr-4 file:py-2 file:px-4
						file:rounded-full file:border-0
						file:text-sm file:font-semibold
						file:bg-blue-50 file:text-blue-700
						hover:file:bg-blue-100'
					/>
					<button
						type='submit'
						disabled={isPending}
						className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors'
					>
						{isPending ? "Aktualizuję..." : "Wyślij"}
					</button>
				</form>
			</div>

			<div className='flex-1 overflow-y-auto min-h-0 bg-gray-50 rounded-lg p-4 border border-gray-200'>
				<div className='relative grid gap-1 grid-cols-3 sm:grid-cols-gallery-sm md:gap-2 max-w-5xl mx-auto'>
					{initialImages.map((img) => (
						<div
							key={img.id}
							className='aspect-square bg-gray-200 rounded-md shadow-sm relative overflow-hidden group md:shadow-md md:rounded-lg'
						>
							<Image
								src={img.url}
								alt="Zdjęcie w galerii"
								className='object-cover md:group-hover:opacity-75 md:group-hover:scale-110 transition-all duration-300 ease-in-out'
								fill={true}
								sizes='(max-width: 768px) 28vw, (min-width: 1380px) 180px, (min-width: 1120px) calc(20vw - 24px), (min-width: 860px) calc(25vw - 32px), calc(33vw - 50px)'
								placeholder={img.base64 ? 'blur' : 'empty'}
								blurDataURL={img.base64 || undefined}
							/>
							<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10'>
								<button
									onClick={() => setImageToDelete(img)}
									className='bg-red-500 text-white px-3 py-1.5 text-sm rounded hover:bg-red-600 transition-colors shadow-lg'
									disabled={isPending}
								>
									Usuń
								</button>
							</div>
						</div>
					))}
					{initialImages.length === 0 && (
						<div className='col-span-full text-center text-gray-500 py-12'>
							Brak przesłanych zdjęć.
						</div>
					)}
				</div>
			</div>

			{imageToDelete && (
				<div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
					<div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
						<h3 className="text-xl font-bold mb-4">Czy na pewno chcesz usunąć to zdjęcie?</h3>
						<div className="mb-4 text-sm text-gray-500">
							Nazwa pliku: <span className="font-medium text-gray-900 break-all">{decodeURIComponent(imageToDelete.url.split('/').pop() || '')}</span>
						</div>

						<div className="relative aspect-video w-full mb-6 bg-gray-100 rounded-lg overflow-hidden">
							<Image
								src={imageToDelete.url}
								alt="Zdjęcie do usunięcia"
								fill
								className="object-contain"
							/>
						</div>

						<div className="flex justify-end gap-3">
							<button
								onClick={() => setImageToDelete(null)}
								className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
								disabled={isPending}
							>
								Anuluj
							</button>
							<button
								onClick={handleDelete}
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
								disabled={isPending}
							>
								{isPending ? "Usuwanie..." : "Usuń"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
