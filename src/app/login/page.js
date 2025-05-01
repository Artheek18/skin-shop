"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    if (username && email && password) {
      
      localStorage.setItem("username", username); 
      router.push("/shop"); 

    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-5xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
      <input
          type="username"
          placeholder="Username"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
