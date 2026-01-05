import React, { useState } from "react";
import {
  Trophy,
  Medal,
  MapPin,
  ChevronDown,
  ArrowDown,
} from "lucide-react";
import EventDrawer from "../modals/EventDrawer";
import aug2025 from "../assets/2025aug.jpeg";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Events() {
  const [openEvent, setOpenEvent] = useState(null);

  const events = [
    {
      id: "gbu-rapid-2025",
      type: "Rapid",
      title: "GBU Open Rapid 2025",
      date: "AUG 30",
      time: "10:00 IST",
      status: "COMPLETED",
      description:
        "A competitive rapid-format tournament held at GBU with strong participation from campus players.",
      winner: "Devansh",
      runner1: "Prarabdh",
      runner2: "Piyush",
      prize: "₹1900",
      location: "Indoor Stadium, GBU",
      image: aug2025,
      participants: 64,
    },
  ];

  return (
    <div className="relative min-h-screen text-white font-display bg-[#0A0A0A] overflow-hidden">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.035] rounded-full blur-[180px]" />
      </div>

      <Navbar />

      {/* MAIN */}
      <main className="px-6 md:px-12 lg:px-40 mt-20 py-16 flex flex-col items-center">
        <div className="w-full max-w-[1280px] flex flex-col gap-10">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                Club Events History
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mt-2">
                Explore the legacy of our strategic battles. From intense Blitz
                tournaments to nail-biting Rapid tournaments.
              </p>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              Archive Status: Active
            </span>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="h-9 px-4 rounded-full bg-white text-black text-sm font-semibold active:scale-95">
              All Events
            </button>

            <FilterButton label="2025 Season" />
            <FilterButton label="2026 Season" />
            <FilterButton label="Rapid" />
            <FilterButton label="Classical" />

            <div className="ml-auto hidden sm:flex items-center gap-2 text-white/60 text-sm">
              <ChevronDown className="w-4 h-4" />
              <span>Sort by Date</span>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => setOpenEvent(event)}
              />
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="flex justify-center py-12">
            <button className="flex items-center gap-2 text-white/60 hover:text-blue-400 text-sm font-mono uppercase tracking-widest">
              <ArrowDown className="w-4 h-4" />
              Load Previous Seasons
            </button>
          </div>
        </div>
      </main>

      <Footer/>

      {/* DRAWER */}
      <EventDrawer
        event={openEvent}
        onClose={() => setOpenEvent(null)}
      />
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function FilterButton({ label }) {
  return (
    <button className="h-9 px-4 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm font-medium active:scale-95">
      {label}
    </button>
  );
}

function EventCard({ event, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white/[0.03] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="h-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent z-10" />
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 z-20 px-2 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono uppercase">
          {event.type}
        </span>
      </div>

      <div className="p-6 pt-2 flex flex-col gap-5 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
            {event.title}
          </h3>
          <span className="text-xs font-mono text-white/50 pt-1">
            {event.date}
          </span>
        </div>

        <div className="flex flex-col gap-3 py-3 border-y border-white/10">
          <PodiumRow icon={<Trophy />} name={event.winner} label="Winner" />
          <PodiumRow icon={<Medal />} name={event.runner1} label="1st Runner-up" />
          <PodiumRow icon={<Medal />} name={event.runner2} label="2nd Runner-up" />
        </div>

        <div className="mt-auto flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/50">
              Prize Pool
            </span>
            <div className="font-mono text-lg font-bold text-blue-400">
              {event.prize}
            </div>
          </div>

          <div className="flex items-center gap-1 text-white/50">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumRow({ icon, name, label }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">{icon}</span>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className="text-xs text-white/50">{label}</span>
    </div>
  );
}
