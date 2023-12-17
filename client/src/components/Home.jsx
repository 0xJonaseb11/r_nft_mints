import React from 'react'
import { Wallet, ethers } from 'ethers';
import WalletBalance from './WalletBalance';

const Home = () => {
  return (
    <div>
      <WalletBalance />
    </div>
  )
}

export default Home;