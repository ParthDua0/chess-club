import React from "react";
import {
  ChessPawn,
  ChartLine,
  Puzzle,
  Calendar,
  ArrowUpRight,
  Lock,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function GuestDashboard() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F7] font-body min-h-screen">
      <Navbar />

      <main className="relative flex flex-col pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
        
        {/* Heading */}
        <header className="mb-12">
          <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-5">
            Observe. Learn. <span className="text-white/50">Join.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Welcome to the spectator lounge. Watch top university matches live,
            solve daily puzzles, or check upcoming events.
          </p>
        </header>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mb-20">

          {/* Leaderboard */}
          <NavLink to="/leaderboard" className="block h-full">
            <BentoCard
              title="Leaderboard"
              subtitle="VIEW TOURNAMENT BASED RANKINGS"
              accent="green"
              icon={<ChartLine />}
              bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAEOksLFAbsBjaqtJQkS9o86CObHa3qC4vHWB1rHiwljMeDUimip3j1dXof6FjtIcgeX0yN1ExIyAcRhHFYhltHov2bnI0dtcleTWEMrLngXQ-mmul4nacT52VfKPBT3UDIzZPOU3rjsCZhwNG2WnjY8tlfP8qAKWxnW586r5naL858E9Z9pCVmdo4dNegpofEu7pxjTQch0kV9yJ0c67pMX6IkRxoSvNzAwX96hlP49xIxgKHa4j1en-Kboq8nyzMFICTzm3BP0x5H"
            />
          </NavLink>

          {/* Daily Puzzle */}
          <NavLink
            to="https://lichess.org/training/daily"
            target="_blank"
            className="block h-full"
          >
            <BentoCard
              title="Daily Puzzle"
              subtitle="CHALLENGE YOUR MIND"
              badge="Lichess"
              icon={<Puzzle />}
              muted
              bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDOuvfeAimlKJyb0nA2mwv5JS5hHkO4voGNx5afkAom6gzDtorTPrJ0bidQ3iYZ1keIjx_TVzLrl9uFOXZEHipgOW_KLXBgPiW5KI9ppHWA14f9rByigfZ7cob9tKKpvnwC9q7m9TJwU1bYDLJulgdI1h8YqklE_bHvoZeWrauLNtMfx8vvwnFbCaXqzj3fc6acVHdHfepNy2lVna5wF4ZpErS2s6E7-xUkV2dAHG6wAcswlQ6qopYnMq5KmUqbrBIrv7jO-zck5vS6"
            />
          </NavLink>

          {/* Events */}
          <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-[2rem] bg-[#141414] p-8 border border-[#2A2A2A] hover:border-[#555] transition-shadow shadow-2xl shadow-black/50">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <ArrowUpRight className="text-white/50 group-hover:text-white transition" />
              </div>

              <div>
                <IconBubble icon={<Calendar />} />
                <h3 className="text-2xl sm:text-3xl font-display font-light mt-6 mb-3">
                  Next Meetup
                </h3>
                <p className="text-xl">TBA</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest">
                  @GBU-CHESS-CLUB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restricted Dock */}
        <section className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 bg-[#111] p-3 rounded-2xl sm:rounded-full border border-[#222]">
            <LockedButton icon={<ChessPawn />} label="Play Game" />
            <LockedButton icon={<MessageCircle />} label="Club Chat" />
          </div>

          <p className="text-[#444] text-[10px] font-bold tracking-[0.2em] uppercase mt-6 text-center">
            Restricted Access • Member Dashboard
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------- Components ---------- */

function IconBubble({ icon }) {
  return (
    <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/10 size-14 rounded-full flex items-center justify-center text-white transition group-hover:bg-white group-hover:text-black">
      {icon}
    </div>
  );
}

function BentoCard({
  title,
  subtitle,
  icon,
  bgImage,
  badge,
  muted,
  accent,
}) {
  return (
    <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-[2rem] bg-[#1C1C1C] p-8 border border-[#2A2A2A] hover:border-[#555] transition-shadow shadow-2xl shadow-black/50">
      
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity ${
          muted ? "opacity-20 grayscale invert" : "opacity-40"
        }`}
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full">
        <IconBubble icon={icon} />

        <h3 className="text-2xl sm:text-3xl font-display font-light mt-6 mb-2">
          {title}
        </h3>

        {badge ? (
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-black">
              {badge}
            </span>
            <span className="uppercase tracking-wide text-gray-300">
              {subtitle}
            </span>
          </div>
        ) : (
          <div
            className={`text-sm font-medium ${
              accent === "green" ? "text-green-400" : "text-gray-400"
            }`}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}

function LockedButton({ icon, label }) {
  return (
    <button
      disabled
      className="flex items-center justify-center gap-3 bg-[#1C1C1C] text-gray-500 px-6 py-4 rounded-full opacity-60 cursor-not-allowed w-full sm:w-auto"
    >
      {icon}
      <span className="font-bold text-sm uppercase tracking-wide">
        {label}
      </span>
      <Lock className="w-4 h-4 opacity-50" />
    </button>
  );
}
