import wallet from 'eth-wallet-light'

//link tài liệu : https://github.com/NoahZinsmeister/eth-wallet-light

let entropy = (Math.random() + 1).toString(36).substring(7);

const password = 'mypassword'

var keystore = await new wallet.Keystore().initializeFromEntropy(entropy, password)
console.log('Address: ', keystore.getAddress())

var messageHash = '0x9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658'
var signature = wallet.concatSignature(keystore.signMessageHash(messageHash, password))
console.log('Signature:', signature)