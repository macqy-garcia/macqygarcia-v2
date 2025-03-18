import { Navigation } from '~/components/Navigation';

export default function Resume() {
	return (
		<section className="p-5">
			<Navigation />
			<div className="h-screen w-screen grid place-items-center">
				<a
					href="/"
					className="p-1 px-4 rounded-2xl text-sm whitespace-nowrap dark:text-neutral-950 dark:bg-neutral-100"
				>
					View Full Résumé
				</a>
			</div>
		</section>
	);
}
