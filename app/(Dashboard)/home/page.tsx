"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // ← added

// app/page.tsx
export default function DashboardPage() {
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

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

  useEffect(() => {
    // Fetch transactions from the API
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:5005/transactions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data1 = await res.json();
        setTransactions(data1?.transactions ?? []);
      } catch (err: any) {
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    // Fetch transactions from the API
    const fetchUsername = async () => {
      try {
        const res = await fetch("http://localhost:5005/username", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data2 = await res.json();
        setUsername(data2?.username ?? []);
      } catch (err: any) {
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
  }, []);

  





  return (
    <main className="min-h-screen  bg-black text-white   space-y-6">
      {/* header */}

      <div className="text-2xl font-italic font-semibold"> You are Welcome to Steeze Bank,{username}</div>
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>

       

        <span className="text-xs text-neutral-400">Last updated: now</span>
      </header>

      {/* money summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-400">Balance</p>
          <p className="text-2xl font-semibold">${balance}</p>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-400">Amount Deposited</p>
          <p className="text-2xl font-semibold text-emerald-400">₵60</p>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-400">Amount Withdrawn</p>
          <p className="text-2xl font-semibold text-red-400">₵5000</p>
        </div>
      </section>

      {/* transactions */}
      <section className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-neutral-800">
          <h2 className="text-sm font-semibold">Transactions</h2>
        </div>

        {/* ====== THIS IS WHERE YOU MAP YOUR DATA ====== */}
        <div className="p-2 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-neutral-400">
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-neutral-200">
              {transactions.map((transaction: any) => (
                <tr key={transaction.id} className="border-t border-neutral-800">
                  <td className="px-3 py-2">{transaction.id}</td>
               <td className={`px-3 py-2 font-medium ${
  ({ deposit: "text-emerald-400", withdrawal: "text-red-400", transfer: "text-blue-400" }
   [String(transaction.type).toLowerCase()] || "text-stone-400")
}`}>
  {({ deposit: "Deposit", withdrawal: "Withdrawal", transfer: "Transfer" }
    [String(transaction.type).toLowerCase()] || "Unknown")}
</td>

                  <td className="px-3 py-2">₵{transaction.amount}</td>
                  <td className="px-3 py-2">{transaction.createdAt}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
