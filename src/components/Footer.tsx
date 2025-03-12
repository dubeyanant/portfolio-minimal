import { FOOTER_LINKS } from "@/constants";
import { STRINGS } from "@/constants/strings";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import CustomLink from "./ui/custom-link";
import TitleH2 from "./ui/title-h2";
import { ViewContainer } from "./ui/view-container";

const Footer = ({ className, ...props }: GeneralComponent) => {
	return (
		<footer id="footer" className={cn("", className)} {...props}>
			<ViewContainer className="border-b border-border/10 flex justify-center gap-5 items-center hover:bg-gray-50 transition-colors">
				{FOOTER_LINKS.map(link => (
					<CustomLink
						href={link.href}
						key={link.text}
						target={link.openInNewTab ? "_blank" : "_self"}
						rel={link.openInNewTab ? "noopener noreferrer" : ""}
					>
						{link.text}
					</CustomLink>
				))}
			</ViewContainer>
			<ViewContainer className="hover:bg-gray-50 transition-colors">
				<TitleH2 className="text-center">
					{STRINGS.FOOTER_SECTION_TITLE}
				</TitleH2>
			</ViewContainer>
		</footer>
	);
};

export default Footer;
