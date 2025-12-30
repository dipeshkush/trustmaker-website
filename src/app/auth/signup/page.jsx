'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      localStorage.setItem('associateLoggedIn', 'true');
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => window.location.href = '/', 1500);
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

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Join as Associate
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80 transition"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80 transition"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-white/80 transition"
            required
          />

          {error && <p className="text-red-600 text-center font-medium bg-red-50 py-3 rounded-lg">{error}</p>}
          {success && <p className="text-green-600 text-center font-medium bg-green-50 py-3 rounded-lg">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition disabled:opacity-70 shadow-lg"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-700">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-teal-600 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}