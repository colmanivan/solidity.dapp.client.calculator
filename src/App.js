import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { ethers } from "ethers";
import { sc_abi } from "./abi.js";

const ContractAddress = "0x03E615238D97FC376ed25c673E5dcB416621542B";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("-");
  const [number, setNumber] = useState("");
  const [initiated, setInitiated] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        RefreshData();
      });
    }
    if (!initiated) {
      RefreshData();
      setInitiated(true);
    }
  });

  async function initializeProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let sc = new ethers.Contract(ContractAddress, sc_abi, signer);
    return sc;
  }

  async function RefreshData() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      try {
        setIsLoading(true);
        const value = await contract.getValue();
        setValue(value.toString());
        setIsLoading(false);
      } catch (e) {
        console.log("ERROR:", e);
        setIsLoading(false);
      }
    }
    setNumber("");
  }

  async function eventAdd(e) {
    setIsLoading(true);
    try {
      const contract = await initializeProvider();
      const txn = await contract.add(number);
      const txnDetails = await txn.wait();
      if (txnDetails.status === 1) {
        RefreshData();
      }
    } catch (e) {
      console.log("error call add: ", e);
    }
    setIsLoading(false);
    setNumber("");
  }

  async function eventSub(e) {
    setIsLoading(true);
    try {
      const contract = await initializeProvider();
      const txn = await contract.sub(number);
      const txnDetails = await txn.wait();
      if (txnDetails.status === 1) {
        RefreshData();
      }
    } catch (e) {
      console.log("error call sub: ", e);
    }
    setIsLoading(false);
    setNumber("");
  }

  async function eventReset(e) {
    setIsLoading(true);
    try {
      const contract = await initializeProvider();
      const txn = await contract.reset();
      const txnDetails = await txn.wait();
      if (txnDetails.status === 1) {
        RefreshData();
      }
    } catch (e) {
      console.log("error call reset: ", e);
    }
    setIsLoading(false);
    setNumber("");
  }

  async function eventChangeNumber(e) {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      {isLoading && (
        <div id="loading">
          <div id="gif"></div>
        </div>
      )}
      <Fragment>
        <div className="container">
          <form>
            <input type="button" value="Refresh Value" onClick={RefreshData} />
            <p>Value: {value}</p>
            <input
              type="text"
              placeholder="Number"
              value={number}
              onChange={eventChangeNumber}
            />
            <br></br>
            <input type="button" value="ADD" onClick={eventAdd} />
            <br></br>
            <input type="button" value="SUB" onClick={eventSub} />
            <br></br>
            <input type="button" value="RESET" onClick={eventReset} />
          </form>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
