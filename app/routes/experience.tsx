import { Navigation } from '~/components/Navigation';

export default function Experience() {
	const list = [
		{
			yearDate: '2024 — Present',
			position: 'Senior Software Engineer',
			company: 'ING Hubs Philippines',
			companySite: 'https://careers.ing.com/en/philippines-hubs',
			summary:
				'Architected and implemented modular web components for enterprise banking applications using Lit, improving component reusability across multiple product teams. Built sophisticated mock service workers for frontend development, reducing dependency on backend services by 70%.',
			technologies: ['JavaScript', 'TypeScript', 'Lit', 'Web Components'],
		},
		{
			yearDate: '2023 — 2024',
			position: 'Senior Software Engineer',
			company: 'Indra PH',
			companySite: 'https://www.indracompany.com/en/pais/philippines',
			summary:
				'Engineered performance optimization initiatives including code splitting, lazy loading, and memoization, reducing homepage load time from 20 seconds to 7 seconds. Led migration from class components to functional components with hooks, resulting in 30% reduction in bundle size.',
			technologies: ['React', 'TypeScript', 'Redux', 'Storybook', 'Jest'],
		},
		{
			yearDate: '2022 — 2024',
			position: 'Software Engineer',
			company: 'We Move People and Things - JoyRide PH',
			companySite: 'https://joyride.com.ph/',
			summary:
				'Developed and maintained scalable frontend architecture using React, TypeScript, and Next.js for ride-hailing platform serving 100K+ daily users. Built reusable component library that increased development velocity by 35% across teams.',
			technologies: [
				'React',
				'React Native',
				'TypeScript',
				'Next JS',
				'Remix JS',
				'Angular',
			],
		},
		{
			yearDate: '2015 — 2022',
			position: 'Software Engineer',
			company: 'Department of the Interior and Local Government',
			companySite: 'https://www.dilg.gov.ph/',
			summary:
				'Modernized legacy applications using React, improving performance and user experience. Designed and implemented RESTful APIs using Node.js and Express, serving data to frontend components.',
			technologies: [
				'JavaScript',
				'React',
				'Node JS',
				'Express JS',
				'RESTful API',
			],
		},
	];
	return (
		<section className="space-y-12">
			<div className="px-5">
				<Navigation />
			</div>

			<div className="p-5 space-y-12 lg:grid lg:grid-cols-2 lg:gap-5">
				{list.map((item, index) => (
					<article key={index} className="space-y-2 text-xs text-neutral-400">
						{/* Year Date */}
						<header className="text-neutral-300">{item.yearDate}</header>

						{/* Position & Company */}
						<h3 className="text-neutral-200">
							<a href={item.companySite}>
								<span>{item.position}</span>
								<span> • </span>
								<span>{item.company}</span>
							</a>
						</h3>

						{/* Summary */}
						<p>{item.summary}</p>

						{/* Tech Stack */}
						<ul className="flex items-center gap-1.5 flex-wrap">
							{item.technologies.map((technology, index) => (
								<li
									key={index}
									className="p-0.5 px-2.5 rounded-2xl whitespace-nowrap dark:text-neutral-950 dark:bg-neutral-100"
								>
									<p className="text-xs">{technology}</p>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}
