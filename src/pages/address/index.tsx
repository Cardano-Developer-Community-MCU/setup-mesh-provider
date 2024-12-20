import { useAddress } from "@meshsdk/react";

export default function Address() {
  const address = useAddress();

  return (
    <div className="text-center">
      <p className="text-xl mt-56">Address : {address ? address : "N/A"}</p>
    </div>
  );
}
