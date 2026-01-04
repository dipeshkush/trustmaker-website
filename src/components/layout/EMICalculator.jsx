'use client';

import { useState } from 'react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenureYears * 12;

    if (R === 0) return Math.round(P / N);

    const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalInterest = Math.round(emi * tenureYears * 12 - loanAmount);
  const totalAmount = Math.round(emi * tenureYears * 12);

  const resetCalculator = () => {
    setLoanAmount(5000000);
    setInterestRate(8.5);
    setTenureYears(20);
  };

  return (
    <div className="bg-gray-800 rounded-3xl shadow-2xl p-6  max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
        <h3 className="text-xl text-white tracking-wide">
          Calculate EMI for This Project
        </h3>
        <div className="w-24 h-1 bg-[#9C2F5A] mx-auto mt-3 rounded-full" />
      </div>

      {/* Sliders */}
      <div className="space-y-4 mb-8">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between text-gray-300 mb-2">
            <span className="text-sm font-medium">Loan Amount</span>
            <span className="font-bold text-white">₹ {loanAmount.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="1000000"
            max="100000000"
            step="500000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#9C2F5A]"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between text-gray-300 mb-2">
            <span className="text-sm font-medium">Interest Rate (p.a.)</span>
            <span className="font-bold text-white">{interestRate}%</span>
          </div>
          <input
            type="range"
            min="6"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#9C2F5A]"
          />
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between text-gray-300 mb-2">
            <span className="text-sm font-medium">Tenure</span>
            <span className="font-bold text-white">{tenureYears} years</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#9C2F5A]"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
          <p className="text-gray-400 text-sm mb-1">Monthly EMI</p>
          <p className="text-2xl font-black text-white">₹ {emi.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
          <p className="text-gray-400 text-sm mb-1">Total Interest</p>
          <p className="text-xl font-bold text-gray-200">₹ {totalInterest.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
          <p className="text-gray-400 text-sm mb-1">Total Amount</p>
          <p className="text-xl font-bold text-[#9C2F5A]">₹ {totalAmount.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-5">
        <button className="flex-1 bg-[#9C2F5A] text-white py-2 rounded-2xl font-bold text-lg hover:bg-[#8a274f] transition shadow-lg">
          Apply for Loan
        </button>
        <button
          onClick={resetCalculator}
          className="flex-1 bg-white/10 text-white py-2 rounded-2xl font-bold text-lg hover:bg-white/20 transition border border-white/20"
        >
          Reset
        </button>
        
      </div>
      <p className="mt-6 text-xs text-gray-400 text-center">
        * EMI is indicative. Actual loan terms may vary based on bank policies.
      </p>
    </div>
  );
}