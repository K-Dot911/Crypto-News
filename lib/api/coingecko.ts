import axios from "axios";
import { SolanaToken } from "@/lib/types";

export async function getSolanaTokens(): Promise<SolanaToken[]> | never {
	try {
		const result = await axios.get<SolanaToken[]>(
			`https://api.coingecko.com/api/v3/coins/markets`,
			{
				params: {
					vs_currency: "usd",
					category: "solana-ecosystem",
					order: "market_cap_desc",
					per_page: 20,
					page: 1,
					sparkline: false,
				},
			},
		);
		if (result.status !== 200) new Error("Failed to fetch solana");
		return result.data.map((token) => ({
			id: token.id,
			name: token.name,
			symbol: token.symbol,
			image: token.image,
			circulating_supply: token.circulating_supply,
		}));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.message);
		} else throw new Error("Unknown error");
	}
}
