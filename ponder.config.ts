import type { PonderConfig } from "@ponder/core";
import { graphqlPlugin } from "@ponder/graphql";

export const config: PonderConfig = {
	plugins: [graphqlPlugin()],
	networks: [
		{ name: "optimism", chainId: 10, rpcUrl: process.env.PONDER_RPC_URL_10 },
	],
	contracts: [
		{
			name: "Proxy",
			network: "optimism",
			abi: "./abis/Proxy.json",
			address: "0xee36eaad94d1cc1d0eccadb55c38bffb6be06c77",
			startBlock: 49669971,
			endBlock: 49769971, // Currently only indexing first 100k blocks since contract was deployed
			blockLimit: 50000,
		},
	],
};
