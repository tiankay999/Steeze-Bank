"use client"
import React, { useState } from 'react';
import SuccessAlert from '../components/successAlert';


export default function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = useState("")
  const [uid, setUid] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")


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


  return (

      

   <>
      {successMsg && (
        <SuccessAlert
          message={successMsg}
          onClose={() => setSuccessMsg(``)}
        />
      )}








    <div className="container max-w-full mx-auto py-24 px-6 ">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative border-3 rounded-3xl m-5 p-7 shadow-lg mt-0 "   >  <div className="mt-6">
              <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700 ">

              </div>
              <div className="text-center font-semibold  text-4xl font-sans">
                Withdraw Amount
              </div>
              {
                error && (<p className='text-red-200'>{error}</p>)

              }
              <form
                onSubmit={HandWithdrawal}
                className="mt-8">
                <div className="mx-auto max-w-lg">
                  <div className="py-2">
                  
                  
                  </div>
                  <div className="py-2" x-data="{ show: true }">
                    <span className="px-1 text-sm text-gray-600">Enter Amount</span>
                    <div className="relative">

                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder="₵" type="text" className="text-md block px-3 py-2 rounded-lg w-full 
                bg-black border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-black 
                focus:border-gray-600" />
                      <div className="py-2" x-data="{ show: true }">
                        
                        <div className="relative"></div> </div>

                     
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                       

                        <svg className={`h-6 text-gray-700 ${!show ? 'block' : 'hidden'}`} fill="none" onClick={() => setShow(!show)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512">
                          <path fill="currentColor"
                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                          </path>
                        </svg>

                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type='submit'
                      className="mt-3  font-semibold 
                    bg-gray-800 w-full text-white rounded-lg px-37 py-3 block shadow-xl hover:text-white hover:bg- hover-text-black pl-25">
                      {loading ? "Withdawing.." : "Withdraw"}
                    </button>
                  </div>
                </div>
              </form>



            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
       