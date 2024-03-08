import { Address } from "sats-connect";

type Props = {
  addresses: Address[];
};

const AddressDisplay = ({ addresses }: Props) => {
  return (
    <div>
      {addresses.map((address) => (
        <div key={address.address} className="address">
          <div>{address.purpose}</div>
          <div>Address: {address.address}</div>
          <div>Public key: {address.publicKey}</div>
        </div>
      ))}
    </div>
  );
};

export default AddressDisplay;
