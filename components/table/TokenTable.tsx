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
		<div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
			<Table>
				<TableHeader>
					<TableRow className="bg-gray-100 dark:bg-gray-800">
						<TableHead className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">
							Logo
						</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Symbol</TableHead>
						<TableHead>Price (USD)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((token) => (
						<TableRow key={token.id} className="transition-colors">
							<TableCell>
								<Image
									src={token.image}
									alt={token.name}
									width={24}
									height={24}
								/>
							</TableCell>
							<TableCell className="font-medium text-gray-900 dark:text-gray-100">
								{token.name}
							</TableCell>
							<TableCell className="uppercase font-medium text-gray-900 dark:text-gray-100">
								{token.symbol}
							</TableCell>
							<TableCell className="text-green-600 dark:text-green-400 font-semibold">
								${token.circulating_supply.toLocaleString()}
							</TableCell>
							<TableCell>
								<Link
									href={`/token/${token.id}`}
									className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
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
