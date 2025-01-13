import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";

const TitleH2 = ({ className, children, ...props }: GeneralComponent) => {
	return (
		<h2 className={cn("font-serif", className)} {...props}>
			{children}
		</h2>
	);
};

export default TitleH2;
