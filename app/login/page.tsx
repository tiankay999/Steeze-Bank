"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React, { FormEvent } from "react";

export default function Login() {
  //form functionality//
    
  const router = useRouter();

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
  const[load,setLoading]=useState(false)

  const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError("")
    setLoading(true)


    try{
   const res =  await fetch ("http://localhost:5005/login",{
    method:"POST",
    headers:{
    "Content-Type":"application/json"
    },
    body: JSON.stringify({email,password})
   }
   );

  const  data =  await res.json();

   if (!res.ok){
    throw new Error (data.message ||" Login Failed Try Again")

   }
 
localStorage.setItem("token",data.token)


router.push("/home")


    }catch(error){
        const msg=
        error instanceof Error ? error.message : "Something went wrong try Again";
        setError(msg)

    }finally{
        setLoading(false)
    }

  }


//page//
    return (
        <div>
            <div className="relative min-h-screen  grid bg-black ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                    <div
                        className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
                        style={{ backgroundImage: "url('https://i.postimg.cc/2SnsYPyC/Chat-GPT-Image-Oct-22-2025-10-34-21-PM.png')" }}
                    >
                        <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
                        <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                            <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
                        </div>
                    </div>

                    <div
                    
                     className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                        <div className="max-w-xl w-full space-y-12">
                            <div className="lg:text-left text-center">
                                <div className="flex items-center justify-center ">
                                    <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                        <form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col space-y-8 mt-10" >
                                            <label className="font-bold text-lg text-white ">Enter Email</label>
                                            <input
                                            required
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                                type="email"
                                                placeholder="   Email"
                                                className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                                            />
                                          <label className="font-bold text-lg text-white">Enter Password </label>
                                            <input
                                              required
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                                type="password"
                                                placeholder="****"
                                                className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
                                            />
                                             {error && (<p className="text-red-200 text-sm border-red-500/30 rounded p-2"> {error}</p>)}


                                               <button type="submit" 
                                           
                                               className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
                                             {  load ? "logging In...":"Login " }
                                         </button>
                                            <a href="" ><div className="text-blue-400">forgot password? Reset password</div></a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}