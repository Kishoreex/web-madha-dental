import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/mdch-logo.png";
import { motion } from "framer-motion";
export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5232/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.ok) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07101d] flex items-center justify-center">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#071329] via-[#081423] to-[#02060d]" />
{[...Array(18)].map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      repeat: Infinity,
      duration: 4 + i * 0.3,
    }}
    className="absolute rounded-full bg-cyan-300"
    style={{
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
))}
      {/* Left Glow */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -right-52 bottom-0 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[170px]" />

      {/* Top Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-blue-400/10 blur-[120px]" />

      {/* ================= Login Card ================= */}

    <motion.div
initial={{ opacity: 0, scale: 0.9, y: 40 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{
  duration: 0.8,
  ease: "easeOut",
}}
className="
relative
z-20
w-full
max-w-[520px]
rounded-[38px]
border
border-cyan-300/30
bg-[#0c1628]/90
backdrop-blur-3xl
px-14
py-12
shadow-[0_0_80px_rgba(0,150,255,.30)]
overflow-hidden
"
>

        {/* Neon Border */}
        <div className="absolute inset-0 rounded-[38px] border border-cyan-300/10 pointer-events-none" />

        {/* Card Top Glow */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

        {/* Card Bottom Glow */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        {/* ================= Logo ================= */}

        <div className="relative flex justify-center">

          {/* Outer Blue Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-cyan-500 blur-[120px] opacity-20" />

          {/* White Halo */}
          <div className="absolute w-36 h-36 rounded-full bg-white blur-[45px] opacity-100" />
<motion.div
animate={{
  scale: [1, 1.08, 1],
  opacity: [0.9, 1, 0.9],
}}
transition={{
  duration: 3,
  repeat: Infinity,
}}
className="
absolute
w-40
h-40
rounded-full
bg-white
blur-[40px]
"
/>
<motion.div
animate={{
  rotate: 360,
}}
transition={{
  repeat: Infinity,
  duration: 18,
  ease: "linear",
}}
className="
absolute
w-44
h-44
rounded-full
border
border-cyan-400/20
"
/>
          {/* Logo */}
          <img
            src={logo}
            alt="Madha Dental College"
            className="
            relative
            z-20
            w-36
            h-36
            object-contain
            drop-shadow-[0_0_40px_white]
          "
          />

        </div>

        {/* ================= Title ================= */}

        <h1
          className="
          mt-6
          text-center
          text-[58px]
          leading-none
          font-bold
          text-white
          
        "
        style={{
  fontFamily:"Cormorant Garamond"
}}

        >
          Madha Dental College
        </h1>

        <p
          className="
          mt-4
          text-center
          uppercase
          tracking-[6px]
          text-cyan-300
          text-sm
        "
        >
          Content Management System
        </p>

        {/* Divider */}

        <div className="flex items-center gap-5 mt-8">

          <div className="flex-1 h-px bg-blue-500/30" />

          <div className="w-14 h-[3px] rounded-full bg-cyan-300 shadow-[0_0_18px_#22d3ee]" />

          <div className="flex-1 h-px bg-blue-500/30" />

        </div>

        {/* ================= FORM ================= */}

        <form onSubmit={login} className="mt-10 space-y-7">

  {/* Username */}

  <div>

    <label className="block text-white mb-3 text-lg">
      Username
    </label>

    <div
      className="
      h-16
      rounded-2xl
      border
      border-cyan-500/25
      bg-[#101a2b]
      flex
      items-center
      px-6
      shadow-inner
      transition-all
      duration-300
      focus-within:border-cyan-300
      focus-within:shadow-[0_0_25px_rgba(34,211,238,.35)]
    "
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-cyan-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.236.804 5.879 2.137M15 9a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="MDCH"
        className="
        ml-5
        flex-1
        bg-transparent
        outline-none
        text-white
        text-xl
        placeholder:text-gray-500
      "
      />

    </div>

  </div>

  {/* Password */}

  <div>

    <label className="block text-white mb-3 text-lg">
      Password
    </label>

    <div
      className="
      h-16
      rounded-2xl
      border
      border-cyan-500/25
      bg-[#101a2b]
      flex
      items-center
      px-6
      shadow-inner
      transition-all
      duration-300
      focus-within:border-cyan-300
      focus-within:shadow-[0_0_25px_rgba(34,211,238,.35)]
    "
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-cyan-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v6a2 2 0 002 2zm3-10V9a3 3 0 016 0v2"
        />
      </svg>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••••"
        className="
        ml-5
        flex-1
        bg-transparent
        outline-none
        text-white
        text-xl
        placeholder:text-gray-500
      "
      />

      <button
        type="button"
        className="
        text-cyan-300
        hover:text-white
        transition
      "
      >
        👁
      </button>

    </div>

  </div>

  {/* Login Button */}

  <button
    type="submit"
    className="
    relative
    overflow-hidden
    w-full
    h-16
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-blue-500
    to-cyan-400
    text-white
    text-2xl
    font-bold
    shadow-[0_0_40px_rgba(59,130,246,.55)]
    hover:scale-[1.02]
    duration-300
  "
  >
   <motion.div
animate={{
  x: ["-120%", "150%"],
}}
transition={{
  duration: 2.5,
  repeat: Infinity,
}}
className="
absolute
top-0
left-0
h-full
w-20
rotate-12
bg-white/20
blur-md
"
/>
    <span className="relative z-20">
   
      Login →
    </span>

    <div
      className="
      absolute
      inset-0
      bg-white/10
      opacity-0
      hover:opacity-100
      transition
    "
    />

  </button>

  {/* Secure */}

  <div className="mt-8 flex items-center">

    <div className="flex-1 h-px bg-blue-400/20"></div>

    <div className="mx-5 text-cyan-300 text-sm tracking-wide">
      🔒 Secure Admin Access
    </div>

    <div className="flex-1 h-px bg-blue-400/20"></div>

  </div>

  <p className="text-center text-gray-400 text-sm mt-6">
    © 2026 Madha Dental College &amp; Hospital. All Rights Reserved.
  </p>

</form>
<div
className="
absolute
-left-24
right-0
-bottom-10
mx-auto
w-[140%]
h-20
bg-cyan-400/20
blur-[60px]
rounded-full
"
/>
     </motion.div>

    </div>
  );
}