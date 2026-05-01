"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  X, Gamepad2, Play, Circle, Layout, Rocket, Disc, 
  Activity, Grid, Smile, Crosshair, Plane, Hexagon, 
  Car, Shield, Navigation, Zap, Sparkles, ExternalLink, 
  Clock, Wrench, Layers, Map, Eye, Book, FileText,
  Trophy, Flag, Star // <-- Nuevos íconos agregados
} from "lucide-react";

// ─── COLECCIÓN DE JUEGOS PARA EL MODAL ───
const arcadeGames =[
  { title: "Bola HK", desc: "Guía a nuestra intrépida bola de metal con lentes a través de desafiantes obstáculos.", link: "https://bolahk.netlify.app", icon: Circle, color: "text-blue-400", bg: "bg-blue-400/10" },
  { title: "Arkanoid", desc: "Destruye los bloques en esta electrizante y moderna versión del clásico retro. ¡No dejes caer la bola!", link: "https://arkanoidhk.netlify.app", icon: Layout, color: "text-red-400", bg: "bg-red-400/10" },
  { title: "Cyber Invaders", desc: "Pilota tu nave y defiende la galaxia de hordas enemigas en este trepidante shooter espacial.", link: "https://cyberinvadershk.netlify.app", icon: Rocket, color: "text-purple-400", bg: "bg-purple-400/10" },
  { title: "Hyper Pong", desc: "El tenis clásico reinventado a hipervelocidad. Desafía a la IA o compite contra un amigo.", link: "https://hyperponghk.netlify.app", icon: Disc, color: "text-green-400", bg: "bg-green-400/10" },
  { title: "Snake", desc: "El legendario juego de la serpiente. Aliméntala para que crezca, ¡pero ten cuidado de no chocar!", link: "https://snakehk.netlify.app", icon: Activity, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { title: "Tetris", desc: "Piensa rápido y encaja las piezas a la perfección en este adictivo rompecabezas de bloques.", link: "https://tetrishk.netlify.app", icon: Grid, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { title: "Pac-Man", desc: "Come todas las pastillas y escapa de los fantasmas en el laberinto más famoso de la historia.", link: "https://packmanhk.netlify.app", icon: Smile, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { title: "Shooter HK", desc: "Acción cenital pura al estilo Brawl Stars. ¡Muévete por el mapa, esquiva y no dejes de disparar!", link: "https://shooterhk.netlify.app", icon: Crosshair, color: "text-orange-400", bg: "bg-orange-400/10" },
  { title: "Neon Strike", desc: "Surca los cielos en esta experiencia de disparos cyberpunk. Esquiva proyectiles y domina el espacio aéreo.", link: "https://disparoshk.netlify.app", icon: Plane, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { title: "Geo Swarm", desc: "Sobrevive a oleadas infinitas de figuras geométricas en este frenético juego de disparos con vista cenital.", link: "https://swarmhk.netlify.app", icon: Hexagon, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { title: "Monster Track", desc: "Acelera al máximo y supera los terrenos más extremos y obstáculos a bordo de una camioneta monstruo.", link: "https://monstertruckhk.netlify.app", icon: Car, color: "text-rose-500", bg: "bg-rose-500/10" },
  { title: "Defensa Lunar", desc: "Protege tu base espacial de una peligrosa lluvia de meteoritos. ¡Apunta rápido y salva la estación!", link: "https://meteoritohk.netlify.app", icon: Shield, color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Misión Apolo", desc: "Demuestra tu precisión como piloto y logra aterrizar el módulo lunar en la plataforma sin que explote.", link: "https://lunarhk.netlify.app", icon: Navigation, color: "text-teal-300", bg: "bg-teal-300/10" },
  { title: "Astro Blaster", desc: "Combate intergaláctico clásico. Elimina escuadrones de naves enemigas en este espectacular arcade de vuelo.", link: "https://astroblasterhk.netlify.app", icon: Zap, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
  
  // <-- Estos son los 3 arreglados con íconos y colores distintos
  { title: "Neon Fútbol", desc: "Deslízate por una vibrante cancha de neón. Demuestra tus reflejos, defiende tu portería y marca el gol de la victoria.", link: "https://futbolhk.netlify.app", icon: Trophy, color: "text-green-300", bg: "bg-green-300/10" },
  { title: "Desert Racing", desc: "Pisa el acelerador a fondo bajo el sol del desierto. Esquiva el tráfico a toda velocidad y demuestra quién es el rey de las dunas.", link: "https://autosdanhk.netlify.app", icon: Flag, color: "text-orange-500", bg: "bg-orange-500/10" },
  { title: "Star Wars", desc: "Toma los controles del legendario Halcón Milenario. Esquiva el fuego enemigo y defiende la galaxia en esta épica batalla espacial.", link: "https://gerradelasgalaxiashk.netlify.app", icon: Star, color: "text-yellow-400", bg: "bg-yellow-400/10" },
];

const apps =[
  { 
    title: "Arcade HK", 
    desc: "Colección exclusiva de 14 minijuegos retro y modernos diseñados para divertirse y aprender jugando.", 
    link: "#", 
    tag: "Juegos", 
    status: "modal", 
    color: "from-indigo-500 to-purple-600",
    icon: Gamepad2,
    bgGlow: "bg-indigo-500/10",
    borderGlow: "hover:border-indigo-500/30"
  },
  { 
    title: "Teclado", 
    desc: "Aprende a utilizar el teclado de la compu paso a paso con ejercicios interactivos.", 
    link: "https://tecladohelenkeller.vercel.app/", 
    tag: "Educativo", 
    status: "active", 
    color: "from-[#E32726] to-red-400",
    icon: Layers,
    bgGlow: "bg-red-500/10",
    borderGlow: "hover:border-red-500/30"
  }, 
  { 
    title: "Tienda Online", 
    desc: "Simulador estilo Mercado Libre y PedidosYa para practicar compras.", 
    link: "https://tiendaonlinehk.vercel.app/", 
    tag: "Simulador", 
    status: "active", 
    color: "from-[#FFD600] to-yellow-300",
    icon: Sparkles,
    bgGlow: "bg-yellow-500/10",
    borderGlow: "hover:border-yellow-500/30"
  }, 
  { 
    title: "Estimulación Visual", 
    desc: "Ejercicios y juegos de apoyo terapéutico y docente para maximizar el remanente visual.", 
    link: "https://estimulacionvisual.vercel.app/", 
    tag: "Terapia", 
    status: "active", 
    color: "from-emerald-400 to-teal-500",
    icon: Eye,
    bgGlow: "bg-emerald-500/10",
    borderGlow: "hover:border-emerald-500/30"
  },
  { 
    title: "Alfabetización", 
    desc: "Prácticas de sílabas, letras y formación de palabras con metodología adaptada.", 
    link: "https://alfabetizacion.vercel.app/", 
    tag: "Educativo", 
    status: "active", 
    color: "from-[#009ADE] to-cyan-400",
    icon: Book,
    bgGlow: "bg-blue-500/10",
    borderGlow: "hover:border-blue-500/30"
  }, 
  { 
    title: "Mapa Interactivo", 
    desc: "Mapa de Argentina con feedback auditivo y visual para aprender geografía.", 
    link: "#", 
    tag: "Geografía", 
    status: "dev", 
    color: "from-gray-400 to-gray-500",
    icon: Map,
    bgGlow: "bg-gray-500/10",
    borderGlow: "hover:border-gray-500/30"
  },
  { 
    title: "Procesador de Textos", 
    desc: "Herramienta de escritura simplificada pensada para niños.", 
    link: "#", 
    tag: "Herramienta", 
    status: "dev", 
    color: "from-gray-400 to-gray-500",
    icon: FileText,
    bgGlow: "bg-gray-500/10",
    borderGlow: "hover:border-gray-500/30"
  },
  { 
    title: "Nuevas aventuras", 
    desc: "Estamos preparando más herramientas increíbles.", 
    link: "#", 
    tag: "Pronto", 
    status: "soon", 
    color: "from-gray-300 to-gray-200",
    icon: Clock,
    bgGlow: "bg-gray-400/10",
    borderGlow: "hover:border-gray-400/30"
  },
];

export default function Recursos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isModalOpen]);

  return (
    <>
      <section id="recursos" className="relative py-24 lg:py-32 bg-gray-200 overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#009ADE]/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#E32726]/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="relative px-6 lg:px-10 max-w-7xl mx-auto z-10">
          
          {/* Header mejorado */}
          <div className="mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#009ADE]/10 border border-[#009ADE]/20 text-[#009ADE] text-xs font-bold tracking-wider uppercase mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Laboratorio Digital</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-[1.05] mb-4">
                  Nuestros{" "}
                  <span className="relative">
                    <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-[#009ADE] to-cyan-400">
                      Recursos
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD600]/20 rounded-full blur-sm"></div>
                  </span>
                </h2>
                <p className="text-lg text-gray-600 font-medium max-w-xl">
                  Aplicaciones y herramientas digitales desarrolladas especialmente para potenciar el aprendizaje.
                </p>
              </div>
              
              {/* Contador de apps */}
              <div className="flex gap-4">
                <div className="bg-[#009ADE]/5 rounded-2xl p-4 text-center border border-[#009ADE]/10">
                  <div className="text-2xl font-black text-[#009ADE]">{apps.filter(a => a.status === 'active' || a.status === 'modal').length}</div>
                  <div className="text-xs text-gray-500 font-medium">Apps activas</div>
                </div>
                <div className="bg-[#FFD600]/5 rounded-2xl p-4 text-center border border-[#FFD600]/10">
                  <div className="text-2xl font-black text-[#FFD600]">{apps.filter(a => a.status === 'dev' || a.status === 'soon').length}</div>
                  <div className="text-xs text-gray-500 font-medium">En desarrollo</div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID DE TARJETAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {apps.map((app, idx) => {
              const AppIcon = app.icon;
              const isActive = app.status === 'active' || app.status === 'modal';
              const isDev = app.status === 'dev' || app.status === 'soon';
              
              // Clases comunes para el diseño del contenedor (ahora usado como Link o Button)
              const cardClasses = `group relative w-full text-left bg-white rounded-4xl p-6 sm:p-7 transition-all duration-500 border flex flex-col h-full
                ${isActive 
                  ? `border-gray-100 hover:border-transparent hover:-translate-y-3 hover:shadow-2xl ${app.borderGlow} cursor-pointer` 
                  : 'border-gray-100 opacity-60 hover:opacity-80 cursor-not-allowed'
                }`;

              // Contenido interior de la tarjeta (para no repetir código)
              const cardContent = (
                <>
                  {/* Glow de fondo en hover */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${app.bgGlow} blur-xl`}></div>
                  )}
                  
                  {/* Badge de estado */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border
                      ${isActive 
                        ? 'bg-[#009ADE]/5 border-[#009ADE]/20 text-[#009ADE]' 
                        : 'bg-gray-100 border-gray-200 text-gray-500'
                      }
                    `}>
                      {app.tag}
                    </span>
                    
                    {isDev && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        <Wrench className="w-3 h-3" />
                        En desarrollo
                      </span>
                    )}
                  </div>
                  
                  {/* Ícono de la app */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <AppIcon className="w-7 h-7 text-white relative z-10" />
                  </div>
                  
                  {/* Título */}
                  <h3 className={`text-xl font-black mb-2 tracking-tight transition-colors
                    ${isActive ? 'text-[#1a1a1a] group-hover:text-[#009ADE]' : 'text-gray-500'}
                  `}>
                    {app.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {app.desc}
                  </p>
                  
                  {/* CTA Footer (cambiado a divs internamente ya que el contenedor padre ahora hace el clic) */}
                  {app.status === 'modal' ? (
                    <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-gray-100 text-sm font-bold text-[#1a1a1a] group-hover:text-indigo-600 transition-colors">
                      <span>Explorar colección</span>
                      <span className="bg-gray-50 p-2.5 rounded-full group-hover:bg-indigo-100 group-hover:scale-110 transition-all">
                        <Gamepad2 className="w-4 h-4" />
                      </span>
                    </div>
                  ) : app.status === 'active' ? (
                    <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-gray-100 text-sm font-bold text-[#1a1a1a] group-hover:text-[#009ADE] transition-colors">
                      <span>Ingresar a la app</span>
                      <span className="bg-gray-50 p-2.5 rounded-full group-hover:bg-[#009ADE]/10 group-hover:translate-x-1 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  ) : (
                    <div className="mt-auto pt-4 border-t border-gray-100 text-sm font-bold text-gray-400 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Próximamente</span>
                    </div>
                  )}
                </>
              );

              // Renderizado Condicional del Wrapper
              if (app.status === 'modal') {
                return (
                  <button key={idx} onClick={() => setIsModalOpen(true)} className={cardClasses}>
                    {cardContent}
                  </button>
                );
              }

              if (app.status === 'active') {
                return (
                  <Link key={idx} href={app.link} target="_blank" className={cardClasses}>
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={idx} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>
          
          {/* Mensaje inferior */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Todas las aplicaciones están optimizadas para lectores de pantalla y dispositivos adaptados
            </p>
          </div>
        </div>
      </section>

      {/* ─── MODAL 3D ESPECTACULAR (ARCADE) ─── */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-700 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-300'}`}
      >
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsModalOpen(false)}
        ></div>

        <div 
          className="relative w-full max-w-[1400px] max-h-[90vh] flex flex-col bg-[#050505] border border-white/10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_0_150px_rgba(139,92,246,0.3)] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ 
            transform: isModalOpen ? 'perspective(2000px) rotateX(0deg) scale(1) translateY(0)' : 'perspective(2000px) rotateX(40deg) scale(0.8) translateY(100px)',
            opacity: isModalOpen ? 1 : 0
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative shrink-0 flex items-center justify-between p-6 sm:px-10 sm:py-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Arcade Helen Keller</h2>
                <p className="text-sm sm:text-base text-gray-400 font-medium">Selecciona un juego para comenzar</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 flex items-center justify-center transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative overflow-y-auto p-6 sm:p-10 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {arcadeGames.map((game, index) => {
                const Icon = game.icon;
                return (
                  <a 
                    key={index}
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col bg-[#111] border border-white/5 hover:border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)]"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${game.bg}`}>
                      <Icon className={`w-8 h-8 ${game.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {game.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-grow group-hover:text-gray-400 transition-colors">
                      {game.desc}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-sm font-black uppercase tracking-wider text-gray-600 group-hover:text-white transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                      <span>Jugar ahora</span>
                    </div>
                  </a>
                )
              })}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </>
  );
}