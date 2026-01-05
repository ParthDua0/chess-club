import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-borderSoft bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg tracking-tight text-textPrimary mb-3 text-white">
              GBU Chess Club
            </h3>
            <p className="text-sm text-textSecondary text-gray-400 leading-relaxed max-w-sm">
              A competitive and collaborative chess community at Gautam Buddha
              University. Observe, learn, and compete at the highest level.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-textMuted text-gray-500 mb-4">
              Club
            </h4>
            <ul className="space-y-2 text-sm text-textSecondary text-gray-400">
              <li className="hover:text-textPrimary hover:text-white cursor-pointer transition-colors">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="hover:text-textPrimary hover:text-white cursor-pointer transition-colors">
                <NavLink to="/events">Events</NavLink>
              </li>
              <li className="hover:text-textPrimary hover:text-white cursor-pointer transition-colors">
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="hover:text-textPrimary hover:text-white cursor-pointer transition-colors">
                <NavLink to="/login">Join The Club</NavLink>
              </li>
            </ul>
          </div>

          {/* Access / Status */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-textMuted text-gray-500 mb-4">
              Access
            </h4>
            <div className="flex items-center gap-3 text-sm text-textSecondary text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
              Restricted Access — Guest Mode
            </div>
            <NavLink 
              to="/login"
              className="text-xs text-textMuted text-gray-500 mt-3 leading-relaxed block hover:text-gray-300 transition-colors"
            >
              Sign in with your credentials to unlock full features.
            </NavLink>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-borderSoft border-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-textMuted text-gray-600">
          <div className="flex flex-wrap gap-4">
            <span>© 2026 GBU Chess Club</span>
            <span className="hover:text-textSecondary hover:text-gray-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-textSecondary hover:text-gray-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>

          <div className="uppercase tracking-[0.25em] opacity-60">
            Member Dashboard
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;