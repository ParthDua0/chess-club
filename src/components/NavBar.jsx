import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChessPawn, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/guest' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/guest" className="flex items-center gap-3">
          <div className="size-9 bg-white text-black rounded-lg flex items-center justify-center">
            <ChessPawn className="w-5 h-5" />
          </div>
          <span className="hidden sm:block text-white font-medium">
            University Chess Club
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="hidden sm:flex bg-white text-black h-9 px-5 rounded-full text-sm font-semibold items-center gap-2"
          >
            Login
            <ArrowRight className="w-4 h-4" />
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className="mt-2 bg-white text-black text-center py-2 rounded-full font-semibold"
            >
              Login to Play
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
