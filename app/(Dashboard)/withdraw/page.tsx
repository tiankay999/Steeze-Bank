"use client"
import React, { useEffect, useState } from 'react';
import SuccessAlert from '../../components/successAlert';
import { RefreshCcw } from 'lucide-react';


export default function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = useState("")
  const [uid, setUid] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [balance, setBalance] = useState(0);

  const HandWithdrawal = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setError("")
    setLoading(false)

    try {
      const res = await fetch("http://localhost:5005/withdrawal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ uid, amount, email })
      }
      )

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message)
      }


      setSuccessMsg(`You have Withdraw ${amount}`)




    } catch (error) {
      const msg =
        error instanceof Error ? error.message : " Withdrawal Failed try again"
      setError(msg)
    }
    finally {
      setLoading(false)
    }



  }
  
   useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch("http://localhost:5005/check-balance", {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || `HTTP ${res.status}`);
        }
  
        const data = await res.json();
        // data.balance should be a number now
        setBalance(Number(data.balance));
      } catch (e:any) {
        console.error(e);
        setError(e.message || "Failed to fetch balance");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBalance();
  }, []);

return (
    <>
      <SuccessAlert
        message={successMsg}
        onClose={() => setSuccessMsg('')}
      />

      {/* Dark background for the overall page */}
      <div className="min-h-screen bg-black flex items-center justify-center p-4 font-sans antialiased">
        
        {/* The main card - Darker gray for contrast */}
        <div className="w-full max-w-lg bg-gray-800 shadow-2xl rounded-xl p-8 space-y-8 border border-gray-700">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white border-b border-gray-700 pb-3">
              Funds Withdrawal
            </h1>
            <p className="mt-2 text-md text-gray-400">
              Withdraw funds from your primary checking account.
            </p>
          </div>

          {/* Account Summary/Balance Context - Highlighted gray area */}
          <div className="bg-gray-700 border border-gray-600 p-5 rounded-lg flex flex-col space-y-1">
            <span className="text-sm font-medium text-gray-300">Account: Primary Checking (***1234)</span>
            <div className='flex justify-between items-center'>
                <span className="text-xl font-bold text-gray-200">Available Balance</span>
                {/* Balance uses white text for high contrast */}
                <span className="text-2xl font-extrabold text-emerald-400">
                   ${balance}
                </span>
            </div>
          </div>

          {/* Error Display (Professional Styling - Dark background, maintained red highlight for error severity) */}
          {error && (
            <div className="bg-gray-800 border-l-4 border-red-500 text-gray-100 p-4 rounded-lg text-sm font-medium transition-all" role="alert">
              <p className="font-semibold mb-1 text-red-400">Transaction Alert:</p>
              <p>{error}</p>
            </div>
          )}

          {/* Withdrawal Form */}
          <form className="space-y-6" onSubmit={HandWithdrawal}>
            <div className="space-y-2">
              <label htmlFor="amount" className="block text-lg font-semibold text-gray-300">
                Withdrawal Amount
              </label>
              
              {/* Input Field with Fixed Currency Prefix - Black input area with white text */}
              <div className="relative">
                <span className="absolute left-0 inset-y-0 flex items-center pl-4 text-3xl font-bold text-gray-500">
                  $
                </span>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} 
                  className="block w-full pl-10 pr-4 py-4 border-2 border-gray-600 rounded-xl shadow-inner text-3xl font-extrabold bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-700 focus:border-white transition duration-200"
                />
              </div>
            </div>

            {/* Withdrawal Button - High contrast black button with white text */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-xl font-bold text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-white transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-[1.005] focus:ring-offset-gray-900"
              >
                {loading ? (
                  <span className="flex items-center">
                    <RefreshCcw className="animate-spin h-5 w-5 mr-3" />
                    Processing Withdrawal...
                  </span>
                ) : 'Confirm Withdrawal'}
              </button>
            </div>
          </form>

          {/* Footer/Disclaimer */}
          <p className="text-center text-xs text-gray-600 mt-6 pt-4 border-t border-gray-700">
            All withdrawals are subject to daily limits and may take 1-3 business days to clear, depending on the destination.
          </p>
        </div>
      </div>
    </>
  );
};
