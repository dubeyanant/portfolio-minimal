import { NAV_LINKS } from "@/constants";
import { STRINGS } from "@/constants/strings";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const Navbar = ({ className, ...props }: GeneralComponent) => {
	return (
		<nav
			id="nav"
			className={cn("border-b border-border/10", className)}
			{...props}
		>
			<ViewContainer className="flex justify-between items-center lg:py-5">
				<span className="font-serif font-semibold text-xl">
					{STRINGS.LOGO_TEXT}
				</span>
				<ul className="flex gap-8">
					{NAV_LINKS.map(link => (
						<li
							key={link.text}
							className={cn(
								"hidden md:block",
								link.text === STRINGS.LINKS
									? "block"
									: "hidden",
							)}
						>
							<Link
								href={link.href}
								target={link.openInNewTab ? "_blank" : "_self"}
								rel={
									link.openInNewTab
										? "noopener noreferrer"
										: ""
								}
								className="font-medium text-body hover:text-foreground transition-colors"
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</ViewContainer>
		</nav>
	);
};

export default Navbar;
