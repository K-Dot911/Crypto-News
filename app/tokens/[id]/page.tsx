import Image from "next/image";

async function getTokenData(id: string) {
	const result = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
		next: { revalidate: 60 },
	});

	if (!result.ok) throw new Error("Failed to fetch token");
	return result.json();
}

export default async function TokenPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const token = await getTokenData(id);

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="flex justify-center items-center gap-4 mb-6">
				<Image
					src={token.image.large}
					alt={token.name}
					width={64}
					height={64}
					className="rounded-full shadow-lg"
				/>
				<div>
					<h1 className="text-4xl font-extrabold text-white drop-shadow-md">
						{token.name}
					</h1>
					<p className="text-gray-400 uppercase tracking-widest text-sm">
						{token.symbol}
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900/70 p-6 rounded-xl shadow-xl border border-gray-800">
				<div className="text-center">
					<p className="text-gray-400 text-sm">Current Price</p>
					<p className="text-2xl font-bold text-emerald-400">
						${token.market_data.current_price.usd.toLocaleString()}
					</p>
				</div>
				<div className="text-center">
					<p className="text-gray-400 text-sm">Market Cap</p>
					<p className="text-2xl font-bold text-sky-400">
						${token.market_data.market_cap.usd.toLocaleString()}
					</p>
				</div>
				<div className="text-center">
					<p className="text-gray-400 text-sm">Circulating Supply</p>
					<p className="text-2xl font-bold text-purple-400">
						{token.market_data.circulating_supply.toLocaleString(undefined, {
							maximumFractionDigits: 0,
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
