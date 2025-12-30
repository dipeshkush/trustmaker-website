'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('associateLoggedIn', 'true');
        setSuccess('Login successful! Welcome back.');
        setLoading(false);
        setTimeout(() => window.location.href = '/', 1500);
      } else {
        setError('Please fill all fields');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 py-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/auth.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Associate Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80"
            required
          />

          {error && <p className="text-red-600 text-center font-medium bg-red-50 py-3 rounded-lg">{error}</p>}
          {success && <p className="text-green-600 text-center font-medium bg-green-50 py-3 rounded-lg">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition disabled:opacity-70 shadow-lg"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-700">
          New Associate?{' '}
          <Link href="/auth/signup" className="text-teal-600 font-bold hover:underline">
            Sign Up Here
          </Link>
        </p>
      </div>
    </div>
  );
}