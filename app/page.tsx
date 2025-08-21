"use client";

import Image from "next/image";
import { useTokens } from "@/hooks/useTokens";
import { TokenTable } from "@/components/table/TokenTable";
import { Loader } from "lucide-react";

export default function Home() {
	const { tokens, loading, error } = useTokens();
	if (loading) return <Loader />;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<h2 className="text-2l font-bold mb-4">Trending Solana Tokens</h2>
			<TokenTable data={tokens}></TokenTable>
		</div>
	);
}
