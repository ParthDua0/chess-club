import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-gradient-to-b from-[#0B0B0B] to-[#0A0A0A]">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
    
    <div className="grid gap-10 md:grid-cols-3">
      
      {/* Brand */}
      <div className="max-w-sm">
        <h3 className="text-white text-lg font-medium mb-3">
          GBU Chess Club
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Competitive and collaborative chess community at Gautam Buddha University.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          Club
        </h4>
        <ul className="space-y-2 text-sm text-gray-400">
          {['About', 'Events', 'Leaderboard', 'Join'].map(item => (
            <li key={item} className="hover:text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Access */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          Access
        </h4>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          Guest Mode Enabled
        </p>
      </div>
    </div>

    <div className="border-t border-white/10 my-8" />

    <div className="flex flex-col sm:flex-row gap-4 justify-between text-[11px] text-gray-500">
      <span>© 2026 GBU Chess Club</span>
      <span className="uppercase tracking-widest opacity-60">
        Member Dashboard
      </span>
    </div>

  </div>
</footer>

  );
};

export default Footer;