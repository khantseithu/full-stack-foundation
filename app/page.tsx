import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="py-4 my-4 text-center">
      <Link
        className="bg-teal-500 rounded-xl p-4 mt-4 text-center"
        href="/dashboard"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
