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
