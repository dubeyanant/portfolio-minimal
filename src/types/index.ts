export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export interface LinkComponent
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
}
