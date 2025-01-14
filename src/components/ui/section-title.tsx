import { cn } from "@/lib/utils";
import type { SectionTitleProps } from "@/types";
import CustomLink from "./custom-link";
import TitleH2 from "./title-h2";
import { ViewContainer } from "./view-container";

const SectionTitle = ({
	className,
	title,
	link,
	...props
}: SectionTitleProps) => {
	return (
		<ViewContainer
			className={cn(
				"flex justify-between items-center border-b border-border/10",
				className,
			)}
			{...props}
		>
			<TitleH2>{title}</TitleH2>
			<CustomLink href={link.href}>{link.text}</CustomLink>
		</ViewContainer>
	);
};

export default SectionTitle;
