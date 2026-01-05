import { X, Crown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SignupPanel({ open, onClose }) {
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

      {/* Bottom Sheet */}
      <aside
        className={`
          fixed bottom-0 left-0 z-50 w-full
          bg-black text-white
          transform transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Scroll container */}
        <div className="max-h-[100dvh] overflow-y-auto">
          
          {/* Content */}
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-10">
            
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 hover:text-white"
              aria-label="Close signup panel"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs px-3 py-1 rounded-full bg-white/10 mb-4">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                REGISTRATION OPEN
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                New Challenger
              </h2>
              <p className="text-white/60 mt-2 text-sm sm:text-base">
                Enter the arena. Sign up with your university credentials.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5 sm:space-y-6 max-w-xl">
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white"
              />

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-b border-white/20 py-3 pr-10 text-sm focus:outline-none focus:border-white"
                />
                <Crown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-transparent border-b border-white/20 py-3 pr-10 text-sm focus:outline-none focus:border-white"
                />
                <Crown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
              </div>

              <button className="mt-6 bg-white text-black px-8 sm:px-10 py-3 font-bold tracking-wide rounded-full">
                CHECKMATE
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
