import { Navigation } from '~/components/Navigation';

export default function Courses() {
	const list = [
		{
			year: '2024',
			title: 'Advanced React Performance Optimization',
			subtitle: 'Techniques for Building Lightning-Fast Web Applications',
			url: '/courses/react-performance-optimization',
		},
		{
			year: '2023',
			title: 'Building Scalable APIs with Node.js and Express',
			subtitle: 'From Development to Production Deployment',
			url: '/courses/scalable-nodejs-apis',
		},
		{
			year: '2023',
			title: 'MongoDB Schema Design Patterns',
			subtitle: 'Optimizing Data Models for Real-World Applications',
			url: '/courses/mongodb-schema-design',
		},
		{
			year: '2022',
			title: 'Full-Stack Authentication Masterclass',
			subtitle: 'Implementing Secure User Management with JWT and OAuth',
			url: '/courses/fullstack-authentication',
		},
		{
			year: '2021',
			title: 'Building Responsive UI Components with React and Tailwind CSS',
			subtitle: 'Creating a Design System from Scratch',
			url: '/courses/react-tailwind-components',
		},
	];
	return (
		<section className="p-5 space-y-12">
			<Navigation />
			<div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-5">
				{list.map((item, index) => (
					<article key={index} className="space-y-2 text-xs text-neutral-400">
						{/* Title & Subtitle */}
						<h3 className="text-neutral-200">
							<a href={item.url}>
								<span>{item.title}</span>
							</a>
						</h3>

						{/* Summary */}
						<p className="text-neutral-400">{item.subtitle}</p>
					</article>
				))}
			</div>
		</section>
	);
}
