import { Target, Heart, Sparkles, MapPin, Users, Award } from "lucide-react";
import Image from "next/image";

export default function Instalaciones() {
  return (
    <section id="instalaciones" className="py-24 lg:py-32 bg-linear-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        {/* Encabezado de sección (antes estaba abajo) */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E32726]/10 text-[#E32726] text-sm font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Nuestras Instalaciones</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Un espacio diseñado para 
            <span className="text-[#009ADE]"> crecer sin límites</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Cada rincón de nuestra escuela está pensado para potenciar el aprendizaje, la inclusión y el desarrollo integral de nuestros estudiantes.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Columna de imágenes */}
          <div className="relative">
            {/* Decoración de fondo mejorada */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#009ADE]/5 via-[#FFD600]/5 to-transparent rounded-[3rem] -z-10"></div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Imagen 1 - Ahora con mejor composición */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-100 aspect-[3/4] rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden relative group">
                  <Image 
                    src="/frente-1.jpg" 
                    alt="Fachada principal Escuela Helen Keller" 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Etiqueta sobre la imagen */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#009ADE] shadow-lg">
                    Fachada Principal
                  </div>
                </div>
                
                {/* Tarjeta de estadística */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFD600]/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#009ADE]" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#1a1a1a]">+200</div>
                      <div className="text-sm text-gray-600 font-medium">Estudiantes activos</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Columna derecha */}
              <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                <div className="bg-gray-100 aspect-[4/3] rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden relative group">
                  <Image 
                    src="/frente-2.jpg" 
                    alt="Instalaciones interiores Escuela Helen Keller" 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#009ADE]/0 group-hover:bg-[#009ADE]/10 transition-all duration-500"></div>
                </div>
                
                {/* Tarjeta de cita inspiradora mejorada */}
                <div className="bg-gradient-to-br from-[#009ADE] to-[#007BB5] rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 mb-4 text-[#FFD600] relative z-10" />
                  <p className="text-sm sm:text-base font-bold leading-relaxed relative z-10 italic">
                    &ldquo;Creemos en el potencial ilimitado de cada uno de nuestros estudiantes.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[#FFD600]"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">Nuestra filosofía</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna de contenido */}
          <div className="lg:pl-4">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                  Comprometidos con <br/>
                  <span className="text-[#E32726]">el futuro inclusivo</span>
                </h3>
                
                <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  <p className="border-l-4 border-[#FFD600] pl-4 py-1">
                    Desde nuestra fundación, la Escuela Helen Keller ha sido un faro de luz e inclusión en Mendoza. Trabajamos día a día para brindar un espacio seguro, estimulante y adaptado a las necesidades de cada niño y joven.
                  </p>
                  <p>
                    Nuestra misión va más allá de educar en el aula: buscamos dotar a nuestros alumnos de herramientas tecnológicas, movilidad y habilidades sociales necesarias para desenvolverse con total autonomía y confianza en el mundo actual.
                  </p>
                </div>
              </div>

              {/* Características mejoradas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-yellow-50 to-white p-5 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD600] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a1a1a] mb-1">Visión Clara</h4>
                  <p className="text-sm text-gray-600 font-medium">Autonomía y desarrollo integral</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#009ADE] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a1a1a] mb-1">Ubicación</h4>
                  <p className="text-sm text-gray-600 font-medium">Mendoza, Argentina</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a1a1a] mb-1">Trayectoria</h4>
                  <p className="text-sm text-gray-600 font-medium">+25 años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}