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

const SITE_TITLE = "Anant Dubey | Front-End Developer";
const SITE_DESCRIPTION =
	"Explore Anant's portfolio showcasing expertise in front-end development, Flutter app development, UI/UX design, and performance optimization. Check out innovative projects, technical blogs, and creative solutions.";
const SITE_KEYWORDS =
	"Front-End Developer, Flutter Developer, UI/UX Design, Web Development, Mobile App Development, JavaScript, React, Next.js, Portfolio, Anant";
const AUTHOR_NAME = "Anant";
const SITE_URL = "https://www.anantdubey.com/";
const OG_IMAGE_URL = "https://www.anantdubey.com/opengraph-image.jpg";
const OG_IMAGE_ALT = "Anant's Portfolio Preview";
const TWITTER_CARD_TYPE = "summary_large_image";

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
	authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		type: "website",
		images: [
			{
				url: OG_IMAGE_URL,
				width: 1200,
				height: 630,
				alt: OG_IMAGE_ALT,
			},
		],
	},
	twitter: {
		card: TWITTER_CARD_TYPE,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [OG_IMAGE_URL],
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
