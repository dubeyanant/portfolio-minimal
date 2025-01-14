import CustomLink from "./ui/custom-link";
import PrimaryButton from "./ui/primary-button";
import { ViewContainer } from "./ui/view-container";

const Header = () => {
	return (
		<header id="header" className="border-b border-border/10">
			<ViewContainer className="space-y-7 hover:bg-gray-50 transition-colors">
				<h1 className="text-3xl md:text-4xl lg:text-[46px] flex flex-col gap-3 font-serif text-">
					<span className="font-light">Hi, I'm Adarsh 👋🏽</span>
					<span className="font-normal title">
						Web developer & ML enthusiast
					</span>
				</h1>
				<div className="flex items-center gap-4">
					<CustomLink
						href="https://github.com/inclinedadarsh"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</CustomLink>
					<CustomLink
						href="https://x.com/inclinedadarsh"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</CustomLink>
					<CustomLink
						href="https://linkedin.com/in/dubeyadarsh"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</CustomLink>
				</div>
				<p className="text-body max-w-[700px] text-pretty">
					My recent experience was working as a frontend/design
					engineer at Rocketium. Building components and layouts for
					AI flows within the product. Including the internal design
					system. Also, worked with GitHub as an frontend engineering
					intern. Worked on internal tools and landing pages with APAC
					and Latin region DevRel team.
				</p>
				<PrimaryButton href="mailto:dubeyadarshmain@gmail.com">
					Connect with me
				</PrimaryButton>
			</ViewContainer>
		</header>
	);
};

export default Header;
