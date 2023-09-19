import { ethers } from 'ethers';


const wallet = ethers.Wallet.createRandom();

console.log('Private Key:', wallet.privateKey);
console.log('Ethereum Address:', wallet.address);
