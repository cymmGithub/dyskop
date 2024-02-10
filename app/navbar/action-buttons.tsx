import { AlignJustify } from 'lucide-react';
import { FaPhone } from 'react-icons/fa6';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
const ActionButtons = () => {
	return (
		<div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<AlignJustify />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetDescription>
								<div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
									<Link href="/usługi">O Nas</Link>
									<Link href="/usługi">Zakres Usług</Link>
									<Link href="/galeria">Galeria</Link>
									<Link href="/kotakt">Kontakt</Link>
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
			<div>
				<div className="hidden md:flex md:space-x-4 justify-between items-center">
					<FaPhone />
					<span>+48 111 222 333</span>
				</div>
			</div>
		</div>
	);
};

export default ActionButtons;
