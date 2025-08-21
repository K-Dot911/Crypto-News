import { SolanaToken } from "@/lib/types";

export async function getSolanaTokens(): Promise<SolanaToken[]> | never {
	try {
		const url = new URL("https://api.coingecko.com/api/v3/coins/markets");
		url.searchParams.append("vs_currency", "usd");
		url.searchParams.append("category", "solana-ecosystem");
		url.searchParams.append("order", "market_cap_desc");
		url.searchParams.append("per_page", "20");
		url.searchParams.append("page", "1");
		url.searchParams.append("sparkline", "false");

		const result = await fetch(url.toString());

		if (!result.ok) {
			throw new Error("Failed to fetch solana");
		}

		const data: SolanaToken[] = await result.json();

		return data.map((token) => ({
			id: token.id,
			name: token.name,
			symbol: token.symbol,
			image: token.image,
			current_price: token.current_price,
		}));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else throw new Error("Unknown error");
	}
}
