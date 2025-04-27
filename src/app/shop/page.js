"use client"; // Don't forget if you're in Next.js 13+
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Import useRouter

export default function Shop() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username"); // 🔥 Read username
    if (storedUsername) {
      setUsername(storedUsername);
    }
    else{
      router.push("/login");
    }
  }, []);

  const skins = [
    {
      id: 1,
      name: "PROJECT: Yasuo",
      champion: "Yasuo",
      price: "0.00025 BTC",
      image: "images/project_yasuo.png",
    },
    {
      id: 2,
      name: "Star Guardian Ahri",
      champion: "Ahri",
      price: "0.00030 BTC",
      image: "images/Ahri_StarGuardianSkin.jpg",
    },
    {
      id: 3,
      name: "Broken Covenant Riven",
      champion: "Riven",
      price: "0.00020 BTC",
      image: "images/riven-broken-covenant.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold">🛒 League Skins for BTC</h1>
        {username && (
          <h2 className="text-2xl font-semibold text-yellow-400">
            Welcome back, {username}! 👋
          </h2>
        )}
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skins.map((skin) => (
          <div
            key={skin.id}
            className="bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-80 mb-4">
              <img
                src={skin.image}
                alt={skin.name}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold">{skin.name}</h2>
            <p className="text-sm text-gray-400">{skin.champion}</p>
            <p className="text-yellow-400 font-bold mt-2">{skin.price}</p>
            <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg font-semibold">
              Buy with BTC
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
