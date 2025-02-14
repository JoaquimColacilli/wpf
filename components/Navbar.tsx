"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "navbar-fixed" : "navbar-transparent"
      } z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-[#39FF14]" />
            <span className="text-2xl font-bold neon-text-green">
              WILLPOWER FIT
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/about">Quiénes Somos</NavLink>
            <NavLink href="/#exercises">Ejercicios</NavLink>
            <NavLink href="/#findus">Encontranos</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#39FF14] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                Quiénes Somos
              </MobileNavLink>
              <MobileNavLink
                href="/exercises"
                onClick={() => setIsMenuOpen(false)}
              >
                Ejercicios
              </MobileNavLink>
              <MobileNavLink
                href="/#findus"
                onClick={() => setIsMenuOpen(false)}
              >
                Encontranos
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#39FF14] transition-colors duration-300 text-lg font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-white hover:text-[#39FF14] transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
