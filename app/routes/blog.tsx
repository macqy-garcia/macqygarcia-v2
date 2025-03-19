import { Navigation } from '~/components/Navigation';

export default function Blog() {
	const list = [
		{
			year: '2024',
			title: 'The Evolution of State Management in React Applications',
			subtitle: 'From Redux to React Query and Beyond',
			url: '/writings/react-state-management-evolution',
		},
		{
			year: '2023',
			title: 'Building Accessible e-Commerce Experiences',
			subtitle: 'Practical Strategies for MERN Stack Developers',
			url: '/writings/accessible-ecommerce-mern',
		},
		{
			year: '2022',
			title: 'Implementing Microservices Architecture with Node.js',
			subtitle: 'A Real-World Case Study',
			url: '/writings/node-microservices-architecture',
		},
		{
			year: '2021',
			title: 'Performance Optimization Techniques for MongoDB at Scale',
			subtitle: 'Lessons from Processing 10M+ Daily Transactions',
			url: '/writings/mongodb-performance-optimization',
		},
	];
	return (
		<section className="p-5 space-y-12">
			<Navigation />
			<div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-5">
				{list.map((item, index) => (
					<article key={index} className="space-y-2 text-xs text-neutral-400">
						{/* Year Date */}
						<header className="text-neutral-400">{item.year}</header>

						{/* Position & Company */}
						<h3 className="text-neutral-200">
							<a href={item.url}>
								<span>{item.title}</span>
							</a>
						</h3>

						{/* Summary */}
						<p className="text-neutral-300">{item.subtitle}</p>
					</article>
				))}
			</div>
		</section>
	);
}
