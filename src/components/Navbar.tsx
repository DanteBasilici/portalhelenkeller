"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";

const navLinks =[
  { label: "Inicio", href: "/#inicio" },
  {
    label: "Institucional",
    href: "/#",
    hasDropdown: true,
    subLinks:[
      { label: "Nuestra Historia", href: "/historia" }, // ← Nueva página
      { label: "Instalaciones", href: "/#instalaciones" }, // ← Anchor a las fotos
      { label: "Equipo Docente", href: "/equipo" },
    ],
  },
  {
    label: "Especialidades",
    href: "/#especialidades",
    hasDropdown: true,
    subLinks:[
      { label: "Atención Temprana", href: "/especialidades/atencion-temprana" },
      { label: "Nivel Inicial", href: "/especialidades/nivel-inicial" },
      { label: "Nivel Primario", href: "/especialidades/nivel-primario" },
      { label: "Apoyo a Inclusión", href: "/especialidades/apoyo-inclusion" },
      { label: "Tiflotecnología", href: "/especialidades/tiflotecnologia" }, // ← Agregado
    ],
  },
  { label: "Noticias", href: "/noticias" }, // ← Nueva sección
  { label: "Recursos", href: "/#recursos" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const[mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) setOpenDropdown(null);
    else setOpenDropdown(label);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <nav className={`mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 lg:px-10 transition-all duration-500 ${scrolled ? "h-[90px] border-transparent" : "h-[120px] border-b-[2px] border-white/40"}`}>
        
        <div className="flex items-center gap-10">
          <Link href="/" className={`flex-shrink-0 transition-transform duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <Image src="/logo-escuela.png" alt="Logo" width={75} height={75} className="object-contain drop-shadow-lg" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label} className="group relative">
                <Link href={link.href} className={`flex items-center gap-1.5 py-8 text-[16px] font-bold tracking-wide transition-colors ${scrolled ? "text-[#1a1a1a] hover:text-[#009ADE]" : "text-white hover:text-gray-200 drop-shadow-md"}`}>
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 top-[85px] w-64 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl rounded-b-xl border-t-[3px] border-[#E32726] overflow-hidden">
                    <ul className="flex flex-col py-2">
                      {link.subLinks?.map((sub) => (
                        <li key={sub.label}>
                          <Link href={sub.href} className="block px-6 py-3 text-[15px] text-gray-700 font-semibold hover:bg-blue-50 hover:text-[#009ADE] transition-colors">
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

        <div className="hidden items-center lg:flex">
          <Link href="/#contacto" aria-label="Ver Ubicación" className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${scrolled ? "text-[#1a1a1a] hover:bg-gray-100 hover:text-[#E32726]" : "text-white hover:bg-white/20 drop-shadow-md"}`}>
            <MapPin className="h-6 w-6" strokeWidth={2} />
          </Link>
        </div>

        <button className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-[#1a1a1a]" : "text-white"}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      <div className={`overflow-hidden bg-white transition-all duration-500 lg:hidden shadow-2xl ${mobileOpen ? "max-h-[600px]" : "max-h-0"}`}>
        <ul className="px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between py-4">
                <Link href={link.href} className="text-[16px] font-bold text-[#1a1a1a] hover:text-[#009ADE]" onClick={() => !link.hasDropdown && setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <button onClick={() => toggleDropdown(link.label)} className="p-2 text-gray-500">
                    <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === link.label ? "rotate-180 text-[#009ADE]" : ""}`} />
                  </button>
                )}
              </div>
              {link.hasDropdown && (
                <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl ${openDropdown === link.label ? "max-h-80 mb-4" : "max-h-0"}`}>
                  <ul className="py-3 px-5 flex flex-col gap-4">
                    {link.subLinks?.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} className="text-[15px] font-semibold text-gray-600 hover:text-[#009ADE]" onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}