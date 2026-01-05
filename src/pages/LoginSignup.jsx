import { useState } from "react";
import React from 'react'
import { ChessPawn } from "lucide-react";
import LoginPanel from "../modals/LoginPanel.jsx";
import SignupPanel from "../modals/SignupPanel.jsx";
import { NavLink } from "react-router-dom";

export default function LoginSignup({ onGuestClick }) {

    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden">
      {/* Background */}
      <div
  className="absolute inset-0 z-0 min-h-screen w-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUAg1jOWNlF6P7uyBFFU5er5QXtXjDMSCUFmy6CtjtFcA3YeQXUFRAcyVR6VYNTAPobgusvzJyZ6GgIW6RbSXTArYBloQUkX5uqIPbzBbmGXbBP4WAT-k3ssAReKQBLeMI_xqBNlT5VvsJ0sB8BgRyrjVLoWm3hDN7f85XvEtFO6KUP0v6WSyUbarg1v8VE8NHOQIN_b2jPNBCIzxlLwMneIucOjFTSVp_gAninvM6aoR8Un_BtoZuO6psMTelZYej8y1nOxaBMtR3')",
  }}
/>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        {/* Header */}
        <header className="flex w-full items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 text-white fade-in-up">
            <ChessPawn className="w-7 h-7 stroke-[1.2]" />
            <h2 className="text-lg font-bold tracking-tight uppercase">
              GBU Chess
            </h2>
          </div>

          <nav className="fade-in-up">
            <button 
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            onClick={() => setLoginOpen(true)}>
              Login
            </button>
          </nav>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="max-w-5xl flex flex-col items-center gap-8 md:gap-10">
            <h2 className="fade-in-up delay-100 text-white/90 text-xs md:text-sm font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase">
              Strategy. Competition. Community.
            </h2>

            <h1 className="fade-in-up delay-200 text-white text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-shadow">
              YOUR MOVE,
              <br className="hidden md:block" /> GBU.
            </h1>

            <div className="fade-in-up delay-300 flex flex-col items-center gap-6 mt-4">
              <button
                onClick={() => setSignupOpen(true)}
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 text-background-dark transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="text-base md:text-lg font-bold tracking-wide">
                  Join the Club
                </span>
              </button>

              <button
                onClick={onGuestClick}
                className="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300"
              >
                <NavLink to="/guest">Continue as Guest</NavLink>
              </button>
            </div>
          </div>
        </main>
      </div>
      <LoginPanel
  open={loginOpen}
  onClose={() => setLoginOpen(false)}
/>
<SignupPanel
  open={signupOpen}
  onClose={() => setSignupOpen(false)}
/>
    </div>
  );
}