'use client';

import Link from "next/link";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f87171] bg-opacity-90 relative overflow-hidden p-4">
      {/* Pattern Overlay Background (Simulated) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden flex flex-wrap gap-12 p-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="text-4xl transform -rotate-12">
            {['🎯', '💡', '🚀', '📊', '♟️', '👥'][i % 6]}
          </div>
        ))}
      </div>

      {/* Main Card Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden relative z-10 min-h-[550px]">

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Username Input */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                👤
              </span>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔒
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button className="bg-[#ff8a8a] hover:bg-[#ff7575] text-white font-semibold py-3 px-10 rounded-md transition-colors shadow-md">
              Login
            </button>
          </form>

          <div className="mt-10">
            <p className="text-sm text-gray-600">
              Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Create One</Link>
            </p>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center relative overflow-hidden">
          {/* Circular Background Shape */}
          <div className="absolute w-[450px] h-[450px] bg-blue-50 rounded-full -right-20 -bottom-20 opacity-50"></div>

          {/* Abstract Illustration Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-48 h-80 bg-[#60a5fa] rounded-2xl p-3 border-4 border-white shadow-xl flex flex-col">
                <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                  </div>
                  <div className="w-full h-12 bg-blue-100 rounded-md border-b-4 border-blue-400"></div>
                </div>
                <div className="w-6 h-6 bg-blue-800 bg-opacity-30 rounded-full self-center mt-2"></div>
              </div>

              {/* Character */}
              <div className="absolute -right-16 bottom-0 flex flex-col items-center">
                <div className="relative">
                  {/* Head */}
                  <div className="w-8 h-8 bg-[#ffdbac] rounded-full absolute top-0 left-4 z-20"></div>
                  <div className="w-10 h-10 bg-[#1e293b] rounded-full absolute -top-1 left-3 z-10"></div>
                  {/* Body */}
                  <div className="w-16 h-24 bg-[#4f46e5] rounded-t-3xl mt-6 relative z-10"></div>
                  {/* Legs */}
                  <div className="w-14 h-24 bg-[#1e3a8a] -mt-2 mx-auto rounded-b-xl"></div>
                  {/* Shoes */}
                  <div className="flex space-x-1 justify-center -mt-1">
                    <div className="w-6 h-3 bg-black rounded-full"></div>
                    <div className="w-6 h-3 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -right-24 bottom-4 w-40 h-48 bg-purple-400 opacity-40 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -right-10 bottom-10 w-32 h-40 bg-pink-400 opacity-40 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;