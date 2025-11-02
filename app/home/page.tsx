import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";


// app/page.tsx
export default function DashboardPage() {
    
  // --- mock data you'd normally fetch from your DB/API ---
  const userName = "Steeze";
  const accounts = [
    { id: "checking", name: "Checking", number: "••• 4821", balance: 2450.32 },
    { id: "savings", name: "Savings", number: "••• 0917", balance: 8150.0 },
  ];

  const recent = [
    { id: 1, title: "Grocery Store", type: "debit", amount: -142.55, date: "Oct 23" },
    { id: 2, title: "Salary • Oct", type: "credit", amount: 2100.0, date: "Oct 22" },
    { id: 3, title: "Electric Bill", type: "debit", amount: -96.2, date: "Oct 21" },
    { id: 4, title: "Mobile Transfer", type: "debit", amount: -50, date: "Oct 20" },
    { id: 5, title: "Interest", type: "credit", amount: 12.4, date: "Oct 19" },
  ];

  const totalBalance = accounts.reduce((sum, a) => sum + a.balance, 0);
  const monthIn = recent.filter(r => r.type === "credit").reduce((s, r) => s + r.amount, 0);
  const monthOut = recent.filter(r => r.type === "debit").reduce((s, r) => s + Math.abs(r.amount), 0);

  return (
 
<div >
  
    <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        

      {/* Top Bar / Greeting */}
      <section className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, {userName} 👋</h1>
          <p className="text-sm text-neutral-400">
            Here’s a quick overview of your accounts and recent activity.
          </p>

        </div>
     
<div className="ml-125 space-10">
   < Link  href="/profile" >   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  
  />

</svg>
</Link>


</div>







        {/* Quick Actions */}
        <div className="flex gap-2">
          <a
            href="/transfers"
            className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
          >
            New Transfer
          </a>
          <a
            href="/deposit"
            className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
          >
            Deposit
          </a>
          <a
            href="/withdraw"
            className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
          >
            Withdraw
          </a>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Total Balance" value={formatMoney(totalBalance)} />
        <SummaryCard label="This Month In" value={formatMoney(monthIn)} />
        <SummaryCard label="This Month Out" value={formatMoney(monthOut)} />
      </section>

      {/* Accounts */}
      <section className="grid gap-4 md:grid-cols-2">
        {accounts.map((a) => (
          <div
            key={a.id}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-neutral-400">{a.name}</p>
                <p className="text-xl font-semibold mt-1">{formatMoney(a.balance)}</p>
              </div>
              <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
                {a.number}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href={`/transfers?from=${a.id}`}
                className="rounded-lg border border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Transfer
              </a>
              <a
                href={`/deposits?to=${a.id}`}
                className="rounded-lg border border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Deposit
              </a>
              <a
                href={`/withdrawals?from=${a.id}`}
                className="rounded-lg border border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Withdraw
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Recent Transactions */}
      <section className="rounded-2xl border border-neutral-800">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <a href="/transactions" className="text-sm text-neutral-400 hover:underline">
            View all
          </a>
        </div>
        <div className="divide-y divide-neutral-800">
          {recent.map((t) => (
            <div key={t.id} className="flex items-center justify-between px-5 py-3">
              <div className="min-w-0">
                <p className="truncate">{t.title}</p>
                <p className="text-xs text-neutral-500">{t.date}</p>
              </div>
              <span
                className={
                  "font-medium " +
                  (t.type === "credit" ? "text-emerald-400" : "text-red-400")
                }
                aria-label={t.type === "credit" ? "Money in" : "Money out"}
              >
                {t.type === "credit" ? "+" : "-"}
                {formatMoney(Math.abs(t.amount))}
              </span>
            </div>
          ))}
        </div>
      </section>
      
    </main>
   </div>
  );
}
  <Footer/>
/* ---------- tiny helpers & mini component ---------- */

function formatMoney(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>

  );
}

       
































