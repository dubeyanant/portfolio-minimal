import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			// /chitt is a standalone static page living in public/chitt/
			{ source: "/chitt", destination: "/chitt/index.html" },
			// /coach and its privacy, terms and account deletion pages are static too, in public/coach/
			{ source: "/coach", destination: "/coach/index.html" },
			{ source: "/coach/privacy", destination: "/coach/privacy.html" },
			{ source: "/coach/terms", destination: "/coach/terms.html" },
			{ source: "/coach/delete-account", destination: "/coach/delete-account.html" },
		];
	},
};

export default nextConfig;
