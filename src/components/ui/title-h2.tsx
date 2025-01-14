import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";

const TitleH2 = ({ className, children, ...props }: GeneralComponent) => {
	return (
		<h2
			className={cn(
				"font-serif text-[28px] md:text-[32px] lg:text-[38px]",
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	);
};

export default TitleH2;
