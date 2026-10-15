/**
 * Todo el contenido del sitio vive acá.
 * Para reutilizar la plantilla con otro cliente, alcanza con editar este archivo
 * (y los colores en src/styles/global.css).
 */
import type { IconName } from '../components/Icon.astro';

const whatsappNumber = '5491134853029'; // formato internacional, sin + ni espacios
const whatsappText = 'Hola Luma! Quería consultarles por un proyecto.';

export const site = {
  name: 'Luma Digital',
  tagline: 'Diseño que comunica',
  description:
    'Diseño de CV, landing pages, flyers y contenido para redes para personas y emprendimientos.',
  url: 'https://lumadigital.com.ar',
  year: 2026,

  contact: {
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
    instagram: 'https://www.instagram.com/luma.estudio.digital/',
  },

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué Luma', href: '#por-que-luma' },
    { label: 'Cómo trabajamos', href: '#proceso' },
  ],

  hero: {
    eyebrow: 'Diseño y soluciones digitales',
    title: ['Para personas', 'y emprendimientos.'],
    lead: 'Creamos piezas visuales y experiencias digitales que comunican con claridad lo que hacés.',
    highlights: ['CV', 'Landing pages', 'Flyers', 'Contenido para redes'],
    cta: 'Contanos qué necesitás',
    badges: [
      { icon: 'zap', text: 'Entregas ágiles' },
      { icon: 'message', text: 'Consultas por DM o WhatsApp' },
    ] satisfies { icon: IconName; text: string }[],
    note: 'Diseño que comunica.',
  },

  services: {
    eyebrow: 'Servicios',
    title: '¿Qué podemos hacer por vos?',
    lead: 'Soluciones visuales y digitales pensadas para que tu proyecto se vea mejor y comunique con más claridad.',
    items: [
      { icon: 'file', title: 'CV', text: 'Diseño y revisión de CV profesionales, claros y bien estructurados.' },
      { icon: 'monitor', title: 'Landing pages', text: 'Páginas web simples, modernas y enfocadas en tus objetivos.' },
      { icon: 'image', title: 'Flyers', text: 'Piezas gráficas para promocionar tus productos o servicios.' },
      { icon: 'phone', title: 'Contenido para redes', text: 'Diseños adaptados a tu marca para Instagram y otras plataformas.' },
    ] satisfies { icon: IconName; title: string; text: string }[],
    linkLabel: 'Conocé más',
  },

  why: {
    title: '¿Por qué Luma?',
    lead: 'Diseño, comunicación y atención personalizada.',
    items: [
      { icon: 'zap', title: 'Respuesta rápida', text: 'Nos adaptamos a tus tiempos y necesidades.' },
      { icon: 'user', title: 'Trato personalizado', text: 'Escuchamos tu idea y te asesoramos.' },
      { icon: 'palette', title: 'Diseño con criterio', text: 'Soluciones que combinan estética y funcionalidad.' },
      { icon: 'heart', title: 'Compromiso real', text: 'Tu proyecto también nos importa.' },
    ] satisfies { icon: IconName; title: string; text: string }[],
  },

  process: {
    title: 'Cómo trabajamos',
    lead: 'Un proceso simple y claro, de principio a fin.',
    steps: [
      { icon: 'message', title: 'Nos contás tu idea', text: 'Nos escribís por DM, WhatsApp o el formulario.' },
      { icon: 'file', title: 'Te enviamos una propuesta', text: 'Definimos alcance, tiempos y valores.' },
      { icon: 'palette', title: 'Diseñamos', text: 'Trabajamos en tu proyecto con comunicación constante.' },
      { icon: 'send', title: 'Entregamos', text: 'Recibís los archivos listos para usar.' },
    ] satisfies { icon: IconName; title: string; text: string }[],
  },

  cta: {
    eyebrow: 'Tu proyecto también puede comunicar mejor',
    title: '¿Empezamos?',
    lead: 'Contanos qué necesitás y te asesoramos sin compromiso.',
    primary: 'Escribinos por WhatsApp',
    secondary: 'O envianos un DM en Instagram',
  },

  footer: {
    note: 'Diseño y desarrollo con foco en lo que importa.',
  },
};
