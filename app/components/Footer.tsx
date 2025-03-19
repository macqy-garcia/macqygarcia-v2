export const Footer = () => {
	const socialItems = ['Linkedin', 'Github', 'Codepen', 'Behance', 'Dribbble'];
	return (
		<footer>
			<p className="text-xs text-neutral-400">
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

			<aside className="text-xs space-y-5 mt-5">
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
		</footer>
	);
};
