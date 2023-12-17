import { useState } from "react";
import { ethers } from "ethers";

const WalletBalance = () => {
    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts'});
        


    }

}

export default WalletBalance;