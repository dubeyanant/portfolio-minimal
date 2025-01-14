export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export interface LinkComponent
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
}

export type NavLinkType = {
	href: string;
	text: string;
	openInNewTab?: boolean;
};

export interface SectionTitleProps extends GeneralComponent {
	title: string;
	link: {
		href: string;
		text: string;
	};
}

export interface ProjectType {
	projectTitle: string;
	description: string;
	links: {
		text: string;
		href: string;
		openInNewTab?: boolean;
	}[];
	technologies: string[];
}

export interface ProjectCardProps extends GeneralComponent, ProjectType {}
