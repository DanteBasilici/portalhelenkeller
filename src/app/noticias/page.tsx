import Navbar from "@/components/Navbar";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { NOTICIAS } from "./datos";

export default function NoticiasPage() {
  const noticiaDestacada = NOTICIAS[0];
  const noticiasSecundarias = NOTICIAS.slice(1);

  return (
    <main className="min-h-screen bg-[#f9f9f9] pb-24 font-serif">
      {/* Cabecera Oscura para que el Navbar se vea perfecto */}
      <section className="bg-[#050505] pt-40 pb-16 px-6 lg:px-10 border-b border-white/10">
        <Navbar />
        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>
            El Diario de HK
          </h1>
          <div className="w-full h-[1px] bg-white/20 my-4"></div>
          <div className="w-full h-[2px] bg-white/40 mb-4"></div>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-sans font-bold">
            Edición Oficial — Noticias, Eventos y Novedades de nuestra Institución
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-16">
        
        {/* NOTICIA DESTACADA */}
        {noticiaDestacada && (
          <Link href={`/noticias/${noticiaDestacada.id}`} className="group block mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 pr-0 lg:pr-10">
                <div className="flex items-center gap-3 mb-4 font-sans">
                  <span className="text-[#E32726] font-black uppercase tracking-widest text-xs">{noticiaDestacada.categoria}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar className="w-3 h-3"/> {noticiaDestacada.fecha}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight group-hover:text-[#009ADE] transition-colors" style={{ fontFamily: "Georgia, serif" }}>
                  {noticiaDestacada.titulo}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
                  {noticiaDestacada.extracto}
                </p>
                <span className="inline-block font-sans font-bold text-sm text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-1 group-hover:text-[#009ADE] group-hover:border-[#009ADE] transition-all">
                  Leer artículo completo
                </span>
              </div>
              <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] overflow-hidden rounded-sm bg-gray-200">
                <img src={noticiaDestacada.imagen} alt={noticiaDestacada.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
              </div>
            </div>
          </Link>
        )}

        <div className="w-full h-[1px] bg-gray-300 mb-16"></div>

        {/* NOTICIAS SECUNDARIAS */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <h3 className="text-2xl font-black text-gray-900 border-b-2 border-gray-900 pb-4 mb-4 font-sans uppercase tracking-tight">Últimas Noticias</h3>
            
            {noticiasSecundarias.map((noticia) => (
              <Link href={`/noticias/${noticia.id}`} key={noticia.id} className="group flex flex-col sm:flex-row gap-8 items-start border-b border-gray-200 pb-12 last:border-0">
                <div className="w-full sm:w-1/3 aspect-video sm:aspect-square overflow-hidden bg-gray-200 rounded-sm shrink-0">
                  <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                </div>
                <div className="w-full sm:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 font-sans">
                    <span className="text-[#E32726] font-bold uppercase tracking-wider text-[10px]">{noticia.categoria}</span>
                    <span className="text-gray-400 text-[10px] flex items-center gap-1"><Calendar className="w-3 h-3"/> {noticia.fecha}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#009ADE] transition-colors" style={{ fontFamily: "Georgia, serif" }}>
                    {noticia.titulo}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                    {noticia.extracto}
                  </p>
                  <span className="font-sans text-xs font-bold text-gray-500 group-hover:text-[#009ADE] transition-colors">Leer más →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block border-l border-gray-200 pl-16">
            <h3 className="text-sm font-black text-gray-900 border-b-2 border-gray-900 pb-2 mb-8 font-sans uppercase tracking-widest text-center">Sobre HK Noticias</h3>
            {/* ARREGLADO EL ERROR DE COMILLAS ACÁ ↓ */}
            <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 font-sans italic">
              &quot;Un espacio dedicado a compartir los logros, avances y el día a día de la comunidad de la Escuela Helen Keller. Porque cada pequeño paso merece ser contado.&quot;
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}