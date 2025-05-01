import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-5xl font-bold mb-6">Welcome to BTC Skin Shop</h1>
      <p className="text-lg mb-4 text-gray-300">Buy your favorite League skins using Bitcoin 🪙</p>

      <div className="flex space-x-4">
        <Link
          href="/shop"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-xl"
        >
          Enter Shop
        </Link>

        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg text-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
