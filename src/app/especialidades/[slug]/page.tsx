/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Eye, Book, MonitorSmartphone, Palette, Music, Dumbbell, Star, ArrowLeft, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react"; // ← ESTA LÍNEA ES NUEVA
import Link from "next/link";

interface Feature { titulo: string; desc: string; }
interface Destacado { icon: LucideIcon; titulo: string; desc: string; link?: string; }
interface Materia { icon: LucideIcon; nombre: string; }

interface EspecialidadData {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  color: string;
  imagen: string;
  gradientBg: string;
  borderColor: string;
  textColor: string;
  badgeBg: string;
  features?: Feature[];
  destacados?: Destacado[];
  materias?: Materia[];
}

const datosEspecialidades: Record<string, EspecialidadData> = {
  "atencion-temprana": {
    titulo: "Atención Temprana",
    subtitulo: "Los primeros pasos son los más importantes.",
    descripcion: "Nuestro servicio de Atención Temprana recibe a bebés y niños pequeños, brindando contención familiar y estrategias de estimulación sensorial, motriz y cognitiva. Buscamos potenciar al máximo su desarrollo en la etapa de mayor plasticidad cerebral.",
    color: "from-[#009ADE] to-cyan-400",
    imagen: "/temprana.jpg",
    gradientBg: "from-[#009ADE]/5 via-transparent to-[#009ADE]/5",
    borderColor: "border-[#009ADE]/20",
    textColor: "text-[#009ADE]",
    badgeBg: "bg-[#009ADE]/10",
    features:[
      { titulo: "Acompañamiento Familiar", desc: "Trabajamos junto a los padres para brindarles herramientas en el hogar." },
      { titulo: "Estimulación Sensorial", desc: "Juegos y actividades para despertar los sentidos y la curiosidad." }
    ]
  },
  "nivel-inicial": {
    titulo: "Nivel Inicial",
    subtitulo: "Aprender jugando y explorando el mundo.",
    descripcion: "El Nivel Inicial es un espacio mágico donde los niños interactúan, socializan y descubren su entorno de manera adaptada. Fomentamos la independencia, la orientación espacial y la iniciación al sistema Braille a través de metodologías lúdicas.",
    color: "from-[#E32726] to-red-400",
    imagen: "/inicial.jpg",
    gradientBg: "from-[#E32726]/5 via-transparent to-[#E32726]/5",
    borderColor: "border-[#E32726]/20",
    textColor: "text-[#E32726]",
    badgeBg: "bg-[#E32726]/10",
    features:[
      { titulo: "Juego Adaptado", desc: "Materiales didácticos con texturas, sonidos y contrastes." },
      { titulo: "Movilidad Básica", desc: "Primeros conceptos de orientación en espacios conocidos." }
    ]
  },
  "nivel-primario": {
    titulo: "Nivel Primario (Sede)",
    subtitulo: "Educación integral, innovación y desarrollo de autonomía.",
    descripcion: `En el Nivel Primario en sede transitan su escolaridad estudiantes con discapacidad visual y multidiscapacidad. La propuesta educativa acompaña sus trayectorias respetando sus ritmos, estilos de aprendizaje y formas de comunicación. A través de áreas como alfabetización, matemática, ciencias, braille y macrotipo, tiflotecnología, orientación y movilidad, actividades de la vida diaria, música, educación física y educación artística, se promueve el acceso al conocimiento y el desarrollo integral de cada estudiante.
                  El abordaje pedagógico se organiza desde una planificación centrada en la persona, donde cada estudiante es protagonista de su proceso, considerando sus intereses, necesidades y potencialidades. Se implementan sistemas y recursos específicos como comunicación aumentativa y alternativa, materiales táctiles y tecnologías de apoyo, priorizando el desarrollo de habilidades funcionales, sociales y comunicativas, especialmente en aquellos estudiantes con desafíos cognitivos y/o motores.
                  El trabajo se realiza de manera interdisciplinaria, en articulación con las familias y otras instituciones, generando un entorno accesible, estructurado y estimulante. De este modo, se favorece la autonomía, la participación en la vida cotidiana y la construcción de trayectorias educativas significativas.
`,
    color: "from-[#FFD600] to-yellow-500",
    imagen: "/sede.jpg",
    gradientBg: "from-[#FFD600]/5 via-transparent to-[#FFD600]/5",
    borderColor: "border-[#FFD600]/20",
    textColor: "text-[#FFD600]",
    badgeBg: "bg-[#FFD600]/10",
    destacados:[
      { icon: Book, titulo: "Alfabetización Avanzada", desc: "Fuerte trabajo en lectura y escritura Braille y tinta, mediante diversos recursos y materiales concretos, representativos y gráficos. Además utilizamos nuestra app digital propia para favorecer la conciencia fonológica, la correspondencia fonema-grafema y la estructuración léxica y gramatical de manera interactiva.", link: "https://alfabetizacion.vercel.app/" },
      { icon: Eye, titulo: "Estimulación Visual", desc: "Abordaje de estimulación visual a cargo del equipo docente, mediante diversos recursos visuales, entre ellos software propio, orientado a favorecer el funcionamiento visual de los estudiantes.", link: "https://estimulacionvisual.vercel.app/" }
    ],
    materias:[
      { icon: Dumbbell, nombre: "Educación Física y Deportes" },
      { icon: Music, nombre: "Música y Expresión Sonora" },
      { icon: Palette, nombre: "Plástica y Arte" },
    ]
  },
  "apoyo-inclusion": {
    titulo: "Apoyo a la Inclusión",
    subtitulo: "Puentes hacia la igualdad de oportunidades.",
    descripcion: "Nuestro equipo de inclusión acompaña a estudiantes con ceguera o baja visión que asisten a escuelas comunes. Asesoramos a los docentes de dichas instituciones, adaptamos el material de estudio y garantizamos que el estudiante tenga una trayectoria exitosa y sin barreras.",
    color: "from-[#009ADE] to-cyan-400",
    imagen: "/inclusion.jpg",
    gradientBg: "from-[#009ADE]/5 via-transparent to-[#009ADE]/5",
    borderColor: "border-[#009ADE]/20",
    textColor: "text-[#009ADE]",
    badgeBg: "bg-[#009ADE]/10",
    features:[
      { titulo: "Adaptación de Material", desc: "Transcipción a Braille y macrotipo de textos escolares." },
      { titulo: "Asesoramiento Docente", desc: "Capacitación a las escuelas de nivel para un trato adecuado." }
    ]
  },
  "tiflotecnologia": {
    titulo: "Tiflotecnología",
    subtitulo: "La tecnología como motor de independencia.",
    descripcion: "La tiflotecnología es el conjunto de técnicas, conocimientos y recursos adaptados. Enseñamos a nuestros alumnos a utilizar computadoras y dispositivos móviles mediante lectores de pantalla (como NVDA y Jaws), magnificadores y atajos de teclado, preparándolos para el mundo digital.",
    color: "from-[#E32726] to-red-400",
    imagen: "/tiflo.jpg",
    gradientBg: "from-[#E32726]/5 via-transparent to-[#E32726]/5",
    borderColor: "border-[#E32726]/20",
    textColor: "text-[#E32726]",
    badgeBg: "bg-[#E32726]/10",
    destacados:[
      { icon: MonitorSmartphone, titulo: "Manejo de Teclado y PC", desc: "Contamos con aplicaciones propias para aprender a utilizar el teclado sin necesidad de mirarlo.", link: "https://tecladohelenkeller.vercel.app/" }
    ]
  }
};

