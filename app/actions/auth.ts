"use server";

import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
	const password = formData.get("password");

	if (password === process.env.ADMIN_PASSWORD) {
		await createSession();
		redirect("/admin");
	}

	return { error: "Invalid password" };
}

export async function logout() {
	await deleteSession();
	redirect("/login");
}
