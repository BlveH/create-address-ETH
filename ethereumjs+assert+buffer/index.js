import CryptoJS from 'crypto-js';
import secp256k1 from 'secp256k1';
import { Buffer } from 'buffer';
import { pubToAddress } from 'ethereumjs-util';

// Generate a 32-byte private key
const privateKey = CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);

const privateKeyBuffer = Buffer.from(privateKey, 'hex');

if (!secp256k1.privateKeyVerify(privateKeyBuffer)) {
    console.error('Invalid private key');
    process.exit(1);
}

const publicKey = secp256k1.publicKeyCreate(privateKeyBuffer);

if (publicKey.length !== 33) {
    console.error('Invalid public key length');
    process.exit(1);
}

const uncompressedPublicKey = secp256k1.publicKeyConvert(publicKey, false);

if (uncompressedPublicKey.length !== 65) {
    console.error('Invalid uncompressed public key length');
    process.exit(1);
}

const buf = pubToAddress(Buffer.from(uncompressedPublicKey).slice(1));

console.log('Private Key (hex):', privateKey);
console.log('Public Key :', publicKey.toString());
console.log('Ethereum Address:', '0x' + buf.toString('hex'));
