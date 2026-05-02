"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Heart, Sparkles, MapPin, Users, Award } from "lucide-react";
import Image from "next/image";

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Instalaciones() {
  const { ref: heroRef, isInView: heroVisible } = useInView(0.1);
  const { ref: statsRef, isInView: statsVisible } = useInView(0.3);
  const { ref: contentRef, isInView: contentVisible } = useInView(0.2);
  const { ref: cardsRef, isInView: cardsVisible } = useInView(0.2);
  const { ref: quoteRef, isInView: quoteVisible } = useInView(0.3);

  return (
    <section id="instalaciones" className="relative bg-white">
      
      {/* ─── HERO CON IMAGEN DE FACHADA ─── */}
      <div 
        ref={heroRef}
        className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden group"
      >
        {/* Imagen de fondo */}
        <div className={`absolute inset-0 transition-all duration-1500 ease-out ${
          heroVisible ? "scale-100 opacity-100" : "scale-110 opacity-80"
        }`}>
          <Image
            src="/fachada.jpg"
            alt="Fachada principal Escuela Helen Keller"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
            <div className={`max-w-2xl transition-all duration-1000 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-bold tracking-wider uppercase mb-6 border border-white/20">
                <MapPin className="w-4 h-4 text-[#FFD600]" />
                <span>Mendoza, Argentina</span>
              </div>

              {/* Título */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                Un espacio para <br />
                <span className="text-[#FFD600]">crecer sin límites</span>
              </h2>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed font-medium">
                Cada rincón de nuestra escuela está diseñado para potenciar la autonomía, el aprendizaje y la inclusión de nuestros estudiantes.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* ─── ESTADÍSTICAS FLOTANTES ─── */}
      <div 
        ref={statsRef}
        className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24"
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-200 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100 hover:shadow-[#FFD600]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFD600] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FFD600]/30">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">+200</div>
                  <div className="text-sm sm:text-base text-gray-600 font-semibold">Estudiantes activos</div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100 hover:shadow-[#009ADE]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#009ADE] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#009ADE]/30">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">+25</div>
                  <div className="text-sm sm:text-base text-gray-600 font-semibold">Años de experiencia</div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100 hover:shadow-[#E32726]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E32726] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E32726]/30">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">100%</div>
                  <div className="text-sm sm:text-base text-gray-600 font-semibold">Educación inclusiva</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── CONTENIDO PRINCIPAL ─── */}
      <div className="pt-16 sm:pt-20 lg:pt-24 pb-20 lg:pb-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div 
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E32726]/10 text-[#E32726] text-sm font-bold tracking-wider uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Nuestra Misión</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-8 tracking-tight leading-tight">
                Comprometidos con <br />
                <span className="text-[#009ADE]">el futuro inclusivo</span>
              </h3>

              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                <p className="border-l-4 border-[#FFD600] pl-5 py-2 bg-yellow-50/60 rounded-r-xl">
                  Desde nuestra fundación, la Escuela Helen Keller ha sido un faro de luz e inclusión en Mendoza. Trabajamos día a día para brindar un espacio seguro y adaptado a las necesidades de cada estudiante.
                </p>
                <p className="pl-5">
                  Nuestra misión va más allá del aula: dotamos a nuestros alumnos de herramientas tecnológicas, movilidad y habilidades sociales para que se desenvuelvan con total autonomía y confianza.
                </p>
              </div>
            </div>

            {/* Cita inspiradora */}
            <div 
              ref={quoteRef}
              className={`transition-all duration-1000 delay-400 ${
                quoteVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-[#009ADE] to-[#005A8B] rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD600]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <span className="text-8xl sm:text-9xl font-serif text-white/15 absolute top-6 left-6 leading-none">&ldquo;</span>
                
                <div className="relative z-10">
                  <Heart className="w-12 h-12 mb-6 text-[#FFD600]" />
                  
                  <p className="text-xl sm:text-2xl font-bold leading-relaxed italic mb-8">
                    Creemos en el potencial ilimitado de cada uno de nuestros estudiantes.
                  </p>
                  
                  <div className="flex items-center gap-3 pt-6 border-t border-white/15">
                    <div className="w-3 h-3 rounded-full bg-[#FFD600] animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                      Nuestra filosofía
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── TARJETAS INSTITUCIONALES ─── */}
          <div 
            ref={cardsRef}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 lg:mt-20 transition-all duration-1000 delay-500 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            
            {/* Tarjeta Amarilla - Visión */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8 rounded-2xl border border-yellow-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#FFD600] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-[#FFD600]/30">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-black text-[#1a1a1a] mb-2">Visión Clara</h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Formamos estudiantes autónomos, seguros y preparados para integrarse plenamente en la sociedad.
              </p>
            </div>

            {/* Tarjeta Azul - Ubicación */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#009ADE] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-[#009ADE]/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-black text-[#1a1a1a] mb-2">Ubicación Estratégica</h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Situados en Mendoza, Argentina, accesibles para toda la comunidad educativa de la región.
              </p>
            </div>

            {/* Tarjeta Roja - Trayectoria */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8 rounded-2xl border border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#E32726] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-[#E32726]/30">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-black text-[#1a1a1a] mb-2">Trayectoria</h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Más de 25 años de experiencia en educación especial para ceguera y baja visión.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}