import server from "./server";
import * as secp from 'ethereum-cryptography/secp256k1'
import * as k from 'ethereum-cryptography/keccak'
import * as h from 'ethereum-cryptography/utils'
function Wallet({ address, setAddress, balance, setBalance, sign, setSign }) {
  async function onChange(evt) {
    const sign = evt.target.value;
    // setPrivateKey(privateKey);
    // const sign = secp.sign("",privateKey,{recovered:true})
    setSign(sign)
    // const pb = 
    
    
    const address = h.toHex(k.keccak256(secp.recoverPublicKey(k.keccak256(h.utf8ToBytes("Hi")),sign,1)))
    console.log(address)
    setAddress(address)        
            
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }




  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Signature: 
        <input placeholder="Type your signature:" value={sign} onChange={onChange}></input>
      </label>
      <label>
      Address 
      <input placeholder = {address} value={address}></input>
      </label>
      
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
