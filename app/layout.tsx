// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";



export const metadata: Metadata = {
  title: "Tian Kay Bank App",
  description:
    "Best and most flexible bank in the cut, giving loan and high interests when you bank…",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white antialiased">
        {/* put navbar INSIDE body */}
     
        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      
       
      </body>
    </html>
  );
}
