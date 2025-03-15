import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

const fraunces = Fraunces({
	variable: "--font-serif",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anant Dubey | Front-End Developer",
	description:
		"Explore Anant's portfolio showcasing expertise in front-end development, Flutter app development, UI/UX design, and performance optimization. Check out innovative projects, technical blogs, and creative solutions.",
	keywords:
		"Front-End Developer, Flutter Developer, UI/UX Design, Web Development, Mobile App Development, JavaScript, React, Next.js, Portfolio, Anant",
	authors: [{ name: "Anant", url: "https://www.anantdubey.com/" }],
	openGraph: {
		title: "Anant Dubey | Front-End Developer",
		description:
			"Discover Anant's portfolio featuring cutting-edge front-end and mobile app development projects, UI/UX design insights, and technical expertise.",
		url: "https://www.anantdubey.com/",
		type: "website",
		images: [
			{
				url: "https://www.anantdubey.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Anant's Portfolio Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Anant Dubey | Front-End Developer",
		description:
			"Explore Anant's work in front-end and mobile app development, UI/UX design, and performance optimization.",
		images: ["https://www.anantdubey.com/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
