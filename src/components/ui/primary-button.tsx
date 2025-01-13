import { chevronRight } from "@/assets";
import { cn } from "@/lib/utils";
import type { LinkComponent } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
			<Image
				src={chevronRight}
				alt="Chevron Right"
				className="group-hover:-translate-x-1 transition-transform"
			/>
		</Link>
	);
};

export default PrimaryButton;
