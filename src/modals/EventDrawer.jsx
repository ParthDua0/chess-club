import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function EventDrawer({ event, onClose }) {
  const [visible, setVisible] = useState(false);

  // mount → animate in
  useEffect(() => {
    if (!event) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [event]);

  if (!event) return null;

  // animate out → unmount
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // must match duration
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-center">

      {/* BACKDROP */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          relative
          w-full
          max-w-[1200px]
          h-[80vh]
          bg-[#1C1C1C]
          rounded-b-3xl
          border-b border-white/10
          shadow-2xl
          overflow-hidden
          flex flex-col
          transform transition-all duration-300 ease-out
          ${visible
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-full opacity-0 scale-[0.97]"
          }
        `}
      >
        {/* HEADER */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">{event.title}</h2>
            <span className="text-xs uppercase tracking-widest text-white/50">
              {event.status}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center"
          >
            <X />
          </button>
        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-10">

          {/* META */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-white/[0.03] p-6 rounded-xl">
            <Meta label="Date" value={event.date} />
            <Meta label="Time" value={event.time} />
            <Meta label="Location" value={event.location} />
            <Meta label="Status" value={event.status} />
            <Meta label="Entry Fee" value={event.entryfee} />
          </div>

          {/* ABOUT */} {/* Participants */}
          <section>
            <h3 className="text-xl font-bold mb-3">About Event</h3>
            <p className="text-white/70 leading-relaxed">
              {event.description} <span className="font-bold mb-3"> Participants : </span> {event.participants}
            </p>
          </section>

          {/* PRIZES */}
          <section>
            <h3 className="text-xl font-bold mb-6">Final Prize Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Prize label="1st Place" value="₹950" color="text-yellow-400" />
              <Prize label="2nd Place" value="₹570" color="text-gray-300" />
              <Prize label="3rd Place" value="₹380" color="text-orange-500" />
            </div>
          </section>
        </div>

        {/* FADE BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1C1C1C] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* ---------- SMALL PARTS ---------- */

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="font-mono text-lg text-white">{value}</p>
    </div>
  );
}

function Prize({ label, value, color }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
      <p className={`text-sm uppercase font-bold ${color}`}>{label}</p>
      <p className="font-mono text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
