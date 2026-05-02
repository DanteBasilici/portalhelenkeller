"use client"

import { Baby, Puzzle, BookOpen, Users, Laptop, ArrowRight, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

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

export default function Especialidades() {

  const { ref: headerRef, isInView: headerVisible } = useInView(0.3);
  const { ref: gridRef, isInView: gridVisible } = useInView(0.1);
  const { ref: footerRef, isInView: footerVisible } = useInView(0.5);

  const niveles = [
    { 
      id: "atencion-temprana", 
      icon: Baby, 
      title: "Atención Temprana", 
      desc: "Estimulación oportuna para potenciar el desarrollo desde los primeros años.",
      tag: "0-3 años",
      colorClass: "group-hover:text-[#009ADE]", 
      bgClass: "group-hover:bg-[#009ADE]/20", 
      borderClass: "group-hover:border-[#009ADE]/50",
      glowColor: "bg-[#009ADE]",
      gradientText: "from-[#009ADE] to-cyan-300"
    }, 
    { 
      id: "nivel-inicial", 
      icon: Puzzle, 
      title: "Nivel Inicial", 
      desc: "Un espacio de juego, exploración y primeros aprendizajes adaptados.",
      tag: "3-5 años",
      colorClass: "group-hover:text-[#E32726]", 
      bgClass: "group-hover:bg-[#E32726]/20", 
      borderClass: "group-hover:border-[#E32726]/50",
      glowColor: "bg-[#E32726]",
      gradientText: "from-[#E32726] to-red-400"
    }, 
    { 
      id: "nivel-primario", 
      icon: BookOpen, 
      title: "Nivel Primario", 
      desc: "Trayectoria escolar completa con herramientas accesibles, alfabetización y estimulación.",
      tag: "6-14 años",
      colorClass: "group-hover:text-[#FFD600]", 
      bgClass: "group-hover:bg-[#FFD600]/20", 
      borderClass: "group-hover:border-[#FFD600]/50",
      glowColor: "bg-[#FFD600]",
      gradientText: "from-[#FFD600] to-yellow-400"
    }, 
    { 
      id: "apoyo-inclusion", 
      icon: Users, 
      title: "Apoyo a la Inclusión", 
      desc: "Acompañamiento en escuelas comunes para garantizar la igualdad de oportunidades.",
      tag: "Todas las edades",
      colorClass: "group-hover:text-[#009ADE]", 
      bgClass: "group-hover:bg-[#009ADE]/20", 
      borderClass: "group-hover:border-[#009ADE]/50",
      glowColor: "bg-[#009ADE]",
      gradientText: "from-[#009ADE] to-cyan-300"
    },
    { 
      id: "tiflotecnologia", 
      icon: Laptop, 
      title: "Tiflotecnología", 
      desc: "Herramientas tecnológicas y software accesible para la autonomía digital de los alumnos.",
      tag: "Tecnología",
      colorClass: "group-hover:text-[#E32726]", 
      bgClass: "group-hover:bg-[#E32726]/20", 
      borderClass: "group-hover:border-[#E32726]/50",
      glowColor: "bg-[#E32726]",
      gradientText: "from-[#E32726] to-red-400"
    },
  ];

  return (
    <section id="especialidades" className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden">
      {/* Efectos de luz */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#009ADE]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E32726]/5 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Línea superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent"></div>
      
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 z-10">
        
        {/* Header con animación */}
        <div 
          ref={headerRef}
          className={`flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16 lg:mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/20 text-[#FFD600] text-xs font-bold tracking-wider uppercase mb-6">
              <Star className="w-3.5 h-3.5" />
              <span>Nuestra Especialidad</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
              Educación para{" "}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#009ADE] via-cyan-300 to-[#009ADE]">
                  Ceguera y Baja Visión
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD600]/10 rounded-full blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Brindamos una educación integral, enfocada en la autonomía y el desarrollo pleno de nuestros estudiantes a través de metodologías específicas y tecnología de vanguardia.
            </p>
          </div>
          
          {/* Estadística rápida */}
          <div className="flex-shrink-0 lg:pt-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FFD600] to-yellow-300">5</div>
              <div className="text-sm text-gray-400 font-medium mt-1">Especialidades</div>
            </div>
          </div>
        </div>
        
        {/* GRILLA DE TARJETAS con animación escalonada */}
        <div 
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 transition-all duration-1000 delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {niveles.map((nivel, idx) => {
            const Icon = nivel.icon;
            return (
              <Link 
                href={`/especialidades/${nivel.id}`} 
                key={idx} 
                className={`group relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${nivel.borderClass}`}
              >
                {/* Fondo con gradiente sutil que aparece en hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${nivel.bgClass}`}></div>
                
                {/* Glow decorativo en hover */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${nivel.glowColor}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Contenido */}
                <div className="relative z-10">
                  {/* Tag de edad/rango */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-6 group-hover:border-white/20 group-hover:text-gray-400 transition-all">
                    {nivel.tag}
                  </div>
                  
                  {/* Icono */}
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${nivel.bgClass} ${nivel.borderClass}`}>
                    <Icon className={`w-7 h-7 text-gray-400 transition-all duration-500 group-hover:scale-110 ${nivel.colorClass}`} />
                  </div>
                  
                  {/* Título con efecto gradiente en hover */}
                  <h3 className={`text-2xl font-bold mb-4 text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${nivel.gradientText}`}>
                    {nivel.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 mb-8 text-sm sm:text-base">
                    {nivel.desc}
                  </p>
                  
                  {/* CTA */}
                  <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-600 transition-all duration-500 ${nivel.colorClass} group-hover:gap-3`}>
                    <span>Explorar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Borde brillante en hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-white/10 transition-all duration-500 pointer-events-none"></div>
              </Link>
            );
          })}
        </div>
        
        {/* Footer con animación */}
        <div 
          ref={footerRef}
          className={`mt-12 text-center transition-all duration-800 delay-500 ${
            footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-500 text-sm font-medium">
            Cada especialidad está diseñada por profesionales expertos en discapacidad visual
          </p>
        </div>
      </div>
    </section>
  );
}