import { CardanoWallet } from "@meshsdk/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-800 p-6 h-20 flex justify-between items-center text-white">
      <div>
        <Link href="/" className="mr-5 hover:font-bold text-xl">
          Home
        </Link>
        <Link href="/address" className="mr-5 hover:font-bold text-xl">
          Address
        </Link>
        <Link href="/balance" className="mr-5 hover:font-bold text-xl">
          Balance
        </Link>
      </div>
      <CardanoWallet label={"Hubungkan Dompet"} />
    </div>
  );
}
