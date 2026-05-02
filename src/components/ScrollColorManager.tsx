"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollColorManager() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    // Lista de todas las clases de scroll
    const scrollClasses = [
      "scroll-home",
      "scroll-historia",
      "scroll-especialidades",
      "scroll-recursos",
      "scroll-contacto",
    ];

    // Remover todas las clases anteriores
    body.classList.remove(...scrollClasses);

    // Determinar qué clase aplicar según la ruta
    const applyScrollClass = (className: string) => {
      body.classList.add(className);
    };

    if (pathname === "/") {
      applyScrollClass("scroll-home");
    } else if (pathname.startsWith("/historia")) {
      applyScrollClass("scroll-historia");
    } else if (pathname.startsWith("/especialidades")) {
      applyScrollClass("scroll-especialidades");
    } else if (pathname.startsWith("/recursos") || pathname.startsWith("/#recursos")) {
      applyScrollClass("scroll-recursos");
    } else if (pathname.startsWith("/contacto") || pathname.startsWith("/#contacto")) {
      applyScrollClass("scroll-contacto");
    } else {
      // Por defecto, usar colores de home
      applyScrollClass("scroll-home");
    }

    // Limpiar al desmontar
    return () => {
      body.classList.remove(...scrollClasses);
    };
  }, [pathname]);

  return null; // Este componente no renderiza nada
}