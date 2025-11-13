"use client";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ICONS (same as yours)
const IconLayoutDashboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
);
const IconArrowDownToLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
);
const IconArrowUpToLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v14"/><path d="m18 13-6 6-6-6"/><path d="M5 21h14"/></svg>
);
const IconRepeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
);

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/home",       icon: IconLayoutDashboard },
  { name: "Deposit",   href: "/deposit",    icon: IconArrowDownToLine },
  { name: "Withdrawal",href: "/withdraw",   icon: IconArrowUpToLine },
  { name: "Transfers", href: "/transfers",  icon: IconRepeat },
];

export default function Sidebar() {
  const pathname = usePathname(); // gives you current route, e.g. "/home"

  const baseClasses =
    "flex items-center p-3 transition-all duration-200 rounded-lg group";
  const activeClasses =
    "bg-green-700/30 text-green-400 font-semibold shadow-inner";
  const inactiveClasses =
    "text-gray-400 hover:bg-gray-800 hover:text-white";

  const HandleLogout = async () => {
    const router = useRouter();
    try {
      await fetch("/api/auth/logout", { 
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          Authorization :"Bearer " + localStorage.getItem("token"),
        }
      });
      localStorage.removeItem("token");
      router.push("/login"); // Redirect to login page after logout
    }catch(err){
      console.error("Logout failed:", err);
    }
        















      }


  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen 
                 bg-black border-r border-gray-800 
                 md:shadow-2xl md:shadow-gray-900"
    >
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Logo */}
        <div className="p-4 border-b border-gray-800 mb-6">
          <h1 className="text-xl font-bold text-white tracking-wider">
            Tian Kay Bank
          </h1>
          <p className="text-xs text-green-400/70 mt-1">Secure Banking</p>
        </div>

        {/* Nav */}
        <nav className="flex-grow px-3 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const iconClasses = isActive
              ? "text-green-400"
              : "text-gray-500 group-hover:text-gray-300";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${baseClasses} ${
                  isActive ? activeClasses : inactiveClasses
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${iconClasses}`} />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 mt-6 border-t border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold text-sm mr-3">
              TK
            </div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
           <select  className="text-xs text-gray-500">Logged in</select>
              <button
                onClick={HandleLogout}
                className="text-xs text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
