import { cn } from "@/lib/utils";
import type { GeneralComponent, NavLinkType } from "@/types";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const nav_links: NavLinkType[] = [
	{ text: "Projects", href: "#projects" },
	{ text: "Blogs", href: "#blogs" },
	{ text: "Newsletter", href: "#newsletter" },
	{
		text: "Reading List",
		href: "https://readinglist.adarshdubey.com",
		openInNewTab: true,
	},
	{ text: "Links", href: "https://bento.me/adarsh", openInNewTab: true },
];

const Navbar = ({ className, ...props }: GeneralComponent) => {
	return (
		<nav
			id="nav"
			className={cn("border-b border-border/10", className)}
			{...props}
		>
			<ViewContainer className="flex justify-between items-center lg:py-5">
				<span className="font-serif font-semibold text-xl">
					Adarsh.
				</span>
				<ul className="">
					{nav_links.map(link => (
						<li key={link.text} className="inline-block mx-4">
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
