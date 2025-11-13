"use client"
import React, { use, useState } from 'react';

import SuccessAlert from '../../components/successAlert';

export default function Transfer() {
  const [receiveremail, setReceiveremail] = useState('')
  const [senderemail, setSenderemail] = useState('')
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState("")
    ;

  const MIN_MS = 800;

  const HandleTransfer = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const started = performance.now()

    try {
      const res = await fetch("http://localhost:5005/transfers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ receiveremail, senderemail, amount })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message)
      }

      setSuccessMsg(`You have Transferred ${amount}`)
    }

    catch (error) {
      const msg = error instanceof Error ? error.message : " Something Went Wrong somewhere "
      setError(msg)
    } finally {
      setLoading(false);
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
                  Transfer Amount
                </div>

                {error && (<p className='text-sm text-red-100'>{error}</p>)}



                <form
                  onSubmit={HandleTransfer}
                  className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">Enter  Your Email </span>
                      <input
                        value={receiveremail}
                        onChange={(e) => setReceiveremail(e.target.value)}
                        placeholder=" email"
                        type="email"
                        className="text-md block px-3 py-2 rounded-lg w-full 
                bg-black border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-black 
                focus:border-gray-600" />
                    </div>
                    <div className="py-2" x-data="{ show: true }">



                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">Enter Amount</span>
                        <div className="relative"></div> </div>

                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="₵" type="text" className="text-md block px-3 py-2 rounded-lg w-full 
                bg-black border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-black 
                focus:border-gray-600" />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">




                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type='submit'

                      className="mt-3  font-semibold 
                    bg-gray-800 w-full text-white rounded-lg px-37 py-3 block shadow-xl hover:text-white  hover-text-black pl-25">
                      {loading ? 'Processing...' : 'Transfer Amount'}
                    </button>
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
};