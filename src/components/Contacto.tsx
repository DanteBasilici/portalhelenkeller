"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Navigation, Heart, ExternalLink } from "lucide-react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Contacto() {
  const { ref: contactRef, isInView: contactVisible } = useInView(0.1);
  const { ref: mapRef, isInView: mapVisible } = useInView(0.2);
  const { ref: footerRef, isInView: footerVisible } = useInView(0.1);

  return (
    <section id="contacto" className="bg-gray-50 relative pt-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 mb-20 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl p-6 lg:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Columna de contacto con animación */}
            <div 
              ref={contactRef}
              className={`flex flex-col justify-center py-6 transition-all duration-1000 ${
                contactVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#E32726] text-[12px] font-black tracking-[0.2em] uppercase mb-6 w-max">
                <Navigation className="w-4 h-4" />
                <span>Contacto</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-10 tracking-tight leading-[1.1]">
                Las puertas están <br className="hidden md:block"/>
                <span className="text-[#009ADE]">siempre abiertas.</span>
              </h3>
              
              <div className="space-y-8">
                {/* Teléfono */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#009ADE] group-hover:border-[#009ADE] transition-all duration-300">
                    <Phone className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 font-bold uppercase tracking-widest mb-1">Teléfono</p>
                    <a href="tel:02614223028" className="text-2xl font-black text-[#1a1a1a] group-hover:text-[#009ADE] transition-colors">0261 422-3028</a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#009ADE] group-hover:border-[#009ADE] transition-all duration-300">
                    <Mail className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 font-bold uppercase tracking-widest mb-1">Correo Electrónico</p>
                    <a href="mailto:dge2006@mendoza.edu.ar" className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#009ADE] transition-colors break-all">dge2006@mendoza.edu.ar</a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:border-transparent transition-all duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 font-bold uppercase tracking-widest mb-1">Instagram</p>
                    <a href="https://www.instagram.com/escuelahelenkeller/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#1a1a1a] group-hover:text-pink-500 transition-colors">
                      @escuelahelenkeller
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-[13px] text-gray-500 font-bold uppercase tracking-widest mb-1">Ubicación</p>
                    <p className="text-xl font-bold text-[#1a1a1a]">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa con animación */}
            <div 
              ref={mapRef}
              className={`relative h-[400px] lg:h-auto min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-gray-100 transition-all duration-1000 delay-200 ${
                mapVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <iframe 
                src="https://maps.google.com/maps?q=Escuela%20Helen%20Keller%20Mendoza&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.2] contrast-[1.1]"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
                <div className="bg-[#E32726] p-3 rounded-xl animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Esc. Helen Keller</p>
                  <p className="text-sm font-medium text-gray-500">¿Cómo llegar?</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER con animación */}
      <footer 
        ref={footerRef}
        className={`relative bg-[#050505] text-white pt-24 pb-11 px-6 overflow-hidden transition-all duration-1000 ${
          footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Efectos de luz */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#009ADE] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E32726] opacity-[0.04] blur-[130px] rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        
        {/* Línea superior con gradiente */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#009ADE]/30 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Contenido principal del footer */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/5">
            
            {/* Columna 1: Logo e info */}
            <div className="text-center lg:text-left">
              <Image 
                src="/logo-escuela.png" 
                alt="Logo Escuela Helen Keller" 
                width={80}
                height={80}
                className="w-20 mb-6 brightness-0 invert opacity-90 drop-shadow-lg mx-auto lg:mx-0" 
              />
              <h3 className="text-xl font-black mb-3 tracking-tight">Escuela Nro. 2-006</h3>
              <p className="text-[#009ADE] font-black text-sm uppercase tracking-wider mb-4">Helen Keller</p>
              <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs mx-auto lg:mx-0">
                Educación especial, innovación y compromiso en Mendoza desde hace más de 25 años.
              </p>
            </div>
            
            {/* Columna 2: Links rápidos */}
            <div className="text-center lg:text-left">
              <h4 className="text-sm font-black uppercase tracking-wider text-white/40 mb-6">Navegación</h4>
              <div className="space-y-3">
                {[
                  { label: "Instalaciones", href: "#instalaciones" },
                  { label: "Especialidades", href: "#especialidades" },
                  { label: "Recursos Digitales", href: "#recursos" },
                  { label: "Nuestra Historia", href: "#historia" },
                  { label: "Equipo", href: "#equipo" },
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.href}
                    className="block text-gray-500 hover:text-white font-medium text-sm transition-colors hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Columna 3: Portfolio */}
            <div className="text-center lg:text-left">
              <h4 className="text-sm font-black uppercase tracking-wider text-white/40 mb-6">Desarrollador</h4>
              
              <a 
                href="https://dantebasilici.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-[#0a0a0a] border border-white/5 hover:border-[#009ADE]/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,154,222,0.3)]"
              >
                {/* Imagen del portfolio */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image 
                    src="/portfolio-preview.jpg" 
                    alt="Portfolio Dante Basilici" 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Badge sobre la imagen */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/80">Portfolio</span>
                  </div>
                </div>
                
                {/* Info del dev */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                        Diseño y Código por
                      </p>
                      <p className="text-lg font-black bg-linear-to-r from-[#009ADE] to-cyan-300 bg-clip-text text-transparent">
                        Dante Basilici Zalazar
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#009ADE]/20 transition-all group-hover:scale-110">
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Barra inferior */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
              <Heart className="w-3.5 h-3.5 text-red fill-red" />
            </div>
            
            <p className="text-gray-600 text-xs font-medium">
              Hecho con pasión por la educación inclusiva
            </p>
          </div>
          
        </div>
      </footer>
    </section>
  );
}