import { Address } from "sats-connect";

type Props = {
  addresses: Address[];
  onDisconnect: () => void;
};

const AddressDisplay = ({ addresses, onDisconnect }: Props) => {
  return (
    <div className="card">
      <h3>Connected Addresses</h3>
      {addresses.map((address) => (
        <div key={address.address} className="address">
          <h4>{address.purpose}</h4>
          <div>Address: {address.address}</div>
          <div>Public key: {address.publicKey}</div>
        </div>
      ))}
      <div>
        <button onClick={onDisconnect}>Disconnect</button>
      </div>
    </div>
  );
};

export default AddressDisplay;
