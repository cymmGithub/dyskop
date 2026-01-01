"use client";

import { useState, useTransition } from "react";
import { uploadImageAction, deleteImageAction } from "@/app/actions/gallery";
import Image from "next/image";
import { GalleryImage } from "@/lib/storage";
import { logout } from "@/app/actions/auth";
import { toast } from "react-toastify";

export default function AdminGallery({
	initialImages,
}: {
	initialImages: GalleryImage[];
}) {
	const [isPending, startTransition] = useTransition();
	const [imageToDelete, setImageToDelete] = useState<GalleryImage | null>(null);
	const [selectedFileName, setSelectedFileName] = useState<string>("");

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

			<div className='bg-white p-4 md:p-6 rounded-lg shadow-md mb-8 flex-shrink-0'>
				<h2 className='text-xl font-semibold mb-4'>Dodaj nowe zdjęcie</h2>
				<form
					action={async (formData) => {
						startTransition(async () => {
							await uploadImageAction(formData);
							setSelectedFileName("");
						});
					}}
					className='flex flex-col gap-4'
				>
					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center'>
						<input
							type='file'
							name='file'
							id='file-upload'
							accept='image/jpeg, image/png, image/webp'
							required
							className='hidden'
							onChange={(e) => {
								const file = e.target.files?.[0];
								if (file) {
								const maxSize = 4.5 * 1024 * 1024; // 4.5 MB in bytes
								if (file.size > maxSize) {
									toast.error(
										`Plik jest za duży (${(file.size / (1024 * 1024)).toFixed(2)} MB). Maksymalny rozmiar to 4.5 MB.`,
										{
											position: "top-center",
											autoClose: 5000,
											hideProgressBar: false,
											closeOnClick: true,
											pauseOnHover: true,
											draggable: true,
										}
									);
									e.target.value = ""; // Reset the input
									setSelectedFileName("");
									return;
								}
								setSelectedFileName(file.name);
							} else {
								setSelectedFileName("");
							}
							}}
						/>
						<div className='flex items-center gap-3 flex-1'>
							<label
								htmlFor='file-upload'
								className='cursor-pointer bg-blue-50 text-blue-700 px-4 py-2 rounded-full border-0 text-sm font-semibold hover:bg-blue-100 transition-colors whitespace-nowrap'
							>
								Wybierz plik
							</label>
							<span className='text-sm text-gray-600 flex-1 truncate'>
								{selectedFileName || "Nie wybrano pliku"}
							</span>
						</div>
						<button
							type='submit'
							disabled={isPending || !selectedFileName}
							className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap'
						>
							{isPending ? (
								<>
									<svg className='animate-spin h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
										<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
										<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
									</svg>
								</>
							) : (
								"Wyślij"
							)}
						</button>
					</div>
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
								alt='Zdjęcie w galerii'
								className='object-cover md:group-hover:opacity-75 md:group-hover:scale-110 transition-all duration-300 ease-in-out'
								fill={true}
								sizes='(max-width: 768px) 28vw, (min-width: 1380px) 180px, (min-width: 1120px) calc(20vw - 24px), (min-width: 860px) calc(25vw - 32px), calc(33vw - 50px)'
								placeholder={img.base64 ? "blur" : "empty"}
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
				<div className='fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4'>
					<div className='bg-white rounded-lg p-6 max-w-md w-full shadow-xl'>
						<h3 className='text-xl font-bold mb-4'>
							Czy na pewno chcesz usunąć to zdjęcie?
						</h3>
						<div className='mb-4 text-sm text-gray-500'>
							Nazwa pliku:{" "}
							<span className='font-medium text-gray-900 break-all'>
								{decodeURIComponent(imageToDelete.url.split("/").pop() || "")}
							</span>
						</div>

						<div className='relative aspect-video w-full mb-6 bg-gray-100 rounded-lg overflow-hidden'>
							<Image
								src={imageToDelete.url}
								alt='Zdjęcie do usunięcia'
								fill
								className='object-contain'
							/>
						</div>

						<div className='flex justify-end gap-3'>
							<button
								onClick={() => setImageToDelete(null)}
								className='px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors'
								disabled={isPending}
							>
								Anuluj
							</button>
							<button
								onClick={handleDelete}
								className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors'
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
