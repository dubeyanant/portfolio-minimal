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
					"border-b border-border/10 hover:bg-gray-50 hover:px-12 transition-all flex items-center",
					className,
				)}
			>
				<div className="grow ">
					<TitleH3>{blogTitle}</TitleH3>
					<div className="flex items-center gap-3 text-body">
						<span className="">{date}</span>
						<Asterisk size={18} />
						<span className="">{topic}</span>
						<Asterisk size={18} />
						<span className="">{readTime} minutes read</span>
					</div>
				</div>
				{/* <Image src={chevronRight} alt="Chevron Right" className="text-black" fill="#000" /> */}
				<ChevronRight className="h-6 w-6" />
			</ViewContainer>
		</Link>
	);
};

export default BlogCard;
