import { useLovelace } from "@meshsdk/react";

export default function Address() {
  const lovelace = useLovelace();

  return (
    <div className="text-center">
      <p className="text-xl mt-56">
        Balance : {lovelace ? `${parseInt(lovelace) / 1000000} ADA` : "N/A"}{" "}
      </p>
    </div>
  );
}
