import type { BlogType, LinkType, NavLinkType, ProjectType } from "@/types";
import { STRINGS } from "./strings";

export const NAV_LINKS: NavLinkType[] = [
	{ text: "Projects", href: "#projects" },
	{ text: "Blogs", href: "#blogs" },
	{ text: "Newsletter", href: "#newsletter" },
	//   {
	//     text: STRINGS.LINKS,
	//     href: "https://bio.link/aanant",
	//     openInNewTab: true,
	//   },
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
		projectTitle: "My People",
		links: [
			{
				text: "Play Store",
				href: "https://play.google.com/store/apps/details?id=com.infiniteants.mypeople",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/dubeyanant/my_people",
				openInNewTab: true,
			},
		],
		description:
			"My People is a human diary app designed to help you remember and organize important details about the people in your life. My People lets you store notes, preferences, and key information for each person—ensuring you never forget what matters. Integrated with several AI features, it helps you be better version of yourself.",
		technologies: ["Flutter", "Gen AI"],
	},
	{
		projectTitle: "Quizly",
		links: [
			{
				text: "Live",
				href: "https://quizlyfun.vercel.app/",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/dubeyanant/quizly",
				openInNewTab: true,
			},
		],
		description:
			"Quizly is a fun and interactive quiz app that allows users to play quiz game with friends. With a user-friendly interface and real-time updates, Quizly makes learning enjoyable and engaging. The app is built using Next.js and Supabase, ensuring a seamless experience.",
		technologies: ["NextJS", "Typescript", "GO", "WebSockets"],
	},
	{
		projectTitle: "Link List",
		links: [
			{
				text: "Live",
				href: "https://linklist.anant.ink/",
				openInNewTab: true,
			},
			{
				text: "GitHub",
				href: "https://github.com/dubeyanant/link-list",
				openInNewTab: true,
			},
		],
		description:
			"This is a Next.js web app using Supabase for real-time updates. Users can create a list, share it with others, and allow them to add their names. The list updates instantly and is automatically deleted after 7 days.",
		technologies: ["NextJS", "Typescript", "Supabase"],
	},
];

export const BLOGS: BlogType[] = [
	{
		blogTitle:
			"A practical guide to merging in Git, and what to do when thing go wrong",
		href: "https://tech.anantdubey.com/git-merge",
		date: "Apr 2025",
		topic: "Git",
		readTime: 6,
	},
	{
		blogTitle: "Why I Use Supabase for MVPs (and beyond)",
		href: "https://tech.anantdubey.com/why-i-use-supabase",
		date: "Mar 2025",
		topic: "Supabase • NextJS",
		readTime: 5,
	},
	{
		blogTitle: "Creating pinned shortcuts in Flutter!",
		href: "https://tech.anantdubey.com/pinned-shortcuts-in-flutter",
		date: "Mar 2024",
		topic: "Flutter • Android",
		readTime: 5,
	},
	{
		blogTitle: "Native Bridge between Flutter and Android",
		href: "https://tech.anantdubey.com/native-bridge",
		date: "Mar 2024",
		topic: "Flutter • Android",
		readTime: 4,
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
	{
		text: "Play Store",
		href: "https://play.google.com/store/apps/dev?id=5300715465790168807",
		openInNewTab: true,
	},
];
