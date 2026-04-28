# 📖 Guía Maestra: Cómo Administrar el Diario de HK

> **Tu manual de usuario.** Guardátelo bien.

---

## 🗂️ El archivo que importa

Toda la magia sucede en **un solo lugar**:

```
src/app/noticias/datos.ts
```

Para agregar una nueva noticia, **no necesitás tocar NADA de diseño**. Solo vas a ese archivo y agregás un bloque arriba de la lista.

---

## 🧱 El Bloque Perfecto de una Noticia

```typescript
{
  id: "titulo-de-tu-noticia-sin-espacios",
  fecha: "25 de Abril, 2026",
  categoria: "Eventos",
  titulo: "¡Ganamos la feria de ciencias!",
  extracto: "Un breve resumen de 2 renglones para atrapar al lector en la portada...",
  imagen: "/fotos/feria.jpg", // O un link de internet
  contenido: [
    "Este es el primer párrafo de la noticia. Se escribe siempre entre comillas y con coma al final.",
    "Este es el segundo párrafo. El sistema se encarga solo de separarlos y ponerles la letra linda.",
    "Y este es el tercer párrafo."
  ],
  // OPCIONAL: Si lo ponés, aparece un botón azul al final
  linkRelacionado: {
    texto: "Ver fotos del evento",
    url: "https://instagram.com/tu-link-aca"
  }
},
```

---

## ❓ Preguntas Frecuentes

### 1. 🖼️ ¿Cómo poner Imágenes?

Tenés dos opciones, igual de válidas:

| Opción | Cómo hacerlo |
|--------|--------------|
| **A – Local** *(Recomendado)* | Copiás tu foto (ej: `evento.jpg`) a la carpeta `public/` del proyecto. En `datos.ts` escribís: `imagen: "/evento.jpg"` |
| **B – Internet** | Buscás una foto, clic derecho → *Copiar dirección de la imagen*, y la pegás entera: `imagen: "https://midominio.com/foto.jpg"` |

---

### 2. 📝 ¿Cómo funcionan los Párrafos (`contenido`)?

Fijate que `contenido` tiene corchetes `[ ]` — eso es un **Array** (lista).

- Cada párrafo de tu noticia es **un elemento de la lista**.
- Escribís el texto entre comillas dobles `" "`.
- Separás cada párrafo del siguiente con una **coma** `,`.

El sistema toma cada elemento y lo transforma automáticamente en un párrafo hermoso con letra de diario. ✨

---

### 3. 🔗 ¿Cómo agregar Links extra? (Botones)

Cada noticia puede tener un *llamado a la acción* al final. Agregá esto al final del bloque:

```typescript
linkRelacionado: {
  texto: "Entrar a la aplicación",
  url: "https://tecladohelenkeller.vercel.app/"
}
```

- ✅ **Si lo agregás** → aparece un botón azul brillante al terminar la nota.
- ➖ **Si no lo agregás** → no pasa nada, la nota termina normal.

---

### 4. 🚀 ¿Cómo hacer el Deploy?

Como el sitio es **estático (SSG)** y no usa base de datos, el proceso es simple:

1. **Guardás** el archivo `datos.ts`.
2. **Commit + push** a tu repositorio de GitHub (o arrastrás la carpeta a Netlify/Vercel si lo hiciste manual).
3. ¡El servidor **re-compila en ~10 segundos** y la noticia nueva aparece automáticamente en la portada como **Destacada**! 🎉

---

> 💡 **Tip:** El `id` de cada noticia debe ser único y sin espacios. Usá guiones medios para separar palabras: `"feria-de-ciencias-2026"`.