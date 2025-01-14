import { cn } from "@/lib/utils";
import type { ProjectCardProps } from "@/types";
import CustomLink from "./ui/custom-link";
import TitleH3 from "./ui/title-h3";
import { ViewContainer } from "./ui/view-container";

const ProjectCard = ({
	className,
	projectTitle,
	description,
	links,
	technologies,
	...props
}: ProjectCardProps) => {
	return (
		<ViewContainer
			className={cn(
				"border-b border-border/10 hover:bg-gray-50 transition-colors",
				className,
			)}
			{...props}
		>
			<div className="flex justify-between items-center">
				<TitleH3>{projectTitle}</TitleH3>
				<div className="flex items-center gap-3">
					{links.map(link => (
						<CustomLink
							href={link.href}
							key={link.text}
							target={link.openInNewTab ? "_blank" : "_self"}
							rel={link.openInNewTab ? "noopener noreferrer" : ""}
						>
							{link.text}
						</CustomLink>
					))}
				</div>
			</div>
			<div className="flex items-center gap-2 mt-4">
				{technologies.map(tech => (
					<span
						key={tech}
						className="text-[14px] px-[12px] py-[5px] text-blue-600 bg-blue-200 rounded-full shadow-sm font-mono font-medium"
					>
						{tech}
					</span>
				))}
			</div>
			<p className="mt-7 text-body">{description}</p>
		</ViewContainer>
	);
};

export default ProjectCard;
