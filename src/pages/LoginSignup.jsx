import { useState } from "react";
import { ChessPawn } from "lucide-react";
import LoginPanel from "../modals/LoginPanel.jsx";
import SignupPanel from "../modals/SignupPanel.jsx";
import { NavLink } from "react-router-dom";

export default function LoginSignup({ onGuestClick }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] text-white font-display">
      
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUAg1jOWNlF6P7uyBFFU5er5QXtXjDMSCUFmy6CtjtFcA3YeQXUFRAcyVR6VYNTAPobgusvzJyZ6GgIW6RbSXTArYBloQUkX5uqIPbzBbmGXbBP4WAT-k3ssAReKQBLeMI_xqBNlT5VvsJ0sB8BgRyrjVLoWm3hDN7f85XvEtFO6KUP0v6WSyUbarg1v8VE8NHOQIN_b2jPNBCIzxlLwMneIucOjFTSVp_gAninvM6aoR8Un_BtoZuO6psMTelZYej8y1nOxaBMtR3')",
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        
        {/* Header */}
        <header className="flex w-full items-center justify-between px-4 sm:px-6 md:px-10 py-6">
          <div className="flex items-center gap-3">
            <ChessPawn className="w-6 h-6 stroke-[1.2]" />
            <h2 className="text-sm sm:text-base font-bold tracking-tight uppercase">
              GBU Chess
            </h2>
          </div>

          <button
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="max-w-5xl flex flex-col items-center gap-8">
            
            <h2 className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.35em] sm:tracking-[0.5em] uppercase">
              Strategy. Competition. Community.
            </h2>

            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
              YOUR MOVE,
              <br className="hidden sm:block" /> GBU.
            </h1>

            <div className="flex flex-col items-center gap-6 mt-4">
              <button
                onClick={() => setSignupOpen(true)}
                className="group relative flex items-center justify-center rounded-full bg-white px-8 sm:px-10 py-3 sm:py-4 text-black transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide">
                  Join the Club
                </span>
              </button>

              <NavLink
                to="/guest"
                onClick={onGuestClick}
                className="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition"
              >
                Continue as Guest
              </NavLink>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <LoginPanel open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupPanel open={signupOpen} onClose={() => setSignupOpen(false)} />
    </div>
  );
}
