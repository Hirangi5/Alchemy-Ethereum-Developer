const secp = require("ethereum-cryptography/secp256k1");
const { toHex} = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");


const privateKey = secp.utils.randomPrivateKey();

console.log("Private Key:"+toHex(privateKey))

const p = keccak256(secp.getPublicKey(privateKey));
// const publicKey = keccak256(p).slice(-20)
var s2
const signMessage = async()=>{
var [s,r] = await secp.sign(keccak256(utf8ToBytes("Hi")),privateKey,{recovered:true})
// const recpubkey = await secp.recoverPublicKey(keccak256(utf8ToBytes("")),s,r)
// if(toHex(p)===toHex(recpubkey)){
//     console.log("True")
// }
//     else{
//         console.log("false")
//     }
    // console.log(s)
    console.log('Signature: '+toHex(s).toString())
    // const hex = toHex(s)
    // const backtou = Uint8Array.from(Buffer.from(hex, 'hex'));
    // console.log(backtou)
    console.log("R IS: "+r)
    // console.log(utf8ToBytes(toString(s)))
    // s2 = await toHex(s)

// return s2
}
signMessage()
// var s2  = signMessage()
// console.log(s[0])
// console.log(s[1])
const sign1 = '3044022044ce786c6333ec494d8f9410b50f03d9f397287bb6b5d603bac4b42cf9f93825022061565e65eedd78b939e0cb8f690aac146c9d4d8026b6a5396fac25d1d0c4e597'
const address = toHex(secp.recoverPublicKey(keccak256(utf8ToBytes("")),Uint8Array.from(Buffer.from(sign1, 'hex')),0));
console.log('Address is: '+address)    
console.log("Public Key:"+toHex(p))
console.log(typeof(sign1))
// console.log("Signature:"+s2)
// console.log("Recovered Public Key"+toString(rp()))