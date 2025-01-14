export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export interface LinkComponent
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
}

export type LinkType = {
	href: string;
	text: string;
	openInNewTab?: boolean;
};

export type NavLinkType = LinkType;

export interface SectionTitleProps extends GeneralComponent {
	title: string;
	link: LinkType;
}

export interface ProjectType {
	projectTitle: string;
	description: string;
	links: LinkType[];
	technologies: string[];
}

export interface ProjectCardProps extends GeneralComponent, ProjectType {}

export interface BlogType {
	blogTitle: string;
	href: string;
	date: string;
	topic: string;
	readTime: number;
}

export interface BlogCardProps extends GeneralComponent, BlogType {}
