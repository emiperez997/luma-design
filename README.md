# Luma Digital — landing en Astro

## Comandos
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (sitio estático)
npm run preview
```

## Dónde se edita cada cosa
- **Contenido** (textos, servicios, trabajos, pasos, links de contacto): `src/data/site.ts`
- **Colores y tipografías**: variables en `src/styles/global.css` (`:root`)
- **Número de WhatsApp**: `whatsappNumber` en `src/data/site.ts` (formato `549...`, sin `+`)

## Trabajos con imágenes reales
Por defecto las tarjetas usan mockups dibujados en CSS (`cv`, `laptop`, `flyer`, `phone`).
Para usar una imagen, ponela en `public/trabajos/` y en `site.ts`:
```ts
{ title: 'Flyer', meta: 'Café Local', image: '/trabajos/cafe.jpg' }
```

## Estructura
```
src/
  data/site.ts            ← todo el contenido
  styles/global.css       ← tokens de diseño
  layouts/Base.astro
  pages/index.astro       ← orden de secciones
  components/
    Header, Hero, Services, WhyUs, Works, Process, CtaBanner, Footer
    Icon, Logo, SectionHeading
    mockups/  Laptop, Phone, CvSheet, Flyer, Plant, Mockup
```

Tipografías: Fraunces (títulos), Inter (texto) y Caveat (nota manuscrita), servidas localmente con Fontsource.
