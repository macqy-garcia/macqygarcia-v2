import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('about', 'routes/about.tsx'),
	route('experience', 'routes/experience.tsx'),
	route('resume', 'routes/resume.tsx'),
	route('projects', 'routes/projects.tsx'),
	route('blog', 'routes/blog.tsx'),
	route('courses', 'routes/courses.tsx'),
] satisfies RouteConfig;
