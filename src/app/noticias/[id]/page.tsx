import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { NOTICIAS } from "../datos";

export default async function NoticiaIndividualPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const noticia = NOTICIAS.find(n => n.id === id);

  if (!noticia) notFound(); 

  return (
    <main className="min-h-screen bg-white pb-24 font-sans">
      <section className="bg-[#050505] pt-32 pb-10 px-6 lg:px-10">
        <Navbar />
        <div className="max-w-screen-md mx-auto">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4" />
            Volver al Diario
          </Link>
        </div>
      </section>

      <article className="max-w-screen-md mx-auto px-6 pt-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-red-50 text-[#E32726] px-3 py-1 rounded-full font-black uppercase tracking-widest text-[10px]">
            {noticia.categoria}
          </span>
          <span className="text-gray-500 text-xs font-bold flex items-center gap-1">
            <Calendar className="w-3 h-3"/> {noticia.fecha}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
          {noticia.titulo}
        </h1>

        <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-md mb-12 bg-gray-100">
          <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {noticia.contenido.map((parrafo, index) => (
            <p key={index} className="mb-6 text-lg md:text-xl font-serif">
              {parrafo}
            </p>
          ))}
        </div>

        {/* ACÁ ESTÁ LA MAGIA DEL BOTÓN DE LINK */}
        {noticia.linkRelacionado && (
          <div className="mt-10">
            <a 
              href={noticia.linkRelacionado.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#009ADE] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {noticia.linkRelacionado.texto}
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
            Publicado por Escuela Helen Keller
          </p>
        </div>
      </article>
    </main>
  );
}