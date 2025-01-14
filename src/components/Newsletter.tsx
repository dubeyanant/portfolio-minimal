import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import React from "react";
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
			<ViewContainer>
				<TitleH2>Newsletter</TitleH2>
				<p className="text-body mt-4">
					I write about this and that, and also that other thing.
					Newsletter is published every week.
				</p>
				<PrimaryButton className="mt-7">Subscribe</PrimaryButton>
			</ViewContainer>
		</section>
	);
};

export default Newsletter;
