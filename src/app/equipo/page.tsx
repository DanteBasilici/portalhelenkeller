import Navbar from "@/components/Navbar";
import { Users, ShieldCheck, BookOpen, HeartHandshake, Briefcase, Network, Star, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";


// ESTRUCTURA DE DATOS PARA EL EQUIPO
const categoriasEquipo = [
  {
    titulo: "Equipo Directivo",
    subtitulo: "Liderazgo y gestión educativa",
    icono: ShieldCheck,
    iconColor: "text-[#E32726]",
    bgIcon: "bg-red-50",
    cargoColor: "text-red-400",
    borderColor: "group-hover:border-red-500/30",
    bgPlaceholder: "from-red-500/20 to-red-700/40",
    miembros:[
      { nombre: "Natalia", cargo: "Directora", foto: "/natalia.jpeg" },
      { nombre: "Claudia", cargo: "Vicedirectora", foto: "" },
      { nombre: "Cecilia", cargo: "Secretaria", foto: "/cecilia.jpeg" },
    ]
  },
  {
    titulo: "Equipo Técnico",
    subtitulo: "Profesionales especializados",
    icono: Briefcase,
    iconColor: "text-[#009ADE]",
    bgIcon: "bg-blue-50",
    cargoColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/30",
    bgPlaceholder: "from-blue-500/20 to-blue-700/40",
    miembros:[
      { nombre: "Luisa", cargo: "Docente", foto: "" },
      { nombre: "Noelia", cargo: "Trabajadora Social", foto: "" },
      { nombre: "Aldana", cargo: "Fonoaudiólogoa", foto: "" },
      { nombre: "Daniela", cargo: "Psicóloga", foto: "" },
    ]
  },
  {
    titulo: "Docentes de Sede",
    subtitulo: "Educación de calidad en el aula",
    icono: BookOpen,
    iconColor: "text-[#FFD600]",
    bgIcon: "bg-yellow-50",
    cargoColor: "text-yellow-400",
    borderColor: "group-hover:border-yellow-500/30",
    bgPlaceholder: "from-yellow-400/20 to-yellow-600/40",
    miembros:[
      { nombre: "Adriana F.", cargo: "Docente", foto: "/adrianaf.jpeg" },
      { nombre: "Adriana V.", cargo: "Educación Física", foto: "/adrianav.jpeg" },
      { nombre: "Aldana", cargo: "Docente", foto: "/aldana.jpeg" },
      { nombre: "Analía", cargo: "Plástica", foto: "/analia.jpeg" },
      { nombre: "Claudia", cargo: "Docente", foto: "/Claudia.jpeg" },
      { nombre: "Silvia", cargo: "Docente", foto: "" },
      { nombre: "Daniela", cargo: "Docente", foto: "/danielp.jpeg" },
      { nombre: "Flavia", cargo: "Docente", foto: "/flavia.jpeg" },
      { nombre: "Jimena", cargo: "Docente", foto: "/jimena.jpeg" },
      { nombre: "Yamila", cargo: "Psicomotricidad", foto: "/yamila.jpeg" },
      { nombre: "Mariana", cargo: "Terapista Ocupacional", foto: "" },
      { nombre: "Fernando", cargo: "Música", foto: "" },
      { nombre: "Cecilia", cargo: "Docente", foto: "" },
      { nombre: "Micaela", cargo: "Docente", foto: "" },
      { nombre: "Emilce", cargo: "Docente", foto: "" },
    ] 
  },
  {
    titulo: "Apoyo a la Inclusión",
    subtitulo: "Integración y acompañamiento",
    icono: HeartHandshake,
    iconColor: "text-[#009ADE]", 
    bgIcon: "bg-blue-50",
    cargoColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/30",
    bgPlaceholder: "from-cyan-500/20 to-cyan-700/40",
    miembros:[
      { nombre: "Daniela", cargo: "Docente", foto: "/danielab.jpeg" },
      { nombre: "Laura", cargo: "Docente", foto: "/laura.jpeg" },
      { nombre: "Sonia", cargo: "Docente", foto: "/sonia.jpeg" },
      { nombre: "Silvana", cargo: "Docente", foto: "" },
      { nombre: "Paola", cargo: "Docente", foto: "" },
      { nombre: "Mariana Z.", cargo: "Docente", foto: "" },
      { nombre: "Mariana G.", cargo: "Docente", foto: "" },
      { nombre: "Carolina S.", cargo: "Docente", foto: "" },
      { nombre: "Carolina L.", cargo: "Docente", foto: "" },
      { nombre: "Soledad", cargo: "Docente", foto: "" },
      { nombre: "Viviana", cargo: "Docente", foto: "" },
      { nombre: "Valeria", cargo: "Docente", foto: "" },
      { nombre: "Luciana", cargo: "Docente", foto: "" },
      { nombre: "Emmanuel", cargo: "Docente", foto: "" },
    ]
  },
  {
    titulo: "Personal No Docente",
    subtitulo: "El corazón operativo de la escuela",
    icono: Users,
    iconColor: "text-[#E32726]",
    bgIcon: "bg-red-50",
    cargoColor: "text-red-400",
    borderColor: "group-hover:border-red-500/30",
    bgPlaceholder: "from-red-500/20 to-red-700/40",
    miembros:[
      { nombre: "Mariela", cargo: "Celador", foto: "" },
      { nombre: "Silvana", cargo: "Celador", foto: "" },
      { nombre: "Bárbara", cargo: "Celador", foto: "" },
      { nombre: "María", cargo: "Celador", foto: "" },
      { nombre: "Diego", cargo: "Celador", foto: "/diego.jpeg" },
      { nombre: "Franco", cargo: "Celador", foto: "/franco.jpeg" },
      { nombre: "Santos", cargo: "Celador", foto: "" },
      { nombre: "Mario", cargo: "Celador", foto: "" },
    ]
  },
  {
    titulo: "Administración y Sistemas",
    subtitulo: "Tecnología y gestión administrativa",
    icono: Network,
    iconColor: "text-gray-700",
    bgIcon: "bg-gray-200",
    cargoColor: "text-gray-300",
    borderColor: "group-hover:border-gray-500/30",
    bgPlaceholder: "from-gray-600/20 to-gray-800/40",
    miembros:[
      { nombre: "Dante Basilici", cargo: "Admin. de Red / Desarrollador", foto: "/dante.jpg" },
    ]
  }
];

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO - Más moderno y espacioso */}
      <section className="relative bg-[#050505] pt-48 pb-40 px-6 lg:px-10 overflow-hidden">
        <Navbar />
        
        {/* Efectos de luz con los 3 colores institucionales */}
        <div className="absolute top-0 right-0 w-175 h-175 bg-[#009ADE] opacity-[0.07] blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#E32726] opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-100 h-100 bg-[#FFD600] opacity-[0.04] blur-[130px] rounded-full pointer-events-none"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#009ADE]/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FFD600]" />
            <span>Quiénes Somos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            Nuestro{" "}
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-[#009ADE] via-cyan-300 to-[#009ADE]">
                Equipo
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD600]/20 rounded-full blur-sm"></div>
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Conocé a los profesionales que día a día ponen el corazón para hacer de la Escuela Helen Keller un lugar excepcional.
          </p>
          
          {/* Contador de equipo */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Users className="w-5 h-5 text-[#009ADE]" />
              <span className="text-white font-bold">+30 Profesionales</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Star className="w-5 h-5 text-[#FFD600]" />
              <span className="text-white font-bold">6 Áreas de Trabajo</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TARJETAS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        
        {categoriasEquipo.map((categoria, index) => {
          const Icon = categoria.icono;
          const esPar = index % 2 === 0;
          
          return (
            <section key={index} className={`mb-32 last:mb-0 ${esPar ? '' : 'lg:pl-8'}`}>
              {/* Título de la Categoría - Rediseñado */}
              <div className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 ${esPar ? '' : 'sm:flex-row-reverse'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${categoria.bgIcon} shadow-lg shrink-0`}>
                  <Icon className={`w-8 h-8 ${categoria.iconColor}`} />
                </div>
                <div className={esPar ? '' : 'sm:text-right'}>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight mb-2">
                    {categoria.titulo}
                  </h2>
                  <p className="text-gray-500 font-medium">
                    {categoria.subtitulo}
                  </p>
                </div>
                <div className={`hidden sm:block flex-1 h-px bg-linear-to-r ${esPar ? 'from-gray-200 to-transparent' : 'from-transparent to-gray-200'}`}></div>
              </div>

              {/* Grid de Tarjetas - Más cinematográfico */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {categoria.miembros.map((miembro, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative rounded-4xl overflow-hidden aspect-4/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-[#0a0a0a] ${categoria.borderColor} border-2 border-transparent`}
                  >
                    {/* Imagen de fondo (O placeholder) */}
                    {miembro.foto ? (
                      <>
                        <Image 
                          src={miembro.foto} 
                          alt={miembro.nombre} 
                          fill 
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        {/* Overlay sutil para foto real */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      </>
                    ) : (
                      <>
                        {/* Fondo gradient para placeholder */}
                        <div className={`absolute inset-0 bg-linear-to-br ${categoria.bgPlaceholder}`}>
                          {/* Patrón decorativo */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-size-[20px_20px]"></div>
                          </div>
                        </div>
                        
                        {/* Icono grande centrado */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                            <Icon className="w-10 h-10 text-white/40 group-hover:text-white/60 transition-colors duration-500" />
                          </div>
                        </div>
                        
                        {/* Overlay más oscuro para placeholder */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                      </>
                    )}

                    {/* Textos (Nombre y Cargo) - Mejor animación */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                          {miembro.nombre}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${categoria.cargoColor} shadow-lg`}></div>
                          <p className={`text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] ${categoria.cargoColor} drop-shadow-lg`}>
                            {miembro.cargo}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Efecto de brillo al hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/5 to-white/10"></div>
                    </div>
                    
                    {/* Esquina decorativa */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                  </div>
                ))}
              </div>

              {/* Contador de miembros por categoría */}
              <div className={`mt-6 text-sm text-gray-400 font-medium ${esPar ? 'text-left' : 'text-right'}`}>
                <ChevronRight className="w-4 h-4 inline mr-1" />
                {categoria.miembros.length} {categoria.miembros.length === 1 ? 'integrante' : 'integrantes'} en {categoria.titulo.toLowerCase()}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-linear-to-r from-[#009ADE]/5 via-[#E32726]/5 to-[#FFD600]/5 rounded-[3rem] p-12 text-center border border-gray-100">
          <HeartHandshake className="w-12 h-12 text-[#009ADE] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">
            ¿Querés ser parte de nuestro equipo?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Siempre estamos buscando personas apasionadas por la educación inclusiva. Sumate a nuestra misión.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#009ADE] text-white font-bold rounded-full hover:bg-[#007BB5] transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-200">
            Ver Oportunidades
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}