import Navbar from "@/components/Navbar";
import { Sparkles, Heart, Target, Lightbulb, ArrowRight, Quote, Star, BookOpen } from "lucide-react";
import Image from "next/image";

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO - Más impacto con gradiente sutil */}
      <section className="relative bg-[#050505] pt-48 pb-40 px-6 lg:px-10 overflow-hidden">
        <Navbar />
        
        {/* Efectos de luz mejorados con los 3 colores */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#009ADE] opacity-[0.08] blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E32726] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#FFD600] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD600]/30 to-transparent"></div>

        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FFD600]" />
            <span>Conocé nuestra esencia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            Nuestra{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#E32726] via-red-400 to-[#E32726]">
                Historia
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD600]/20 rounded-full blur-sm"></div>
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Más de dos décadas transformando vidas a través de la educación inclusiva en el corazón de Mendoza.
          </p>
          
          {/* Estadísticas rápidas en el hero */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white">25+</div>
              <div className="text-sm text-gray-400 font-medium mt-1">Años de trayectoria</div>
            </div>
            <div className="w-px bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#FFD600]">200+</div>
              <div className="text-sm text-gray-400 font-medium mt-1">Estudiantes</div>
            </div>
            <div className="w-px bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#009ADE]">100%</div>
              <div className="text-sm text-gray-400 font-medium mt-1">Inclusión</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-[#FFD600] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL - Elevado con sombra */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 p-8 sm:p-12 lg:p-16">
          
          {/* Fila 1: Historia */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E32726]/10 text-[#E32726] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Nuestros Orígenes</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-8 tracking-tight leading-[1.1]">
                El inicio de un{" "}
                <span className="relative">
                  <span className="relative z-10 text-[#009ADE]">sueño</span>
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD600]/30 rounded -skew-x-12 -z-10"></div>
                </span>
              </h2>
              
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-medium">
                <p className="border-l-[3px] border-[#E32726] pl-5 py-2 text-gray-800">
                  La Escuela Nro. 2-006 Helen Keller nació del profundo deseo de un grupo de educadores mendocinos de crear un espacio seguro, adaptado y lleno de oportunidades para niños y jóvenes con ceguera y baja visión.
                </p>
                <p>
                  Lo que comenzó como un pequeño proyecto con recursos limitados, rápidamente se convirtió en un faro de inclusión en la provincia. Nuestro objetivo siempre fue claro: no solo enseñar, sino dotar a nuestros estudiantes de herramientas para la vida, promoviendo su autonomía e independencia absoluta.
                </p>
              </div>
              
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#009ADE] transition-all duration-300 group">
                Conocé más sobre nosotros
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#009ADE]/10 via-transparent to-[#FFD600]/10 rounded-[2.5rem] -rotate-3 -z-10"></div>
              <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/8612920/pexels-photo-8612920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Historia Escuela Helen Keller" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Cita sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Quote className="w-6 h-6 text-[#FFD600] mb-2" />
                  <p className="text-white text-sm font-bold leading-relaxed drop-shadow-lg">
                    &ldquo;Educar con el corazón, innovar con la mente&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fila 2: Misión, Visión, Valores - Ahora más visuales y conectadas */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-3 gap-0 relative">
              {/* MISIÓN */}
              <div className="group relative p-8 lg:p-10 hover:bg-red-50/30 transition-all duration-500 rounded-3xl border border-transparent hover:border-red-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E32726]/5 rounded-bl-3xl -z-10 group-hover:bg-[#E32726]/10 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#E32726] flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Brindar una educación integral y de calidad, respetando los tiempos de cada estudiante y fomentando su desarrollo personal, social y cognitivo.
                </p>
                
                <div className="flex items-center gap-2 text-[#E32726] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4" />
                  <span>Amor y dedicación</span>
                </div>
              </div>

              {/* VISIÓN */}
              <div className="group relative p-8 lg:p-10 hover:bg-blue-50/30 transition-all duration-500 rounded-3xl border border-transparent hover:border-blue-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#009ADE]/5 rounded-bl-3xl -z-10 group-hover:bg-[#009ADE]/10 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#009ADE] flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Ser una institución líder en la innovación de metodologías para personas con discapacidad visual, rompiendo barreras en la sociedad actual.
                </p>
                
                <div className="flex items-center gap-2 text-[#009ADE] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4" />
                  <span>Innovación constante</span>
                </div>
              </div>

              {/* VALORES */}
              <div className="group relative p-8 lg:p-10 hover:bg-yellow-50/30 transition-all duration-500 rounded-3xl border border-transparent hover:border-yellow-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD600]/5 rounded-bl-3xl -z-10 group-hover:bg-[#FFD600]/10 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-[#FFD600] flex items-center justify-center mb-6 shadow-lg shadow-yellow-200 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">Nuestros Valores</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Empatía, constancia, innovación tecnológica y la creencia inquebrantable en el potencial ilimitado de nuestros alumnos.
                </p>
                
                <div className="flex items-center gap-2 text-[#FFD600] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4" />
                  <span>Potencial sin límites</span>
                </div>
              </div>
            </div>
          </div>

          {/* CITA FINAL */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <div className="bg-gradient-to-r from-[#009ADE]/5 via-transparent to-[#E32726]/5 rounded-3xl p-8 lg:p-12 text-center">
              <Sparkles className="w-8 h-8 text-[#FFD600] mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl font-bold text-[#1a1a1a] max-w-3xl mx-auto leading-relaxed">
                &ldquo;Cada niño que pasa por nuestras aulas nos recuerda que las verdaderas limitaciones no están en los ojos, sino en la falta de oportunidades.&rdquo;
              </blockquote>
              <p className="mt-4 text-gray-500 font-medium">
                — Equipo Directivo, Escuela Helen Keller
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}