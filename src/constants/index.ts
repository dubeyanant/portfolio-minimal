import type { BlogType, LinkType, NavLinkType, ProjectType } from "@/types";
import { STRINGS } from "./strings";

export const NAV_LINKS: NavLinkType[] = [
	//   { text: "Projects", href: "#projects" },
	//   { text: "Blogs", href: "#blogs" },
	//   { text: "Newsletter", href: "#newsletter" },
	//   {
	//     text: "Reading List",
	//     href: "https://readinglist.adarshdubey.com/",
	//     openInNewTab: true,
	//   },
	{
		text: "Links",
		href: "https://bio.link/aanant",
		openInNewTab: true,
	},
];

export const HEADER_LINKS: LinkType[] = [
	{
		text: STRINGS.LINK_GITHUB,
		href: STRINGS.URL_GITHUB_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_LINKEDIN,
		href: STRINGS.URL_LINKEDIN_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_X,
		href: STRINGS.URL_X_PROFILE,
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
		blogTitle: "Creating pinned shortcuts in Flutter!",
		href: "https://tech.anantdubey.com/pinned-shortcuts-in-flutter",
		date: "Mar 2024",
		topic: "Flutter • Android",
		readTime: 5,
	},
	{
		blogTitle:
			"On going beyond infinity, imperfections & collective responsibilities",
		href: "https://anantdubey.substack.com/p/inb1",
		date: "Jul 2024",
		topic: "Philosophy • Literature • Economics",
		readTime: 3,
	},
	{
		blogTitle: "The Divinity and Her Servants",
		href: "https://medium.com/@dubeyanant/the-divinity-and-her-servants-8c33e80bdf69",
		date: "Jun 2023",
		topic: "Romance • Fiction",
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
		text: STRINGS.LINK_LINKEDIN,
		href: STRINGS.URL_LINKEDIN_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_X,
		href: STRINGS.URL_X_PROFILE,
		openInNewTab: true,
	},
	//   {
	//     text: "Reading List",
	//     href: "https://readinglist.adarshdubey.com/",
	//     openInNewTab: true,
	//   },
	//   {
	//     text: "Talks",
	//     href: "#",
	//   },
	//   {
	//     text: "Corner",
	//     href: "#",
	//   },
];
