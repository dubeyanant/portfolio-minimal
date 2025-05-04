import { STRINGS } from "@/constants/strings";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import PrimaryButton from "./ui/primary-button";
import TitleH2 from "./ui/title-h2";
import { ViewContainer } from "./ui/view-container";

const Newsletter = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			id="newsletter"
			className={cn("border-b border-border/10", className)}
			{...props}
		>
			<ViewContainer className="hover:bg-gray-50 transition-colors">
				<TitleH2>{STRINGS.NEWSLETTER_TITLE}</TitleH2>
				<p className="text-body mt-4">
					{STRINGS.NEWSLETTER_DESCRIPTION}
				</p>
				<PrimaryButton
					className="mt-7"
					href={STRINGS.BLOGS_SUB}
					target="_blank"
				>
					{STRINGS.NEWSLETTER_SUBSCRIBE_BUTTON}
				</PrimaryButton>
			</ViewContainer>
		</section>
	);
};

export default Newsletter;
