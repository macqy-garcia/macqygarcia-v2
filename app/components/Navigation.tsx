import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export const Navigation = () => {
	const [active, setActive] = useState(false);

	// Prevent scrolling when menu is active
	useEffect(() => {
		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [active]);

	const navItems = [
		'Index',
		'About',
		'Experience',
		'Resume',
		'Projects',
		'Blog',
		'Courses',
	];
	const socialItems = ['Linkedin', 'Github', 'Codepen', 'Behance', 'Dribbble'];

	// Function to generate staggered animation styles
	const getItemStyle = (index: number) => {
		return {
			opacity: 0,
			transform: 'scale(0.95)',
			animation: active
				? `fadeIn 0.5s ease forwards ${0.15 + index * 0.05}s`
				: 'none',
		};
	};

	// Function to generate staggered animation for social items
	const getSocialItemStyle = (index: number) => {
		return {
			opacity: 0,
			transform: 'scale(0.95)',
			animation: active
				? `fadeIn 0.5s ease forwards ${0.45 + index * 0.05}s`
				: 'none',
		};
	};

	// Define animation keyframes using a styled component pattern or CSS module approach
	useEffect(() => {
		// Insert the keyframes style via regular DOM methods to avoid TSX type errors
		const style = document.createElement('style');
		style.textContent = `
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
		document.head.appendChild(style);

		// Clean up the style on component unmount
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<header className="pt-7 text-neutral-900 dark:text-white">
			<nav className="flex justify-between text-xs">
				<div>
					<div className="flex gap-1">
						<p>Hello, I'm</p>
						<p className="h-4 w-4 rounded-full bg-neutral-700 dark:bg-neutral-300"></p>
						<h1>Macqy Garcia</h1>
					</div>
					<p className="text-neutral-500 dark:text-neutral-400 max-w-3/4">
						A software engineer specializing in modern web technologies
					</p>
				</div>
				<button
					className="z-50 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
					onClick={() => setActive(!active)}
				>
					{active ? 'Close' : 'Menu'}
				</button>

				{/* Overlay to capture clicks and add backdrop effect */}
				<div
					className={`fixed inset-0 bg-white dark:bg-neutral-950 transition-opacity duration-300 z-40 ${
						active ? 'opacity-95' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setActive(false)}
				/>

				{/* Menu with animation */}
				<aside
					className={`px-5 w-3/4 md:w-1/2 lg:w-1/3 h-screen fixed top-0 left-0 overflow-y-hidden z-40 text-2xl font-light p-5 flex flex-col justify-between bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-all duration-300 ease-in-out ${
						active ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
				>
					<div className="flex flex-col text-xs gap-2" style={getItemStyle(0)}>
						<p className="text-neutral-500 dark:text-neutral-400">Email</p>
						<p>garciamacqy@gmail.com</p>
					</div>

					<ul className="space-y-2">
						{navItems.map((item, index) => (
							<li
								key={item}
								style={getItemStyle(index + 1)}
								className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer transition-colors"
							>
								<Link to={item === 'Index' ? '/' : `/${item.toLowerCase()}`}>
									{item}
								</Link>
							</li>
						))}
					</ul>

					<div className="space-y-2 text-xs">
						<p
							className="text-neutral-500 dark:text-neutral-400"
							style={getSocialItemStyle(0)}
						>
							Social
						</p>
						{socialItems.map((item, index) => (
							<p
								key={item}
								style={getSocialItemStyle(index + 1)}
								className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer transition-colors"
							>
								{item}
							</p>
						))}
					</div>
				</aside>
			</nav>
		</header>
	);
};
