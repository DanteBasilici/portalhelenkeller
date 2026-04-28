// Le decimos a TypeScript la forma exacta que tiene una noticia
export interface Noticia {
  id: string;
  fecha: string;
  categoria: string;
  titulo: string;
  extracto: string;
  imagen: string;
  contenido: string[];
  linkRelacionado?: { // ← El signo de pregunta significa que es opcional
    texto: string;
    url: string;
  };
}

export const NOTICIAS: Noticia[] =[
  {
    id: "lanzamiento-arcade", 
    fecha: "20 de Octubre, 2026",
    categoria: "Novedades",
    titulo: "Lanzamos nuestra nueva plataforma Arcade HK",
    extracto: "Estamos muy felices de compartir con toda la comunidad nuestra nueva sala de juegos digitales adaptados. Esta herramienta permite a nuestros alumnos...",
    imagen: "https://images.pexels.com/photos/7350906/pexels-photo-7350906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contenido:[
      "Estamos muy felices de compartir con toda la comunidad nuestra nueva sala de juegos digitales adaptados, una plataforma revolucionaria para nuestra escuela.",
      "Esta herramienta fue desarrollada pensando en las necesidades específicas de los alumnos con ceguera y baja visión, combinando la diversión de los videojuegos arcade clásicos con objetivos terapéuticos y educativos.",
      "El Arcade HK cuenta actualmente con 10 juegos que estimulan la velocidad de reacción, la memoria auditiva, la orientación espacial y el uso avanzado del teclado. ¡Invitamos a todas las familias a probarlo desde sus casas!"
    ],
    // Ejemplo de cómo usar el link relacionado
    linkRelacionado: {
      texto: "Jugar ahora en el Arcade HK",
      url: "/#recursos"
    }
  },
  {
    id: "dia-del-estudiante",
    fecha: "15 de Septiembre, 2026",
    categoria: "Eventos",
    titulo: "Día del Estudiante en la Escuela: Risas, arte y música",
    extracto: "Festejamos el día del estudiante con una jornada llena de música, juegos táctiles y la inauguración de los nuevos materiales de plástica...",
    imagen: "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contenido:[
      "El pasado viernes celebramos el Día del Estudiante en las instalaciones de nuestra sede central. Fue una jornada llena de emoción, donde los verdaderos protagonistas fueron los alumnos.",
      "La mañana comenzó con un desayuno compartido, seguido de actividades recreativas organizadas por el equipo de Profesores de Educación Física. Destacamos especialmente el taller de música y percusión, que hizo vibrar a todo el patio.",
      "Para finalizar, se inauguraron los nuevos materiales táctiles del área de Plástica, donde cada estudiante pudo llevarse a casa una pequeña obra de arte modelada por ellos mismos."
    ]
  },
  {
    id: "nuevas-computadoras",
    fecha: "05 de Agosto, 2026",
    categoria: "Institucional",
    titulo: "Incorporamos nuevas computadoras para Tiflotecnología",
    extracto: "Gracias al apoyo de la comunidad, hemos incorporado tres nuevos equipos para el área de informática, los cuales ya cuentan con lectores de pantalla instalados...",
    imagen: "https://images.pexels.com/photos/7249185/pexels-photo-7249185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contenido:[
      "Nos enorgullece anunciar que nuestro laboratorio de Tiflotecnología ha crecido. Gracias al constante apoyo de la comunidad mendocina, hemos logrado adquirir tres nuevas computadoras de última generación.",
      "Estos equipos ya han sido configurados por nuestro administrador de red con los lectores de pantalla NVDA y Jaws, además de contar con auriculares aislantes de alta calidad.",
      "Con esta incorporación, reducimos el tiempo de espera por alumno en las prácticas de informática, garantizando que todos tengan acceso a la alfabetización digital, una herramienta clave para su autonomía futura."
    ]
  }
];