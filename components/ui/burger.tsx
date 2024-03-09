import { AlignJustify } from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const Burger = () => {
	return (
		<div className='lg:hidden'>
			<Sheet>
				<SheetTrigger>
					<AlignJustify className='ml-11 mr-2' />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetDescription>
							<div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
								<SheetClose asChild>
									<Link href='/o-nas'>O Nas</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link href='/zakres-uslug'>Zakres Usług</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link href='/realizacje'>Realizacje</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link href='/kontakt'>Kontakt</Link>
								</SheetClose>
							</div>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Burger;
