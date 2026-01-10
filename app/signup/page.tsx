
"use client"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      //const token = await res.user.getIdToken()

    //   await fetch("/api/session", {
    //     method: "POST",
    //     headers: { Authorization: `Bearer ${token}` },
    //   })

      router.push("/login")
      
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="w-full max-w-sm p-8 space-y-8 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create an account
          </h1>
          <p className="text-sm text-neutral-400">
            Enter your details below to get started
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-neutral-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              placeholder="name@example.com"
              className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all duration-200"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-neutral-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <input
              placeholder="••••••••"
              type="password"
              className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all duration-200"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            onClick={handleSignup} 
            className="w-full bg-white text-black hover:bg-neutral-200 font-semibold h-10 px-4 py-2 rounded-md transition-colors duration-200 mt-6"
          >
            Create Account
          </button>
        </div>

        {/* Footer / Login Link */}
        <div className="text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <button 
            onClick={() => router.push('/login')} 
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Log in
          </button>
        </div>

      </div>
    </div>
  )
}