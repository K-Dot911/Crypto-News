export interface SolanaToken {
	id: number;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
}
export interface ApiError {
	message: string;
}
