export const Footer = () => {
	const socialItems = ['Linkedin', 'Github', 'Codepen', 'Behance', 'Dribbble'];
	return (
		<footer className="md:grid md:grid-cols-3">
			<div className="p-5 bg-gradient-to-b from-neutral-900 to bg-neutral-950 md:bg-transparent">
				<p className="text-2xl text-neutral-400">
					If you'd like to get in touch feel free to reach out. I'm still
					actively responding to emails and would be happy to connect!
				</p>
			</div>

			<aside className="px-5 text-xs space-y-10 bg-neutral-950 md:bg-transparent xl:grid xl:grid-cols-2">
				<div className="space-y-2">
					<p className="text-neutral-400">Email</p>
					<h1>garciamacqy@gmail.com</h1>
				</div>
				<div className="space-y-2">
					<p className="text-neutral-500 dark:text-neutral-400">Social</p>
					{socialItems.map((item) => (
						<p
							key={item}
							className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer transition-colors"
						>
							{item}
						</p>
					))}
				</div>
				<div className="space-y-2">
					<h1>Privacy Notice</h1>
					<p className="text-neutral-400">&copy; 2025 Macqy Garcia</p>
				</div>
			</aside>

			<p className="p-5 text-xs bg-neutral-950 text-neutral-400 md:bg-transparent">
				Loosely designed in{' '}
				<span className="text-black dark:text-neutral-200">Figma</span> and
				coded in{' '}
				<span className="text-black dark:text-neutral-200">
					Visual Studio Code
				</span>{' '}
				by yours truly. Built with{' '}
				<span className="text-black dark:text-neutral-200">React Vite</span> and{' '}
				<span className="text-black dark:text-neutral-200">Tailwind CSS</span>,
				deployed with{' '}
				<span className="text-black dark:text-neutral-200">Vercel</span>. All
				text is set in the <span>Inter typeface</span>.
			</p>
		</footer>
	);
};
