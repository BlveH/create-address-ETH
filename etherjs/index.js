import { ethers } from 'ethers';
import * as bip39 from "bip39"

//create seed phrase by ethers
const seedPhrase = ethers.Wallet.createRandom().mnemonic.phrase;

const wallet = ethers.HDNodeWallet.fromPhrase(seedPhrase)

console.log(wallet)

//create seed phrase by bip39
const seedPhraseBip = bip39.generateMnemonic(224)

const walletBip = ethers.HDNodeWallet.fromPhrase(seedPhraseBip)

console.log(walletBip)



// 128 bits of entropy maps to a 12 word seed phrase

// 160 bits of entropy maps to a 15 word seed phrase

// 192 bits of entropy maps to an 18 word seed phrase

// 224 bits of entropy maps to a 21 word seed phrase

// 256 bits of entropy maps to a 24 word seed phrase