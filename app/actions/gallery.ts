"use server";

import { addImage, deleteImage } from "@/lib/storage";
import { revalidatePath } from "next/cache";

export async function uploadImageAction(formData: FormData) {
	const file = formData.get("file") as File;
	if (!file) {
		throw new Error("No file provided");
	}

	await addImage(file);
	revalidatePath("/realizacje");
	revalidatePath("/admin");
}

export async function deleteImageAction(id: string) {
	await deleteImage(id);
	revalidatePath("/realizacje");
	revalidatePath("/admin");
}
