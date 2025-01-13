import Navbar from "@/components/Navbar";
import CustomLink from "@/components/ui/custom-link";

export default function Home() {
	return (
		<main>
			<Navbar />
			<h1>This is a title</h1>
			<div className="p-52">
				<CustomLink href="#">Simple Button</CustomLink>
			</div>
		</main>
	);
}
