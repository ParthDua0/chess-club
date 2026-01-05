import { X, Crown } from "lucide-react";
import { useEffect } from "react";

export default function SignupPanel({ open, onClose }) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // ESC close
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

      {/* Bottom Panel */}
      <aside
        className={`
          fixed bottom-0 left-0 z-50 w-full
          bg-black text-white
          transform transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Container */}
        <div className="mx-auto max-w-4xl px-8 py-10 relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/60 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 mb-4">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              REGISTRATION OPEN
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight">
              New Challenger
            </h2>
            <p className="text-white/60 mt-2">
              Enter the arena. Sign up with your university credentials.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 max-w-xl">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-white/20 py-3 pr-10 focus:outline-none focus:border-white"
              />
              <Crown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent border-b border-white/20 py-3 pr-10 focus:outline-none focus:border-white"
              />
              <Crown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            </div>

            <button className="mt-6 bg-white text-black px-10 py-3 font-bold tracking-wide">
              CHECKMATE
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
