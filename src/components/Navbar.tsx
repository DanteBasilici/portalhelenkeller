"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  {
    label: "Institucional",
    href: "/#",
    hasDropdown: true,
    subLinks: [
      { label: "Nuestra Historia", href: "/historia" },
      { label: "Instalaciones", href: "/#instalaciones" },
      { label: "Equipo Docente", href: "/equipo" },
    ],
  },
  {
    label: "Especialidades",
    href: "/#especialidades",
    hasDropdown: true,
    subLinks: [
      { label: "Atención Temprana", href: "/especialidades/atencion-temprana" },
      { label: "Nivel Inicial", href: "/especialidades/nivel-inicial" },
      { label: "Nivel Primario", href: "/especialidades/nivel-primario" },
      { label: "Apoyo a Inclusión", href: "/especialidades/apoyo-inclusion" },
      { label: "Tiflotecnología", href: "/especialidades/tiflotecnologia" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Recursos", href: "/#recursos" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-10 transition-all duration-500 ${
          scrolled
            ? "h-[80px] sm:h-[90px] border-transparent"
            : "h-[100px] sm:h-[120px] border-b-[2px] border-white/40"
        }`}
      >
        {/* Logo y Menú Desktop */}
        <div className="flex items-center gap-6 lg:gap-10">
          <Link
            href="/"
            className={`flex-shrink-0 transition-all duration-500 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
            aria-label="Ir a inicio"
          >
            <div
              className={`transition-all duration-500 ${
                scrolled ? "w-[55px] sm:w-[65px]" : "w-[65px] sm:w-[75px]"
              }`}
            >
              <Image
                src="/logo-escuela.png"
                alt="Logo Escuela Helen Keller"
                width={75}
                height={75}
                priority
                className="object-contain drop-shadow-lg w-full h-auto"
              />
            </div>
          </Link>

          {/* Menú escritorio */}
          <ul className="hidden items-center gap-4 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 py-8 text-[14px] xl:text-[16px] font-bold tracking-wide transition-colors ${
                    scrolled
                      ? "text-[#1a1a1a] hover:text-[#009ADE]"
                      : "text-white hover:text-gray-200 drop-shadow-md"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown desktop */}
                {link.hasDropdown && (
                  <div className="absolute left-0 top-[85px] w-64 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl rounded-b-xl border-t-[3px] border-[#E32726] overflow-hidden z-[60]">
                    <ul className="flex flex-col py-2">
                      {link.subLinks?.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-6 py-3 text-[15px] text-gray-700 font-semibold hover:bg-blue-50 hover:text-[#009ADE] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón Ubicación (escritorio) */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/#contacto"
            aria-label="Ver ubicación"
            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
              scrolled
                ? "text-[#1a1a1a] hover:bg-gray-100 hover:text-[#E32726]"
                : "text-white hover:bg-white/20 drop-shadow-md"
            }`}
          >
            <MapPin className="h-6 w-6" strokeWidth={2} />
          </Link>
        </div>

        {/* ──────────────────────────────────── */}
        {/* BOTÓN HAMBURGUESA - AHORA CON COLORES */}
        {/* ──────────────────────────────────── */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {/* Fondo animado del botón */}
          <span
            className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              mobileOpen
                ? "bg-[#E32726]" // Rojo cuando está abierto (como botón de cerrar)
                : scrolled
                ? "bg-gradient-to-br from-[#009ADE] to-[#1C69D4]" // Azul gradiente cuando hay scroll
                : "bg-white/20 backdrop-blur-sm" // Semi-transparente sobre video
            }`}
          />

          {/* Circulo decorativo que pulsa */}
          {!mobileOpen && (
            <span className="absolute inset-0 rounded-xl bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          )}

          {/* Icono */}
          <span className="relative z-10">
            {mobileOpen ? (
              <X className="h-6 w-6 text-white transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu
                className={`h-6 w-6 transition-all duration-300 ${
                  scrolled ? "text-[#1a1a1a]" : "text-white"
                }`}
              />
            )}
          </span>
        </button>
      </nav>

      {/* ──────────────────────────────────── */}
      {/* MENÚ MOBILE - REDISEÑADO CON COLORES */}
      {/* ──────────────────────────────────── */}
      <div
        className={`fixed inset-x-0 lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen
            ? "max-h-[85vh] opacity-100 translate-y-0 overflow-y-auto"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
        style={{
          top: scrolled ? "80px" : "100px",
        }}
      >
        {/* Fondo con gradiente institucional */}
        <div className="bg-gradient-to-b from-white via-blue-50 to-white shadow-2xl border-t-4 border-[#FFD700]">
          
          {/* Barrita decorativa superior con los 3 colores */}
          <div className="flex h-1.5">
            <div className="flex-1 bg-[#009ADE]" />
            <div className="flex-1 bg-[#FFD700]" />
            <div className="flex-1 bg-[#E32726]" />
          </div>

          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <div
                  className={`flex items-center justify-between rounded-xl transition-all duration-300 ${
                    openDropdown === link.label
                      ? "bg-[#009ADE]/10 border-l-4 border-[#009ADE]"
                      : "hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  <Link
                    href={link.href}
                    className="block flex-1 py-4 px-4 text-[16px] font-bold text-[#1a1a1a] hover:text-[#009ADE] transition-colors"
                    onClick={() => !link.hasDropdown && setMobileOpen(false)}
                  >
                    {/* Numerito decorativo */}
                    <span className="inline-block w-6 h-6 mr-2 rounded-full bg-gradient-to-br from-[#009ADE] to-[#1C69D4] text-white text-xs font-bold text-center leading-6">
                      {index + 1}
                    </span>
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`p-3 mr-2 rounded-lg transition-all duration-300 ${
                        openDropdown === link.label
                          ? "bg-[#009ADE] text-white rotate-180"
                          : "text-gray-500 hover:bg-[#009ADE]/10 hover:text-[#009ADE]"
                      }`}
                      aria-label={
                        openDropdown === link.label
                          ? `Cerrar submenú de ${link.label}`
                          : `Abrir submenú de ${link.label}`
                      }
                    >
                      <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                    </button>
                  )}
                </div>

                {/* Submenú mobile con colores */}
                {link.hasDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ml-4 ${
                      openDropdown === link.label
                        ? "max-h-96 opacity-100 mt-1 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-1 bg-gradient-to-r from-[#009ADE]/5 to-transparent rounded-xl p-2 border-l-2 border-[#FFD700]">
                      {link.subLinks?.map((sub, subIndex) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block py-3 px-4 text-[15px] font-semibold text-gray-700 hover:text-[#009ADE] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                            onClick={() => setMobileOpen(false)}
                          >
                            {/* Iconito de flecha con color */}
                            <span
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                subIndex % 3 === 0
                                  ? "bg-[#009ADE]"
                                  : subIndex % 3 === 1
                                  ? "bg-[#FFD700]"
                                  : "bg-[#E32726]"
                              }`}
                            />
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Footer del menú mobile */}
          <div className="px-4 py-4 bg-gradient-to-r from-[#009ADE] via-[#1C69D4] to-[#009ADE]">
            <Link
              href="/#contacto"
              className="flex items-center justify-center gap-3 py-3 text-[16px] font-bold text-white hover:scale-105 transition-transform"
              onClick={() => setMobileOpen(false)}
            >
              <MapPin className="h-5 w-5" />
              <span>Ver Ubicación</span>
              <span className="text-[#FFD700] text-xl">📍</span>
            </Link>
          </div>

          {/* Decoración inferior con puntitos de colores */}
          <div className="flex justify-center gap-2 py-3 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-[#009ADE]" />
            <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <span className="w-2 h-2 rounded-full bg-[#E32726]" />
          </div>
        </div>
      </div>
    </header>
  );
}