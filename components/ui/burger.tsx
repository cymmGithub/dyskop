import { AlignJustify } from 'lucide-react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const Burger = () => {
	return (
		<div className="lg:hidden">
			<Sheet>
				<SheetTrigger>
					<AlignJustify className='ml-8 mr-2' />
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
	);
};

export default Burger;
