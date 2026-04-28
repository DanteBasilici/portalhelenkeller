"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // ← Agregado para poder usar el logo

interface HeroProps {
  videoSrc?: string;
  logoSrc?: string; // ← Agregamos el prop para el logo
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroSection({
  videoSrc = "/video/hero.mp4",
  logoSrc = "/logo-escuela.png", // ← Logo por defecto
  title = "Esc. Nro. 2-006 Helen Keller.", // ← Nuevo título por defecto
  ctaLabel = "Más información",
  ctaHref = "#",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 pl-10 lg:pl-20">
        <p className="mb-4 text-[12px] font-medium tracking-[0.35em] text-white/80 uppercase">
          BIENVENIDOS A LA
        </p>

        {/* ── Logo de la escuela reemplazando las letras gigantes ── */}
        <div className="mb-1 select-none">
          <Image
            src={logoSrc}
            alt="Logo Escuela"
            width={200}
            height={200}
            priority
            className="w-36 drop-shadow-2xl md:w-48 lg:w-[220px]" 
            // ↑ Le puse anchos responsivos: 36 en celular, 48 en tablet, 220px en compu.
          />
        </div>

        {/* ── Título Actualizado ── */}
        <h1
          className="mt-4 text-white font-medium drop-shadow-lg"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)", // Lo hice un poquito más grande para que se luzca
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h1>

        <div className="mt-6">
          <Link
            href={ctaHref}
            className="inline-block rounded-sm bg-[#1C69D4] px-8 py-3 text-[14px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#1557b8] hover:shadow-[0_4px_20px_rgba(28,105,212,0.5)] active:scale-[0.98]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 right-8 hidden flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-light tracking-[0.3em] text-white/60 uppercase">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/80 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { height: 0%; top: 0; }
          50%  { height: 100%; top: 0; }
          100% { height: 0%; top: 100%; }
        }
      `}</style>
    </section>
  );
}