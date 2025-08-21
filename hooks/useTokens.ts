import { useEffect, useState } from "react";
import { getSolanaTokens } from "@/lib/api/coingecko";
import { SolanaToken } from "@/lib/types";

const DELAY = 60000;

export const useTokens = () => {
	const [tokens, setTokens] = useState<SolanaToken[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	async function fetchTokens() {
		try {
			setLoading(true);
			const data: SolanaToken[] = await getSolanaTokens();
			console.log(`4444444444444444444`, data);
			setTokens(data);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else setError("Unknown Error");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchTokens();
		const interval = setInterval(fetchTokens, DELAY);
		return () => clearInterval(interval);
	}, []);

	return { tokens, loading, error };
};
