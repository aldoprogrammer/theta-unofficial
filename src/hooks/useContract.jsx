import { getContract } from "thirdweb";
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
const client = createThirdwebClient({
    clientId: "379ff66a369f3e12df6535c7008603a5", // ClientId for connecting to thirdweb
});

const myChain = defineChain({
    id: 97,
    rpc: "https://bsc-testnet-rpc.publicnode.com", // supposed to be Theta blockchain
    nativeCurrency: { // customize it 
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
});

const useConctracts =(address,ABI) =>{
    const contract = getContract({
        // the client you have created via `createThirdwebClient()`
        client,
        // the chain the contract is deployed on
        chain: myChain,
        // the contract's address
        address,
        // OPTIONAL: the contract's abi
        abi: ABI,
    });

    return contract
}

export default useConctracts