import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

// Components
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Macqy Garcia' },
		{ name: 'description', content: 'Welcome to my portfolio' },
	];
}

export default function Home() {
	return (
		<main className="px-5 py-7 space-y-5">
			<Navigation />
			<Hero />
			<section className="space-y-5">
				{Array.from({ length: 10 - 1 + 1 }, (_, i) => 1 + i).map(
					(item: number) => (
						<div
							key={item}
							className="w-full h-72 block rounded-lg bg-neutral-800"
						/>
					),
				)}
			</section>
			<Footer />
		</main>
	);
}
