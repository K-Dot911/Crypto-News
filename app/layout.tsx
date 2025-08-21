import type { Metadata } from "next";
import "./globals.css";

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
			<body className="min-h-screen bg-background text-foreground">
				<header className="border-b p-4">
					<nav className="flex items-center justify-between">
						<h1 className="text-lg font-bold">Crypto Pools</h1>
					</nav>
				</header>
				<main className="container mx-auto p-6">{children}</main>
			</body>
		</html>
	);
}
