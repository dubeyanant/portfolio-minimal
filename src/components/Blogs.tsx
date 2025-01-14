import { BLOGS } from "@/constants";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import BlogCard from "./BlogCard";
import SectionTitle from "./ui/section-title";

const Blogs = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			id="blogs"
			className={cn("border-b border-border/10", className)}
			{...props}
		>
			<SectionTitle
				title="Blogs"
				link={{
					href: "https://blog.adarshdubey.com",
					text: "All Blogs",
					openInNewTab: true,
				}}
			/>
			<div className="">
				{BLOGS.map((blog, index) => (
					<BlogCard
						key={blog.blogTitle}
						{...blog}
						className={
							index === BLOGS.length - 1 ? "border-b-0" : ""
						}
					/>
				))}
			</div>
		</section>
	);
};

export default Blogs;
