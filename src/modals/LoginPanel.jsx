import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPanel({ open, onClose }) {
  const previousOverflow = useRef("");

  // Lock body scroll safely
  useEffect(() => {
    if (!open) return;

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow.current || "auto";
    };
  }, [open]);

  // ESC to close (only when open)
  useEffect(() => {
    if (!open) return;

    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Panel */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-full max-w-md
          bg-black text-white
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Scroll container */}
        <div className="flex h-full flex-col overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              GRANDMASTER<br />ACCESS
            </h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
              aria-label="Close login panel"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-6 py-6 space-y-6">
            <p className="text-sm text-white/60">
              Enter your credentials to resume the game.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="University ID / Email"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white"
              />
            </div>

            <button className="mt-6 w-full bg-white text-black py-3 font-bold tracking-wide">
              CHECKMATE
            </button>

            <div className="pt-4 text-center text-xs text-white/40">
              <NavLink to="/guest" onClick={onClose}>
                OR PLAY AS GUEST
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
