import { hasSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getGalleryData } from "@/lib/storage";
import AdminGallery from "@/components/admin/admin-gallery";

export default async function AdminPage() {
	const isAuthenticated = await hasSession();

	if (!isAuthenticated) {
		redirect("/login");
	}

	const images = await getGalleryData();

	return <AdminGallery initialImages={images} />;
}
