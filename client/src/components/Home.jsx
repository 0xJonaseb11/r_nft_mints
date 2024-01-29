import {ethers} from 'ethers';
import FiredGuys from '../artifacts/contracts/FiredGuys.sol';
import { useEffect, useState } from 'react';

const contractAddress = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const provider = new ethers.providers.web3Provider(window.ethereum);

// get the end user
const signer = provider.getSiner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);
        
const Home = () => {
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    getCount();  
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));


  }

function NFTImage({tokenId, getCount}) {
  const contentId = 'IPFS url like Pinata';
  const metadataURI = `${contentId} / ${tokenId}.json`;

  const imageURI = `img/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
}

useEffect(() => {
  getMintedStatus();

}, [isMinted]);


const getMintedStatus = async () => {
  const result = await contract.isContentOwned(metadataURI);
  console.log(result);
  setIsMinted(result);
};

const mintToken = async () => {
  const connection = contract.connect(signer);
  const addr = connection.getAddress;
  const result = await contract.payToMint(addr, metadataURI, {
    value:ethers.utils.parseEther('0.05'),
  });

  await result.wait();
  getMintedStatus();

}

async function getURI() {
  const url = await contract.tokenURI(tokenId);
}


return (
  <div>
    <div>
      <img src={isMinted ? imageURI : 'img/blockchain.png'} alt="Placeholder" />
      <div>
        <h5>ID #{tokeniD}</h5>
        {!isMinted ? (
          <button onClick={mintToken}>
          Mint
          </button>
        ) : (
          <button onClick={getURI}>
            Taken! Show URI
          </button>
        )};
      </div>
    </div>
    <WalletBalance />
    <h1>Fired Guys NFT Collection</h1>
    {Array(totalMinted + 1)
    .fill(0)
    .map((_, i) => (
     <div  key={i}>
      <NFTImage tokenId={i} />
     </div>
    ))};
  </div>
);
}

export default Home;