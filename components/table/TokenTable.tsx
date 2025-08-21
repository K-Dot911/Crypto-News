"use client";

import { SolanaToken } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "@/components/ui/table";

export function TokenTable({ data }: { data: SolanaToken[] }) {
	return (
		<div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-800 bg-gray-500/70 backdrop-blur">
			<Table>
				<TableHeader>
					<TableRow className="bg-gray-700/80">
						<TableHead className="px-4 py-3 font-semibold text-gray-300 uppercase tracking-wide">
							Logo
						</TableHead>
						<TableHead className="text-gray-300">Name</TableHead>
						<TableHead className="text-gray-300">Symbol</TableHead>
						<TableHead className="text-gray-300 text-right">
							Price (USD)
						</TableHead>
						<TableHead className="text-gray-300 text-center">Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((token) => (
						<TableRow
							key={token.id}
							className="hover:bg-gray-800/60 transition-colorss"
						>
							<TableCell>
								<Image
									src={token.image}
									alt={token.name}
									width={28}
									height={28}
									className="rounded-full"
								/>
							</TableCell>
							<TableCell className="font-medium text-gray-100">
								{token.name}
							</TableCell>
							<TableCell className="uppercase text-gray-400">
								{token.symbol}
							</TableCell>
							<TableCell className="text-green-400 font-semibold text-right">
								{token.current_price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
									minimumFractionDigits: 2,
									maximumFractionDigits: 8,
								})}
							</TableCell>
							<TableCell className="text-center">
								<Link
									href={`/tokens/${token.id}`}
									className="text-blue-500 hover:text-blue-400 font-medium"
								>
									View
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
