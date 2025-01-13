import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ViewContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ViewContainer = forwardRef<HTMLDivElement, ViewContainerProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"box-border mx-auto",
					"max-w-[900px] p-4 md:p-6 lg:p-8 border-border/10 border-l border-r",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

ViewContainer.displayName = "ViewContainer";

export { ViewContainer };

export type { ViewContainerProps };
