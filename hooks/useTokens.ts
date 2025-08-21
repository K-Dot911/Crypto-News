import { useEffect, useState } from "react";
import { getSolanaTokens } from "@/lib/api/coingecko";
import { SolanaToken } from "@/lib/types";

const DELAY = 60000;

export const useTokens = () => {
	const [tokens, setTokens] = useState<SolanaToken[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	async function fetchTokens() {
		try {
			const data: SolanaToken[] = await getSolanaTokens();
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
