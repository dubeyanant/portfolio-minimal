import type { BlogType, LinkType, NavLinkType, ProjectType } from "@/types";
import { STRINGS } from "./strings";

export const NAV_LINKS: NavLinkType[] = [
	{ text: "Projects", href: "#projects" },
	{ text: "Blogs", href: "#blogs" },
	{ text: "Newsletter", href: "#newsletter" },
	{
		text: "Reading List",
		href: "https://readinglist.adarshdubey.com/",
		openInNewTab: true,
	},
	{
		text: "Links",
		href: "https://bento.me/adarsh",
		openInNewTab: true,
	},
];

export const PROJECTS: ProjectType[] = [
	{
		projectTitle: "Good Domain",
		links: [
			{
				text: "Live",
				href: "https://gooddoma.in/",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/inclinedadarsh/gooddomain",
				openInNewTab: true,
			},
		],
		description:
			"My recent experience was working as a frontend/design engineer at Rocketium. Building components and layouts for AI flows within the product. Including the internal design system. Also, worked with GitHub as an frontend engineering intern. Worked on internal tools and landing pages with APAC and Latin region DevRel team.",
		technologies: [
			"NextJS",
			"TailwindCSS",
			"TypeScript",
			"Vercel",
			"Gen AI",
		],
	},
	{
		projectTitle: "Inclinet",
		links: [
			{
				text: "Live",
				href: "https://gooddoma.in/",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/inclinedadarsh/gooddomain",
				openInNewTab: true,
			},
		],
		description:
			"My recent experience was working as a frontend/design engineer at Rocketium. Building components and layouts for AI flows within the product. Including the internal design system. Also, worked with GitHub as an frontend engineering intern. Worked on internal tools and landing pages with APAC and Latin region DevRel team.",
		technologies: [
			"NextJS",
			"TailwindCSS",
			"TypeScript",
			"Vercel",
			"Gen AI",
		],
	},
	{
		projectTitle: "Timeloom",
		links: [
			{
				text: "Live",
				href: "https://gooddoma.in/",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/inclinedadarsh/gooddomain",
				openInNewTab: true,
			},
		],
		description:
			"My recent experience was working as a frontend/design engineer at Rocketium. Building components and layouts for AI flows within the product. Including the internal design system. Also, worked with GitHub as an frontend engineering intern. Worked on internal tools and landing pages with APAC and Latin region DevRel team.",
		technologies: [
			"NextJS",
			"TailwindCSS",
			"TypeScript",
			"Vercel",
			"Gen AI",
		],
	},
];

export const BLOGS: BlogType[] = [
	{
		blogTitle: "Place where I just gather stuff from the internet",
		href: "#",
		date: "Nov 2024",
		topic: "Machine Learning",
		readTime: 5,
	},
	{
		blogTitle: "Place where I just gather stuff from the internet 1",
		href: "#",
		date: "Nov 2024",
		topic: "Machine Learning",
		readTime: 5,
	},
	{
		blogTitle: "Place where I just gather stuff from the internet 2",
		href: "#",
		date: "Nov 2024",
		topic: "Machine Learning",
		readTime: 5,
	},
];

export const FOOTER_LINKS: LinkType[] = [
	{
		text: STRINGS.LINK_GITHUB,
		href: STRINGS.URL_GITHUB_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_X,
		href: STRINGS.URL_X_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_LINKEDIN,
		href: STRINGS.URL_LINKEDIN_PROFILE,
		openInNewTab: true,
	},
	{
		text: "Reading List",
		href: "https://readinglist.adarshdubey.com/",
		openInNewTab: true,
	},
	{
		text: "Talks",
		href: "#",
	},
	{
		text: "Corner",
		href: "#",
	},
];
