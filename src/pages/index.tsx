import { useNetwork } from "@meshsdk/react";

export default function Users() {
  const network = useNetwork();

  return (
    <div className="text-center">
      <p className="text-4xl font-bold mt-56 mb-3">Hello Cardano</p>
      <p className="text-xl">
        Network :{" "}
        {network === 1 ? "Mainnet" : network === 0 ? "Testnet" : "Offline"}
      </p>
    </div>
  );
}
