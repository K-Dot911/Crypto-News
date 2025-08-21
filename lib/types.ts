export interface SolanaToken {
	id: number;
	name: string;
	symbol: string;
	image: string;
	circulating_supply: number;
}
export interface ApiError {
	message: string;
}
