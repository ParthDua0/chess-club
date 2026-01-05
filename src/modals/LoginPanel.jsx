import { X } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPanel({ open, onClose }) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

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
          fixed top-0 right-0 z-50 h-screen w-full max-w-md
          bg-black text-white
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            GRANDMASTER<br />ACCESS
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 space-y-6">
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
            <NavLink to="/guest">OR PLAY AS GUEST</NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}
