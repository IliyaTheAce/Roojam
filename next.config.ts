import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{port: "8000", hostname: '127.0.0.1', protocol: 'http'}, {
			port: "8000",
			hostname: 'localhost',
			protocol: 'http',
		}]
	}
}


export default nextConfig;
