import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";

const TitleH3 = ({ className, children, ...props }: GeneralComponent) => {
	return (
		<h2
			className={cn(
				"font-serif text-[20px] md:text-[24px] lg:text-[28px]",
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	);
};

export default TitleH3;
