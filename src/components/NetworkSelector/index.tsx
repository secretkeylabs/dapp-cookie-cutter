import { BitcoinNetworkType } from "sats-connect";

type Props = {
  network: BitcoinNetworkType;
  setNetwork?: (newNetwork: BitcoinNetworkType) => void;
};

const NetworkSelector = ({ network, setNetwork }: Props) => {
  const onNetworkChange = () => {
    if (!setNetwork) return;

    const newNetwork =
      network === BitcoinNetworkType.Mainnet
        ? BitcoinNetworkType.Testnet
        : BitcoinNetworkType.Mainnet;
    setNetwork(newNetwork);
  };

  return (
    <div>
      <div>Network: {network}</div>
      <div className="networkSelectorButton">
        {setNetwork && (
          <button onClick={onNetworkChange}>Change Network</button>
        )}
      </div>
    </div>
  );
};

export default NetworkSelector;
