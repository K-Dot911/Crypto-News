import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Crypto News Test",
	description: "Trending Solana Pools App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-foreground">
				<header className="border-b border-gray-800 p-4 sticky top-0 bg-black/70 backdrop-blur z-50">
					<nav className="flex items-center justify-center">
						<Link
							className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
							href="/"
						>
							Crypto Pools
						</Link>
					</nav>
				</header>
				<main className="container mx-auto p-6">{children}</main>
			</body>
		</html>
	);
}
