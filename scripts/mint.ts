import { ethers } from "hardhat";

async function main() {
    const [owner] = await ethers.getSigners();
    const pennFT = await ethers.getContractAt("PennFT", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");
    
    // Call the MintNFT function
    const mintTx = await pennFT.MintNFT(owner.address, "https://example.com/token/1");
    await mintTx.wait();  // Wait for the transaction to be mined
  
    // Verify the minting
    const uri = await pennFT.tokenURI(0);
    console.log('Token URI:', uri);  // Should print: https://example.com/token/1
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  