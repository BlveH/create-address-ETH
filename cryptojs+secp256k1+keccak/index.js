import CryptoJS from 'crypto-js';
import secp256k1 from 'secp256k1';
import keccak from 'keccak';


const privateKey = new Uint8Array(CryptoJS.lib.WordArray.random(128).words)

if (!secp256k1.privateKeyVerify(privateKey)) {
    console.error('Invalid private key');
    process.exit(1);
}

const publicKey = secp256k1.publicKeyCreate(privateKey);

const addressBuffer = keccak('keccak256').update(publicKey.toString().slice(1)).digest();
const address = '0x' + addressBuffer.slice(-20).toString('hex');

console.log('Private Key (hex):', privateKey.toString());
console.log('Public Key (hex):', publicKey.toString('hex'));
console.log('Ethereum Address:', address);
