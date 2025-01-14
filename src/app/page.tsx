import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
			<Projects />
			<Blogs />
		</main>
	);
}
