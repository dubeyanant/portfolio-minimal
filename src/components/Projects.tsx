import { PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";
import type { GeneralComponent } from "@/types";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./ui/section-title";

const Projects = ({ className, ...props }: GeneralComponent) => {
	return (
		<section
			id="projects"
			className={cn("border-b border-border/10", className)}
			{...props}
		>
			<SectionTitle
				title="Projects"
				link={{
					href: "/projects",
					text: "All Projects",
				}}
			/>
			<div className="">
				{PROJECTS.map((project, index) => (
					<ProjectCard
						key={project.projectTitle}
						{...project}
						className={
							index === PROJECTS.length - 1 ? "border-b-0" : ""
						}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
