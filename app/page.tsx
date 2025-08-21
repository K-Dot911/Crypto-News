"use client";

import { useTokens } from "@/hooks/useTokens";
import { TokenTable } from "@/components/table/TokenTable";
import { Loader } from "lucide-react";

export default function Home() {
	const { tokens, loading, error } = useTokens();
	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Loader color="#fff" size={48} className="animate-spin" />
			</div>
		);

	if (error)
		return (
			<div className="flex justify-center items-center h-screen text-white">
				<p>{error}</p>
			</div>
		);

	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold text-gray-200 tracking-wide">
				Trending Solana Tokens
			</h2>
			<TokenTable data={tokens} />
		</div>
	);
}
