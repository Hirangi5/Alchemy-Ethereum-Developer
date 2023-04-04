import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  // const [privateKey, setPrivateKey] = useState("");
  const [sign,setSign] = useState("")

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        // privateKey = {privateKey}
        // setPrivateKey = {setPrivateKey}
        sign = {sign}
        setSign = {setSign}
        address={address}
        setAddress={setAddress}
        
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
