import { cn } from "@/lib/utils";
import type { LinkComponent } from "@/types";
import Link from "next/link";

const CustomLink = ({
	className,
	href = "/",
	children,
	...props
}: LinkComponent) => {
	return (
		<Link
			href={href}
			className={cn(
				"font-mono text-blue-600 group block w-fit",
				className,
			)}
			{...props}
		>
			<span className="group-hover:translate-x-1 transition-transform inline-block">
				[
			</span>
			<span className="text-[10px]"> </span>
			{children}
			<span className="text-[10px]"> </span>
			<span className="group-hover:-translate-x-1 transition-transform inline-block">
				]
			</span>
		</Link>
	);
};

export default CustomLink;
