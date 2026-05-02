"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  videoSrc?: string;
  logoSrc?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroSection({
  videoSrc = "/video/hero.mp4",
  logoSrc = "/logo-escuela.png",
  title = "Esc. Nro. 2-006 Helen Keller.",
  ctaLabel = "Más información",
  ctaHref = "#",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay bloqueado");
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[85vh] sm:h-[90vh] lg:h-screen min-h-[500px] sm:min-h-[600px]">
      {/* Video background */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-fallback.jpg"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/70 sm:via-black/30 lg:from-black/70 lg:via-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Contenido principal */}
      <div className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-12 lg:pb-16 pl-6 sm:pl-10 lg:pl-20 pr-4 sm:pr-8 lg:pr-0">
        {/* Subtítulo */}
        <p className="mb-2 sm:mb-4 text-[10px] sm:text-[12px] font-medium tracking-[0.25em] sm:tracking-[0.35em] text-white/80 uppercase">
          BIENVENIDOS A LA
        </p>

        {/* Logo responsive - AHORA USA vh Y REM (respeta zoom) */}
        <div className="mb-1 sm:mb-2 select-none animate-fade-in-up">
          <Image
            src={logoSrc}
            alt="Logo Escuela Helen Keller"
            width={220}
            height={220}
            priority
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-56 2xl:w-60 h-auto max-w-[30vh] sm:max-w-[28vh] lg:max-w-[22vh] drop-shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Título responsive */}
        <h1
          className="mt-2 sm:mt-4 text-white font-medium drop-shadow-lg max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight animate-fade-in-up animation-delay-200"
          style={{
            fontSize: "clamp(1.125rem, 3vw, 2rem)",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h1>

        {/* CTA Button */}
        <div className="mt-4 sm:mt-6 lg:mt-8 animate-fade-in-up animation-delay-400">
          <Link
            href={ctaHref}
            className="inline-block rounded-sm bg-[#1C69D4] px-6 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#1557b8] hover:shadow-[0_4px_20px_rgba(28,105,212,0.5)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] font-light tracking-[0.3em] text-white/60 uppercase">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/80 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { height: 0%; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0%; top: 100%; }
        }
      `}</style>
    </section>
  );
}