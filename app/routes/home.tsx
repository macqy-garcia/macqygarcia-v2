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
		<main className="space-y-5">
			<div className="px-5">
				<Navigation />
			</div>
			<Hero />
			<section className="px-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{Array.from({ length: 12 - 1 + 1 }, (_, i) => 1 + i).map(
					(item: number) => (
						<figure
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
