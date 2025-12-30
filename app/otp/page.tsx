"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React, { FormEvent } from "react";

export default function FetchOTP() {
    //form functionality//

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [load, setLoading] = useState(false)

    const handleOTPSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        setLoading(true)


        try {
            const res = await fetch("http://localhost:5005/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                
                },
                body: JSON.stringify({ email })
            }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || " OTP not sent, Try Again")
            }

     

            router.push("/verify-otp")


        } catch (error) {
            const msg =
                error instanceof Error ? error.message : "Something went wrong try Again";
            setError(msg)

        } finally {
            setLoading(false)
        }

    }


    //page//
    return (



        <div
            className="bg-[url('/steeze.png')] min-h-screen max-w-screen flex items-center justify-center bg-cover bg-center">

            <div className="w-170 max-w-md mx-auto shadow-2xl rounded-lg overflow-hidden bg- backdrop-blur-sm bg-opacity-90">

                <div className="p-8 space-y-6 text-white">
                    <h2 className="text-2xl font-bold text-center mb-6 ">Verify OTP Code </h2>

                    <form className="space-y-6"

                        onSubmit={handleOTPSubmit}
                    >
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div>
                            <label htmlFor="email" className="font-semibold font-medium block mb-2 text-white">Enter your Email </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                name="text"
                                id="text"
                                placeholder="@email.com"
                                className="w-full p-3 rounded-md border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-150 ease-in-out"
                                required
                            />
                        </div>

                        <button
                            disabled={load}
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            {load ? "Sending OTP ..." : "Send OTP Code "}
                        </button>
                    </form>


                </div>
            </div>

        </div>

    );
}