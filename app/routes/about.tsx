import { Navigation } from '~/components/Navigation';

export default function About() {
	return (
		<section className="p-5 text-xl space-y-5 text-neutral-400">
			<Navigation />
			<p>
				Hello there! I'm Macqy Garcia, a Senior Software Engineer with over 9
				years of experience in architecting web applications. Born and educated
				in the Philippines, where I earned my Bachelor of Science in Information
				Technology from Our Lady of Fatima University, I'm currently based at
				ING Hubs Philippines.
			</p>
			<p>
				My journey began with modernizing legacy applications at the Department
				of the Interior and Local Government, and evolved through developing
				scalable frontend architectures for ride-hailing platforms and
				implementing modular React components at Indra PH. My expertise spans
				React, TypeScript, Next.js, and microfrontend architecture using Module
				Federation. While my primary focus is on frontend development, I also
				have strong skills in backend technologies like Node.js, Express, and
				various database systems. Currently, I'm engineering enterprise banking
				applications and establishing design system components aligned with
				banking compliance requirements.
			</p>
			<div className="w-full h-72 block rounded-lg bg-neutral-800" />
			<div className="w-full h-72 block rounded-lg bg-neutral-800" />
			<p>
				Having worked across government institutions, ride-hailing platforms,
				and enterprise banking environments, I've developed a strong technical
				expertise in scalable frontend architectures. I've collaborated with
				teams of various sizes — from enterprise organizations like ING Hubs to
				government agencies like the Department of the Interior and Local
				Government — implementing solutions that range from modernizing legacy
				applications to architecting microfrontend systems that support global
				deployment in 15+ languages.
			</p>
		</section>
	);
}
