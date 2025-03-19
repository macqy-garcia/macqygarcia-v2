import { Navigation } from '~/components/Navigation';

export default function Projects() {
	const list = [
		{
			title: 'Streamline ERP Suite',
			subtitle: 'Enterprise Resource Planning (ERP) System',
			url: '/',
			summary:
				'Developed a comprehensive cloud-based ERP solution for small to medium-sized businesses. The system includes modules for inventory management, customer relationship management, human resources, and financial reporting. Implemented role-based access control and real-time analytics dashboards. Reduced operational costs by 30% for client businesses and improved data accuracy by 45%.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Redux',
				'JWT Authentication',
				'Socket.IO',
				'Chart.js',
				'AWS S3',
				'GitHub Actions',
			],
		},
		{
			title: 'MediConnect',
			subtitle: 'Telemedicine Platform',
			url: '/',
			summary:
				'Built a HIPAA-compliant telemedicine platform enabling secure video consultations between doctors and patients. Features include appointment scheduling, electronic health records integration, prescription management, and secure payment processing. The platform handled over 10,000 monthly consultations and reduced patient wait times by 65%.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'WebRTC',
				'Redis',
				'Stripe',
				'AWS',
				'Cypress',
				'OAuth 2.0',
				'Docker',
				'Kubernetes',
			],
		},
		{
			title: 'CollabSync',
			subtitle: 'Real-time Collaboration Tool',
			url: '/',
			summary:
				'Architected a collaborative workspace application similar to Notion with real-time editing capabilities. Implemented document version history, customizable workspaces, and third-party integration support. The platform achieved 99.9% uptime and supported concurrent editing for up to 50 users per document with minimal latency.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Socket.IO',
				'Draft.js',
				'Redis',
				'JWT',
				'Elasticsearch',
				'Jest',
				'Docker',
			],
		},
		{
			title: 'VendorHub',
			subtitle: 'E-commerce Marketplace Platform',
			url: '/',
			summary:
				'Designed and implemented a scalable multi-vendor marketplace platform handling 100,000+ products and 5,000+ daily transactions. Features include inventory management, vendor onboarding, recommendation engine based on user behavior, and comprehensive analytics dashboard. Implemented microservices architecture for improved scalability.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Redis',
				'Elasticsearch',
				'AWS Lambda',
				'Stripe Connect',
				'GraphQL',
				'Material UI',
				'Jenkins',
				'Prometheus',
				'Grafana',
			],
		},
		{
			title: 'TaskFlow',
			subtitle: 'Task Management System',
			url: '/',
			summary:
				'Developed a task management application with features including task creation, assignment, due dates, and status tracking. Implemented drag-and-drop functionality for organizing tasks and email notifications for updates. The system improved team productivity by 25% and reduced missed deadlines by 30%.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Redux',
				'Material UI',
				'Nodemailer',
				'JWT',
				'React Beautiful DnD',
				'Jest',
			],
		},
		{
			title: 'CulinaryConnect',
			subtitle: 'Recipe Sharing Platform',
			url: '/',
			summary:
				'Built a social platform for sharing and discovering recipes. Features include user profiles, recipe uploads with images, categorization, search functionality, and a rating system. The platform grew to 5,000 active users and 15,000 recipes within six months of launch.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Cloudinary',
				'Axios',
				'React Router',
				'Bootstrap',
				'Passport.js',
				'Mongoose',
			],
		},
		{
			title: 'ExpenseEase',
			subtitle: 'Budget Tracker',
			url: '/',
			summary:
				'Created a personal finance application for tracking income, expenses, and savings goals. Implemented data visualization for spending patterns and category-based analytics. Users reported an average 20% increase in savings after three months of consistent use.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Chart.js',
				'Redux',
				'Moment.js',
				'React Hook Form',
				'bcrypt',
				'CSS Grid',
			],
		},
		{
			title: 'PropertyPulse',
			subtitle: 'Real Estate Listing Portal',
			url: '/',
			summary:
				'Developed a property listing website with search, filter, and map-based property viewing capabilities. Features include property submission forms, image galleries, and direct messaging between buyers and sellers. The platform facilitated 100+ property transactions within its first year.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Leaflet.js',
				'Formik',
				'Multer',
				'Google Maps API',
				'Socket.IO',
				'Sass',
			],
		},
		{
			title: 'CareerCatalyst',
			subtitle: 'Job Board Application',
			url: '/',
			summary:
				'Built a job posting and application platform connecting employers with job seekers. Implemented resume uploads, application tracking, and email notifications. The platform reduced hiring time by 40% for participating companies.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'AWS S3',
				'Nodemailer',
				'Redux Toolkit',
				'JWT',
				'React Query',
				'Express Validator',
			],
		},
		{
			title: 'LearnLink',
			subtitle: 'E-learning Platform',
			url: '/',
			summary:
				'Created an educational platform for course creation, student enrollment, and progress tracking. Features include video lectures, quizzes, discussion forums, and completion certificates. The platform served 3,000+ students with a course completion rate 15% higher than industry average.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'AWS S3',
				'PDFKit',
				'React Player',
				'Redux',
				'Stripe',
				'Express Rate Limit',
			],
		},
		{
			title: 'WeatherWise',
			subtitle: 'Weather Dashboard',
			url: '/',
			summary:
				'Developed a weather information application providing current conditions, forecasts, and historical data for locations worldwide. Implemented location-based suggestions and weather alerts. Users praised the intuitive interface and accurate predictions.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'OpenWeatherMap API',
				'Axios',
				'Recharts',
				'Geolocation API',
				'Progressive Web App',
				'LocalStorage',
			],
		},
		{
			title: 'FitTrack',
			subtitle: 'Fitness Tracking Application',
			url: '/',
			summary:
				'Built a workout tracking and fitness progress application. Features include custom workout creation, exercise libraries, progress charts, and social sharing. Users reported 35% better adherence to fitness routines when using the app.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'D3.js',
				'JWT',
				'Cloudinary',
				'React Context API',
				'Mongoose',
				'CSS Flexbox',
			],
		},
		{
			title: 'EventEase',
			subtitle: 'Event Management System',
			url: '/',
			summary:
				'Created a platform for planning, promoting, and managing events. Implemented features such as ticket sales, attendee management, and event analytics. The platform successfully managed 50+ events ranging from small workshops to conferences with 500+ attendees.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'QR Code Generator',
				'Stripe',
				'Nodemailer',
				'React Calendar',
				'Moment.js',
				'Redux',
			],
		},
		{
			title: 'BlogBridge',
			subtitle: 'Blog Platform',
			url: '/',
			summary:
				'Developed a content management system for bloggers with markdown support, image uploads, and comment functionality. Implemented SEO optimization features and social media sharing. The platform achieved 40% higher engagement rates compared to traditional blogging platforms.',
			imgUrl: '/',
			technologies: [
				'MongoDB',
				'Express.js',
				'React.js',
				'Node.js',
				'Marked.js',
				'Multer',
				'Cloudinary',
				'React Router',
				'Redux',
				'Helmet.js',
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
						{/* Title & Subtitle */}
						<h3 className="text-neutral-200">
							<a href={item.url}>
								<span>{item.title}</span>
								<span> • </span>
								<span>{item.subtitle}</span>
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
