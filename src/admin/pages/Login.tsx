import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/mdch-logo.png";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

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
    <div className="relative min-h-screen overflow-hidden bg-[#07101d] flex items-center justify-center px-4">

      {/* ================= BACKGROUND ================= */}

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
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -right-52 bottom-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-400/10 blur-[120px]" />


      {/* ================= LOGIN CARD ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          relative
          z-20
          w-full
          max-w-[410px]
          rounded-[30px]
          border
          border-cyan-300/30
          bg-[#0c1628]/95
          backdrop-blur-3xl
          px-8
          py-7
          shadow-[0_0_70px_rgba(0,150,255,.28)]
          overflow-hidden
        "
      >

        {/* Neon Border */}
        <div className="absolute inset-0 rounded-[30px] border border-cyan-300/10 pointer-events-none" />

        {/* Top Glow */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

        {/* Bottom Glow */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />


        {/* ================= LOGO ================= */}

        <div className="relative flex justify-center h-[105px]">

          {/* Blue Glow */}
          <div className="
            absolute
            w-32
            h-32
            rounded-full
            bg-cyan-500
            blur-[90px]
            opacity-20
          " />

          {/* White Halo */}
          <div className="
            absolute
            w-28
            h-28
            rounded-full
            bg-white
            blur-[38px]
            opacity-80
          " />

          {/* Animated Halo */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              w-28
              h-28
              rounded-full
              bg-white
              blur-[35px]
            "
          />

          {/* Rotating Ring */}
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
              w-32
              h-32
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
              w-24
              h-24
              object-contain
              drop-shadow-[0_0_30px_white]
            "
          />

        </div>


        {/* ================= TITLE ================= */}

   <h1
  className="
    mt-2
    text-center
    text-[28px]
    leading-tight
    font-bold
    text-white
    truncate
  "
  style={{
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.04em",
  }}
>
  Madha Dental
  <br />
  College
</h1>


        {/* Subtitle */}

        <p
          className="
            mt-3
            text-center
            uppercase
            tracking-[4px]
            text-cyan-300
            text-[11px]
          "
        >
          Content Management System
        </p>


        {/* ================= DIVIDER ================= */}

        <div className="flex items-center gap-4 mt-5">

          <div className="flex-1 h-px bg-blue-500/30" />

          <div className="
            w-12
            h-[3px]
            rounded-full
            bg-cyan-300
            shadow-[0_0_18px_#22d3ee]
          " />

          <div className="flex-1 h-px bg-blue-500/30" />

        </div>


        {/* ================= FORM ================= */}

        <form
          onSubmit={login}
          className="mt-6 space-y-5"
        >

          {/* Username */}

          <div>

            <label className="block text-white mb-2 text-sm font-medium">
              Username
            </label>

            <div
              className="
                h-13
                min-h-[52px]
                rounded-xl
                border
                border-cyan-500/25
                bg-[#101a2b]
                flex
                items-center
                px-4
                shadow-inner
                transition-all
                duration-300
                focus-within:border-cyan-300
                focus-within:shadow-[0_0_20px_rgba(34,211,238,.30)]
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-300 flex-shrink-0"
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
  autoComplete="username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="MDCH"
  className="
    login-input
    ml-4
    flex-1
    bg-transparent
    outline-none
    text-white
    text-base
    placeholder:text-gray-500
  "
/>

            </div>

          </div>


          {/* Password */}

          <div>

            <label className="block text-white mb-2 text-sm font-medium">
              Password
            </label>

            <div
              className="
                min-h-[52px]
                rounded-xl
                border
                border-cyan-500/25
                bg-[#101a2b]
                flex
                items-center
                px-4
                shadow-inner
                transition-all
                duration-300
                focus-within:border-cyan-300
                focus-within:shadow-[0_0_20px_rgba(34,211,238,.30)]
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-300 flex-shrink-0"
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
  type={showPassword ? "text" : "password"}
  autoComplete="current-password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="••••••••••"
  className="
    login-input
    ml-4
    flex-1
    bg-transparent
    outline-none
    text-white
    text-base
    placeholder:text-gray-500
  "
/>

<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  aria-label={showPassword ? "Hide password" : "Show password"}
  className="
    ml-2
    flex
    items-center
    justify-center
    w-8
    h-8
    rounded-lg
    text-cyan-300
    hover:text-white
    hover:bg-cyan-400/10
    transition-all
    duration-200
  "
>
  {showPassword ? (
    /* Eye OFF */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.58 10.58a2 2 0 002.83 2.83"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.88 4.24A9.7 9.7 0 0112 4c5.5 0 9.5 6 9.5 6a16.5 16.5 0 01-3.02 3.42"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.61 6.61C4.1 8.23 2.5 10 2.5 10s3.5 6 9.5 6a9.8 9.8 0 003.06-.48"
      />
    </svg>
  ) : (
    /* Eye ON */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
      />
    </svg>
  )}
</button>

            </div>

          </div>

{/* ================= LOGIN BUTTON ================= */}

<button
  type="submit"
  className="
    group
    relative
    overflow-hidden
    w-full
    h-[50px]
    rounded-xl
    border
    border-cyan-300/50
    bg-gradient-to-r
    from-blue-600/80
    via-blue-500/80
    to-cyan-400/80
    text-white
    text-lg
    font-semibold
    shadow-[0_0_25px_rgba(34,211,238,.25)]
    hover:shadow-[0_0_35px_rgba(34,211,238,.50)]
    hover:border-cyan-200
    hover:scale-[1.015]
    transition-all
    duration-300
  "
>
  {/* Animated Light */}
  <motion.div
    animate={{
      x: ["-120%", "150%"],
    }}
    transition={{
      duration: 2.8,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      top-0
      left-0
      h-full
      w-16
      rotate-12
      bg-white/25
      blur-lg
    "
  />

  {/* Inner Shine */}
  <div
    className="
      absolute
      inset-[1px]
      rounded-[11px]
      bg-gradient-to-r
      from-blue-600/30
      via-cyan-400/20
      to-blue-500/30
      opacity-0
      group-hover:opacity-100
      transition-opacity
    "
  />

  <span className="relative z-20 flex items-center justify-center gap-2">
    Login
    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>
</button>


          {/* ================= SECURE ================= */}

          <div className="flex items-center pt-1">

            <div className="flex-1 h-px bg-blue-400/20" />

            <div className="
              mx-4
              text-cyan-300
              text-[11px]
              tracking-wide
            ">
              🔒 Secure Admin Access
            </div>

            <div className="flex-1 h-px bg-blue-400/20" />

          </div>


          {/* Footer */}

          <p className="
            text-center
            text-gray-500
            text-[10px]
            mt-2
          ">
            © 2026 Madha Dental College &amp; Hospital. All Rights Reserved.
          </p>

        </form>


        {/* Bottom Glow */}

        <div
          className="
            absolute
            -left-20
            right-0
            -bottom-8
            mx-auto
            w-[130%]
            h-16
            bg-cyan-400/15
            blur-[50px]
            rounded-full
          "
        />

      </motion.div>

    </div>
  );
}