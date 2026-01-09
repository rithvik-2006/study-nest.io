// "use client"

// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "@/lib/firebase"
// import { useRouter } from "next/navigation"
// import { useState } from "react"

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()

//   const handleLogin = async () => {
//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password)
//       const token = await res.user.getIdToken()

//       await fetch("/api/session", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//       })

//       router.push("/dashboard")
//     } catch (err: any) {
//       alert(err.message)
//     }
//   }

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="space-y-4 w-80">
//         <h1 className="text-xl font-bold">Login</h1>
//         <input
//           placeholder="Email"
//           className="border p-2 w-full"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           placeholder="Password"
//           type="password"
//           className="border p-2 w-full"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin} className="bg-black text-white p-2 w-full">
//           Login
//         </button>
//       </div>
//     </div>
//   )
// }

"use client"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const token = await res.user.getIdToken()

      await fetch("/api/session", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      })

      router.push("/dashboard")
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Background Decorative Gradients (flipped positions for variety) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-900/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-900/30 rounded-full blur-[128px]" />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl p-8">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-zinc-400 text-sm">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider ml-1">
              Email
            </label>
            <input
              placeholder="name@example.com"
              className="w-full bg-zinc-900/50 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider ml-1">
              Password
            </label>
            <input
              placeholder="••••••••"
              type="password"
              className="w-full bg-zinc-900/50 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mt-4"
          >
            Sign In
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            Don't have an account?{" "}
            <span 
              onClick={() => router.push("/signup")} 
              className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium transition-colors"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}