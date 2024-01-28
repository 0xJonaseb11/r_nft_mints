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
    return (
    <div>
      <WalletBalance />
    </div>
  )
}

export default Home;