import { FOOTER_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import CustomLink from "./ui/custom-link";
import TitleH2 from "./ui/title-h2";
import { ViewContainer } from "./ui/view-container";

const Footer = ({ className, ...props }: GeneralComponent) => {
	return (
		<footer id="footer" className={cn("", className)} {...props}>
			<ViewContainer className="border-b border-border/10 flex justify-center gap-5 items-center">
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
			<ViewContainer>
				<TitleH2 className="text-center">Thank You.</TitleH2>
			</ViewContainer>
		</footer>
	);
};

export default Footer;
