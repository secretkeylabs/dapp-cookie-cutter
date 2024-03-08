import { useState } from "react";
import { BitcoinNetworkType, RpcErrorCode, request } from "sats-connect";

type Props = {
  network: BitcoinNetworkType;
};

const SendBtc = ({ network }: Props) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [txnId, setTxnId] = useState("");

  const onClick = async () => {
    const response = await request("sendTransfer", {
      recipients: [
        {
          address: address,
          amount: +amount,
        },
      ],
    });

    if (response.status === "success") {
      setTxnId(response.result.txid);
      setAmount("");
      setAddress("");
    } else if (response.error.code === RpcErrorCode.USER_REJECTION) {
      alert("User cancelled the request");
    } else {
      console.error(response.error);
      alert("Error sending BTC. See console for details.");
    }
  };

  const explorerUrl =
    network === BitcoinNetworkType.Mainnet
      ? `https://mempool.space/tx/${txnId}`
      : `https://mempool.space/testnet/tx/${txnId}`;

  return (
    <div className="card">
      <h3>Send BTC</h3>
      {!txnId && (
        <>
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
          <button onClick={onClick} disabled={!amount || !address}>
            Send
          </button>
        </>
      )}
      {txnId && (
        <div className="success">
          Success! Click{" "}
          <a href={explorerUrl} target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to see your transaction
        </div>
      )}
    </div>
  );
};

export default SendBtc;
