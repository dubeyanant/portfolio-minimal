import type { BlogType, LinkType, NavLinkType, ProjectType } from "@/types";
import { STRINGS } from "./strings";

export const nav_links: NavLinkType[] = [
	{ text: STRINGS.NAV_LINK_PROJECTS, href: STRINGS.URL_PROJECTS },
	{ text: STRINGS.NAV_LINK_BLOGS, href: STRINGS.URL_BLOGS },
	{ text: STRINGS.NAV_LINK_NEWSLETTER, href: STRINGS.URL_NEWSLETTER },
	{
		text: STRINGS.NAV_LINK_READING_LIST,
		href: STRINGS.URL_READING_LIST,
		openInNewTab: true,
	},
	{
		text: STRINGS.NAV_LINK_LINKS,
		href: STRINGS.URL_BENTO,
		openInNewTab: true,
	},
];

// Common technologies array for reuse
const COMMON_TECHNOLOGIES = [
	STRINGS.TECH_NEXTJS,
	STRINGS.TECH_TAILWIND,
	STRINGS.TECH_TYPESCRIPT,
	STRINGS.TECH_VERCEL,
	STRINGS.TECH_GEN_AI,
];

export const PROJECTS: ProjectType[] = [
	{
		projectTitle: STRINGS.PROJECT_TITLE_GOOD_DOMAIN,
		links: [
			{
				text: STRINGS.LINK_LIVE,
				href: STRINGS.URL_GOOD_DOMAIN,
				openInNewTab: true,
			},
			{
				text: STRINGS.LINK_GITHUB,
				href: STRINGS.URL_GOOD_DOMAIN_GITHUB,
				openInNewTab: true,
			},
		],
		description: STRINGS.PROFILE_DESCRIPTION,
		technologies: [...COMMON_TECHNOLOGIES],
	},
	{
		projectTitle: STRINGS.PROJECT_TITLE_INCLINET,
		links: [
			{
				text: STRINGS.LINK_LIVE,
				href: STRINGS.URL_GOOD_DOMAIN,
				openInNewTab: true,
			},
			{
				text: STRINGS.LINK_GITHUB,
				href: STRINGS.URL_GOOD_DOMAIN_GITHUB,
				openInNewTab: true,
			},
		],
		description: STRINGS.PROFILE_DESCRIPTION,
		technologies: [...COMMON_TECHNOLOGIES],
	},
	{
		projectTitle: STRINGS.PROJECT_TITLE_TIMELOOM,
		links: [
			{
				text: STRINGS.LINK_LIVE,
				href: STRINGS.URL_GOOD_DOMAIN,
				openInNewTab: true,
			},
			{
				text: STRINGS.LINK_GITHUB,
				href: STRINGS.URL_GOOD_DOMAIN_GITHUB,
				openInNewTab: true,
			},
		],
		description: STRINGS.PROFILE_DESCRIPTION,
		technologies: [...COMMON_TECHNOLOGIES],
	},
];

export const BLOGS: BlogType[] = [
	{
		blogTitle: STRINGS.BLOG_TITLE_1,
		href: "#",
		date: STRINGS.BLOG_DATE,
		topic: STRINGS.BLOG_TOPIC,
		readTime: 5,
	},
	{
		blogTitle: STRINGS.BLOG_TITLE_2,
		href: "#",
		date: STRINGS.BLOG_DATE,
		topic: STRINGS.BLOG_TOPIC,
		readTime: 5,
	},
	{
		blogTitle: STRINGS.BLOG_TITLE_3,
		href: "#",
		date: STRINGS.BLOG_DATE,
		topic: STRINGS.BLOG_TOPIC,
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
		text: STRINGS.LINK_TWITTER,
		href: STRINGS.URL_TWITTER_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_LINKEDIN,
		href: STRINGS.URL_LINKEDIN_PROFILE,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_READING_LIST,
		href: STRINGS.URL_READING_LIST,
		openInNewTab: true,
	},
	{
		text: STRINGS.LINK_TALKS,
		href: "#",
	},
	{
		text: STRINGS.LINK_CORNER,
		href: "#",
	},
];
