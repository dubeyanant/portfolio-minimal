import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			// /chitt is a standalone static page living in public/chitt/
			{ source: "/chitt", destination: "/chitt/index.html" },
		];
	},
};

export default nextConfig;
