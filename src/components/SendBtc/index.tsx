import { useState } from "react";
import { BitcoinNetworkType, request } from "sats-connect";

type Props = {
  network: BitcoinNetworkType;
};

const SendBtc = ({ network }: Props) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const onClick = async () => {
    const response = await request("sendTransfer", {
      recipients: [
        {
          address: address,
          amount: +amount,
        },
      ],
    });
  };

  return (
    <div className="card">
      <h3>Send BTC</h3>
      <div>
        <input
          type="number"
          placeholder="Amount in sats"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={onClick}>Send</button>
    </div>
  );
};

export default SendBtc;
