import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
			<Projects />
			<Blogs />
			<Newsletter />
		</main>
	);
}
