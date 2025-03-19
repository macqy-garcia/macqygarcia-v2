export const Hero = () => {
	return (
		<section className="px-5 flex flex-col gap-6 text-xs mt-16 text-neutral-400 md:flex-row md:justify-between">
			<div className="flex items-center gap-2">
				<p>Email</p>
				<h1 className="text-white">garciamacqy@gmail.com</h1>
			</div>
			<p className="md:max-w-xs">
				Welcome to my space on the internet, where I showcase my experience
				building high-performance web applications, modular component libraries,
				and scalable frontend architectures.
			</p>
		</section>
	);
};
