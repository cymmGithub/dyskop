const Footer = () => {
	return (
		<footer className="pt-4  md:pt-8 lg:pt-10 dark:bg-gray-800">
			<div className="mx-auto max-w-screen-xl text-center">
				<a
					href="#"
					className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
				>
				</a>
				<ul className="flex flex-wrap justify-center items-center  text-gray-900 dark:text-white">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Premium
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							Campaigns
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Blog
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Affiliate Program
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							FAQs
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Contact
						</a>
					</li>
				</ul>
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2024{' '} Made by{' '}
					<a href="https://github.com/cymmGithub" className="hover:underline">
						cymm
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
