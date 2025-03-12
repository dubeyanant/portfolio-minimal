import { HEADER_LINKS } from "@/constants";
import { STRINGS } from "@/constants/strings";
import CustomLink from "./ui/custom-link";
import PrimaryButton from "./ui/primary-button";
import { ViewContainer } from "./ui/view-container";

const Header = () => {
	return (
		<header id="header" className="border-b border-border/10">
			<ViewContainer className="space-y-7 hover:bg-gray-50 transition-colors">
				<h1 className="text-3xl md:text-4xl lg:text-[46px] flex flex-col gap-3 font-serif">
					<span className="font-light">
						{STRINGS.HEADER_GREETING}
					</span>
					<span className="font-normal title">
						{STRINGS.HEADER_TITLE}
					</span>
				</h1>

				<div className="flex items-center gap-4">
					{HEADER_LINKS.map(({ text, href, openInNewTab }) => (
						<CustomLink
							key={href}
							href={href}
							target={openInNewTab ? "_blank" : "_self"}
							rel="noopener noreferrer"
						>
							{text}
						</CustomLink>
					))}
				</div>
				<p className="text-body max-w-[700px] text-pretty">
					{STRINGS.PROFILE_DESCRIPTION}
				</p>
				<PrimaryButton href={STRINGS.URL_EMAIL}>
					{STRINGS.HEADER_CONNECT_BUTTON}
				</PrimaryButton>
			</ViewContainer>
		</header>
	);
};

export default Header;
