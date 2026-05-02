import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Recursos from "@/components/Recursos";
import Especialidades from "@/components/Especialidades";
import Contacto from "@/components/Contacto";
import Instalaciones from "@/components/Instalaciones"; // ← Importamos el nuevo componente

export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <div id="inicio">
        <Navbar />
        <HeroSection
          videoSrc="/video/hero.mp4" 
          logoSrc="/logo-escuela.png"
          title="Esc. Nro. 2-006 Helen Keller"
          ctaLabel="Ver Recursos Educativos"
          ctaHref="#recursos"
        />
      </div>

      <Instalaciones />
      <Recursos />
      <Especialidades />
      <Contacto />
      
    </main>
  );
}
