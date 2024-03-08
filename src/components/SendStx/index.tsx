import { useState } from "react";
import { BitcoinNetworkType, request } from "sats-connect";

type Props = {
  network: BitcoinNetworkType;
};

const SendStx = ({ network }: Props) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");

  const onClick = async () => {
    const response = await request("stx_transferStx", {
      recipient: address,
      amount: +amount,
      memo: memo === "" ? undefined : memo,
    });
  };

  return (
    <div className="card">
      <h3>Send STX</h3>
      <div>
        <input
          type="number"
          placeholder="Amount"
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
      <div>
        <input
          type="text"
          placeholder="Memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <button onClick={onClick}>Send</button>
    </div>
  );
};

export default SendStx;
