import { cn } from "@/lib/utils";
import type { LinkComponent } from "@/types";
import Link from "next/link";
import ChevronRight from "./chevron-right";

const PrimaryButton = ({
	className,
	children,
	href = "/",
	...props
}: LinkComponent) => {
	return (
		<Link
			href={href}
			className={cn(
				"w-fit px-6 py-3 text-[16px] bg-black text-white shadow flex items-center gap-4 font-medium group",
				className,
			)}
			{...props}
		>
			<span className="group-hover:translate-x-1 transition-transform">
				{children}
			</span>
			<ChevronRight className="group-hover:-translate-x-1 transition-transform w-4 h-4" />
		</Link>
	);
};

export default PrimaryButton;
