import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChessPawn, ArrowRight } from 'lucide-react';

const Navbar = () => {
  // Define your navigation links here
  const navLinks = [
    { name: 'Home', path: '/guest' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-[#1C1C1C]">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-4">
          <div className="size-9 bg-white text-black rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <ChessPawn className="w-5 h-5" />
          </div>
          <span className="font-display font-medium text-lg tracking-tight hidden sm:block text-white">
            University Chess Club
          </span>
        </div>

        {/* 2. Middle Navigation Links (Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* 3. CTA Section */}
        <NavLink
          to="/login"
          className="bg-white text-black hover:bg-gray-200 transition-colors h-10 px-6 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <span>Login to Play</span>
          <ArrowRight className="w-4 h-4" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;