export default async function EspecialidadPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const data = datosEspecialidades[slug];

  if (!data) notFound(); 

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO */}
      <section className="relative bg-[#050505] pt-48 pb-40 px-6 lg:px-10 overflow-hidden">
        <Navbar />
        
        {/* Efectos de luz */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r ${data.color} opacity-[0.12] blur-[150px] rounded-full pointer-events-none`}></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <Link 
            href="/#especialidades" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-all mb-10 font-bold uppercase tracking-wider text-xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a Especialidades</span>
          </Link>
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${data.badgeBg} border ${data.borderColor} text-white/80 text-sm font-bold tracking-wider uppercase mb-8`}>
            <Sparkles className={`w-4 h-4 ${data.textColor}`} />
            <span>Especialidad</span>
          </div>
          
          {/* Título */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r ${data.color} mb-8 tracking-tight leading-[0.95] max-w-4xl`}>
            {data.titulo}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-white/70 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
            {data.subtitulo}
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 p-8 sm:p-12 lg:p-16">
          
          {/* IMAGEN DESTACADA */}
          <div className="w-full h-[250px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-16 relative shadow-lg group">
            <img 
              src={data.imagen} 
              alt={data.titulo} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Overlay con título */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className={`inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-bold`}>
                {data.titulo}
              </div>
            </div>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Columna izquierda - Descripción */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-black tracking-[0.2em] uppercase mb-8">
                <Star className="w-4 h-4 text-[#FFD600]" />
                <span>Sobre esta área</span>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium mb-12">
                {data.descripcion}
              </p>

              {/* Materias especiales */}
              {data.materias && (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] p-8 border border-gray-100">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Book className="w-5 h-5 text-[#009ADE]" />
                    Materias Especiales
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {data.materias.map((mat, idx) => {
                      const MatIcon = mat.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-default">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MatIcon className="w-5 h-5 text-gray-600" />
                          </div>
                          <span className="font-bold text-gray-800 text-sm">{mat.nombre}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Columna derecha - Features y Destacados */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Destacados con apps */}
              {data.destacados && data.destacados.map((dest, idx) => {
                const DestIcon = dest.icon;
                return (
                  <div key={idx} className={`bg-gradient-to-br ${data.gradientBg} border ${data.borderColor} rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all group`}>
                    <div className={`w-14 h-14 rounded-2xl ${data.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <DestIcon className={`w-7 h-7 ${data.textColor}`} />
                    </div>
                    <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">{dest.titulo}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {dest.desc}
                    </p>
                    {dest.link && (
                      <a 
                        href={dest.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`inline-flex items-center gap-2 ${data.textColor} font-bold hover:opacity-80 transition-all group/link`}
                      >
                        <span>Ver aplicación</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                )
              })}

              {/* Features / Puntos clave */}
              {data.features && (
                <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-8 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#E32726]" />
                    Puntos Clave
                  </h3>
                  <div className="space-y-6">
                    {data.features.map((feat, idx) => (
                      <div key={idx} className="relative pl-8">
                        <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#E32726] rounded-full shadow-lg shadow-red-200"></div>
                        <div className="absolute left-1 top-3 w-1 h-full bg-gradient-to-b from-[#E32726]/20 to-transparent"></div>
                        <h4 className="font-bold text-[#1a1a1a] mb-2 text-lg">{feat.titulo}</h4>
                        <p className="text-gray-600 font-medium leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA para volver */}
              <Link 
                href="/#especialidades"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#1a1a1a] text-white font-bold hover:bg-[#009ADE] transition-all duration-300 group mt-6"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Ver todas las especialidades</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}