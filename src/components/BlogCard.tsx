import { STRINGS } from "@/constants/strings";
import { cn } from "@/lib/utils";
import type { BlogCardProps } from "@/types";
import { Asterisk } from "lucide-react";
import Link from "next/link";
import ChevronRight from "./ui/chevron-right";
import TitleH3 from "./ui/title-h3";
import { ViewContainer } from "./ui/view-container";

const BlogCard = ({
	className,
	blogTitle,
	href,
	date,
	topic,
	readTime,
}: BlogCardProps) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="max-w-[900px] mx-auto block"
		>
			<ViewContainer
				className={cn(
					"border-b border-border/10 hover:bg-gray-50 hover:px-6 md:hover:px-12 transition-all flex items-center gap-4 hover:gap-0",
					className,
				)}
			>
				<div className="grow ">
					<TitleH3 className="font-light leading-tight">
						{blogTitle}
					</TitleH3>
					<div className="flex items-center gap-x-3 text-body flex-wrap mt-3">
						<span className="">{date}</span>
						<Asterisk size={18} />
						<span className="">{topic}</span>
						<Asterisk size={18} />
						<span className="">
							{readTime} {STRINGS.BLOG_READ_TIME_SUFFIX}
						</span>
					</div>
				</div>
				<ChevronRight className="h-4 md:h-6 w-6" />
			</ViewContainer>
		</Link>
	);
};

export default BlogCard;
