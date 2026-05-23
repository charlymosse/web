# Brief para Claude Code — Web personal de Charly Mosse

Este documento contiene todo el contexto, decisiones de diseño y código generado para que puedas continuar el desarrollo en Claude Code. Leer entero antes de tocar nada.

---

## 1. Quién es el cliente (yo)

**Charly Mosse** — Consultor independiente de operaciones y automatización.

Perfil híbrido entre operaciones, estrategia, automatización y análisis de datos, con fuerte foco en eficiencia operativa y tecnología aplicada a negocios. Tiene experiencia liderando equipos y proyectos complejos, especialmente en recruiting, operaciones, fraude, reporting y optimización de procesos.

### Qué hace

Ayuda a empresas a ordenar y profesionalizar operaciones usando automatización, sistemas y estructura de datos. Suele trabajar con empresas medianas o founders que crecieron rápido y todavía operan con muchos procesos manuales.

### Tipos de clientes que trabaja

- Empresas de diseño/interiorismo
- Gastronomía
- Recruiting y servicios
- Operaciones comerciales
- Equipos administrativos
- Empresas con muchas planillas manuales y procesos desordenados

### Servicios concretos

- Automatización de procesos con Google Sheets, Apps Script y AI
- Diseño de dashboards operativos y financieros
- Integración entre herramientas
- Reestructuración de planillas complejas
- Centralización de información
- Reporting automático
- Estandarización operativa
- Optimización de workflows
- Sistemas de seguimiento de proyectos, proveedores, costos y entregas
- Implementación de lógica de negocio dentro de planillas
- Creación de herramientas internas low-code/no-code

### Estilo de trabajo

- Muy orientado a entender el problema operativo real antes de proponer herramientas
- Busca reducir trabajo manual, errores humanos y dependencia de personas específicas
- Enfoque práctico: prioriza soluciones rápidas, útiles y mantenibles
- Mezcla pensamiento estratégico con ejecución técnica
- Usa AI como acelerador operativo y creativo

### Herramientas que usa

Google Sheets, Apps Script, SQL/MySQL, Airtable, Looker Studio, APIs, automatizaciones, AI tools, Canva/Slides.

---

## 2. Decisiones estratégicas tomadas (no cambiar sin discutir)

| Decisión | Elegido |
|---|---|
| Objetivo de la web | Las tres cosas (leads + autoridad + portfolio), pero prioriza leads |
| Posicionamiento | Híbrido: piensa el sistema + lo construye |
| Talenters | Es **un cliente más**, NO parte de la identidad. Aparece como case study anonimizado ("una consultora de recruiting ejecutivo"). No declarar vínculo. |
| Cliente ideal | Mix, pero priorizando founders de empresas tradicionales (diseño, gastro, servicios) |
| Diferenciales clave | (1) Piensa Y construye, no solo PPTs. (2) Usa AI con criterio práctico, no como buzzword |
| Modelo de contratación ideal | Mix: arranca con proyecto cerrado y queda retainer |
| Onda visual | Personal/editorial (estilo Tiago Forte, Khe Hy) |
| Formato | One-pager largo, scroll continuo |
| Blog/contenido | NO. Web estática. Contenido se mueve por LinkedIn. |
| Case studies disponibles | Talenters anonimizado bien contado. Otros casos están sin documentar (tarea pendiente del cliente). |

---

## 3. Posicionamiento final (el "elevator pitch" de la web)

> Charly Mosse ayuda a founders de empresas tradicionales (diseño, gastro, servicios) a transformar operaciones desordenadas en sistemas escalables. Combina estrategia, ejecución técnica y AI aplicada. No vende PowerPoints: diseña sistemas y los construye.

---

## 4. Stack técnico elegido

- **Framework:** Astro 4.x (no Next.js — es web estática pura)
- **Estilos:** Tailwind CSS 3.x
- **Hosting recomendado:** Vercel (también funciona Netlify o Cloudflare Pages)
- **Tipografías:** Fraunces (serif para títulos) + Inter (sans para cuerpo), cargadas desde Google Fonts
- **Sin JS framework reactivo:** Astro genera HTML puro. Solo hay un script vanilla para el fade-in al scrollear.

### Por qué Astro y no Next.js

- Web 100% estática, sin app, sin dashboard, sin backend
- Mejor performance y SEO out of the box
- Mucho más simple para iterar
- Deploy gratis y trivial

---

## 5. Identidad visual

### Paleta

```
Crema:  #FDFBF7 (fondo principal)
        #F8F4EC (secciones alternas)
        #EFE7D7 (terciario)

Tinta:  #1A1815 (texto principal, footer)
        #2A2723
        #3D3934
        #6B645B (texto secundario)
        #8B8478 (texto terciario)

Ocre:   #B5742A (acento — usar con criterio, NO en todos lados)
        #9C5F1F (hover)
        #7D4A14
```

### Reglas de uso del color

- El ocre se reserva para: cursivas de títulos clave, hover de botón principal, líneas de acento, foco editorial
- NO usar gradientes
- NO usar sombras decorativas
- Selección de texto: ocre con baja opacidad

### Tipografía

- **Fraunces** (variable, opsz 9..144, weights 300/400/500/600) para títulos y momentos editoriales
- **Inter** (weights 400/500/600) para cuerpo y UI
- Cursivas de Fraunces se usan para resaltar partes clave de títulos (ej: "sistemas que escalan", "hablemos 30 minutos")
- Tracking micro (`0.18em`) para etiquetas de sección

---

## 6. Estructura del one-pager (8 secciones)

1. **Nav** — Sticky con blur, links a secciones del scroll
2. **Hero** — Título grande con cursiva ocre, párrafo de posicionamiento, dos CTAs
3. **Manifesto / Problema** — Sección editorial en crema 100, párrafo serif grande que conecta con el dolor
4. **Enfoque** — 4 principios numerados (01-04) con titular + descripción
5. **Servicios** — 4 cards: Diagnóstico, Implementación, Automatización con AI, Retainer
6. **Caso** — Talenters anonimizado: narrativa a la izquierda + 3 métric cards a la derecha
7. **Industrias** — Tag cloud con industrias trabajadas
8. **Sobre mí** — Avatar/foto + bio editorial corta
9. **Contacto + Footer** — Sección dark con CTA grande, botones a Cal.com y email, footer minimal

---

## 7. Copy completo (final, aprobado)

### Hero
- Etiqueta: `CONSULTORÍA DE OPERACIONES Y AUTOMATIZACIÓN`
- Título: `Convierto operaciones caóticas en sistemas que escalan.` (cursiva ocre en "sistemas que escalan")
- Bajada: `Ayudo a founders de empresas que crecieron rápido a ordenar su operación con sistemas, datos y automatización. No vendo PowerPoints: construyo lo que diseño.`
- CTAs: `Agendar una llamada` / `Ver cómo trabajo`

### Manifesto
- Etiqueta: `— EL PROBLEMA`
- Frase principal (serif): `Tu empresa creció. Lo que antes funcionaba con tres planillas y buena memoria, ahora se cae cada vez que alguien se va de vacaciones.`
- Párrafo: `Hay información dispersa en mails, WhatsApps y Excels. Nadie sabe del todo cómo se hace cada cosa. Sumás gente y el caos crece. Querés ordenar pero no tenés tiempo, y los consultores tradicionales te entregan diagnósticos lindos que después tenés que ejecutar vos.`

### Enfoque (4 principios)

1. **Entender antes de automatizar** — Primero el problema operativo real. La herramienta viene después, no al revés.
2. **Pienso y construyo** — No solo recomiendo: diseño el sistema y lo dejo funcionando en tu operación.
3. **Simple y mantenible** — Sistemas que tu equipo pueda usar y mantener sin depender de mí ni de nadie.
4. **AI con criterio** — La uso donde aporta valor real, no como buzzword de venta. Mide o no va.

### Servicios

1. **Diagnóstico operativo** — Mapeo de procesos, identificación de cuellos de botella y plan priorizado de intervenciones. El punto de partida de todo.
2. **Diseño e implementación de sistemas** — Dashboards, planillas con lógica de negocio, integraciones entre herramientas y reporting automático. Lo construyo y lo dejo funcionando.
3. **Automatización con AI** — Apps Script, APIs y AI aplicada a procesos repetitivos. Foco en resultados medibles: menos errores, menos tiempo, menos dependencia.
4. **Consultoría continua** — Retainer mensual para equipos que ya tienen sistema en marcha y necesitan iterar, optimizar y sumar capacidades.

### Case study (Talenters anonimizado)

- Categoría: `Consultora de recruiting ejecutivo`
- Título: `De planillas dispersas a un sistema operativo unificado.`
- Párrafo 1: `Diseñé y construí el sistema interno de gestión de búsquedas: pipeline de candidatos, métricas de proceso, reporting automático para clientes y dashboards ejecutivos. Migración progresiva sin frenar la operación del día a día.`
- Párrafo 2: `Hoy el equipo opera sobre una única fuente de verdad, con visibilidad en tiempo real del estado de cada búsqueda y reportes que antes tomaban horas se generan solos.`
- Métricas (PLACEHOLDERS, reemplazar con reales):
  - Tiempo de reporting: `−85%`
  - Procesos automatizados: `12+`
  - Fuente única de verdad: `1`
- CTA: `Hablemos de tu caso →`

### Industrias
`Diseño e interiorismo` `Gastronomía` `Recruiting` `Servicios profesionales` `Operaciones comerciales` `Equipos administrativos` `E-commerce`

### Sobre mí

- Etiqueta: `— SOBRE MÍ`
- Frase principal (serif): `Soy Charly. Llevo años trabajando en la intersección entre operaciones, datos y tecnología.`
- Párrafo 1: `Lideré equipos en recruiting, operaciones, fraude y reporting. Diseñé pipelines, dashboards y sistemas internos para empresas que necesitaban dejar de operar a pulmón.`
- Párrafo 2: `Hoy hago lo mismo como consultor independiente: pienso el sistema, lo construyo, y me voy cuando ya no me necesitan. Trabajo desde Buenos Aires con clientes en toda Latam.`

### CTA final + Footer
- Título: `Si sentís que tu operación está atada con alambre, hablemos 30 minutos.` (cursiva ocre en "hablemos 30 minutos")
- Bajada: `Llamada sin compromiso. Te cuento si puedo ayudarte y, si no, te oriento hacia quien sí.`
- CTAs: `Agendar llamada` (Cal.com) / `hola@charlymosse.com`
- Footer: `© 2026 Charly Mosse · Buenos Aires` + LinkedIn + Email

---

## 8. Estructura de archivos generada

```
charly-mosse-web/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── .gitignore
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   └── index.astro
    ├── styles/
    │   └── global.css
    └── components/
        ├── Nav.astro
        ├── Hero.astro
        ├── Manifesto.astro
        ├── Enfoque.astro
        ├── Servicios.astro
        ├── Caso.astro
        ├── Industrias.astro
        ├── SobreMi.astro
        └── Contacto.astro
```

---

## 9. Cómo correr y deployar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

Deploy: subir a GitHub → conectar a Vercel → deploy automático.

---

## 10. Tareas pendientes prioritarias (orden sugerido)

### Antes de salir al aire
1. **Reemplazar el avatar placeholder** ("CM") por una foto real en `SobreMi.astro`. Idealmente en blanco y negro o con paleta cálida.
2. **Configurar link de Cal.com** en `Contacto.astro` (hoy apunta a `https://cal.com/charlymosse` — verificar/cambiar)
3. **Confirmar email real** en `Contacto.astro` (hoy: `hola@charlymosse.com`)
4. **Setear LinkedIn URL** en el footer (`Contacto.astro`)
5. **Reemplazar métricas placeholder** del case study en `Caso.astro` por números reales y defendibles
6. **Dominio definitivo** en `astro.config.mjs` cuando lo registre

### Mejoras visuales sugeridas (post-launch)
1. **Microanimación al hero**: stagger de aparición de etiqueta → título → bajada → botones (CSS animation-delay)
2. **Cursor custom o subrayado animado** en links del nav
3. **Foto en hero**: considerar agregar una foto pequeña tipo polaroid o circular al costado del título principal
4. **Sutil decoración**: una línea ocre vertical sutil al costado de los párrafos serif en el manifesto y CTA final
5. **Smooth scroll behavior** ya está, pero podemos pulir el easing
6. **Cargar Fraunces en font-display: swap** y self-hostearla si la performance lo amerita (no crítico)

### Features para v2 (no urgente)
1. **Más case studies**: cuando Charly los documente, agregar 2-3 más. Puede ser:
   - Carrusel horizontal de 3 casos con scroll snap
   - Sección expandible (sin cambiar la URL)
   - Subpáginas individuales `/casos/[slug]` — solo si los casos son MUY detallados
2. **Lead magnet**: PDF descargable estilo "10 señales de que tu operación necesita un sistema" → captura email
3. **Testimonios cortos**: una sola línea con nombre + cargo + empresa, después del case study
4. **Open Graph image custom**: SVG/PNG generado para que cuando alguien comparta el link tenga preview lindo
5. **Página `/gracias` o modal de éxito** después de enviar contacto
6. **Analytics**: Plausible o Umami (privacy-first), no Google Analytics

### Optimizaciones técnicas
1. **Image optimization** con `@astrojs/image` cuando se agregue la foto real
2. **Sitemap automático** con `@astrojs/sitemap`
3. **Schema.org JSON-LD** para Person + ProfessionalService en el `<head>` del Layout
4. **Lighthouse audit**: apuntar a 100/100/100/100. Astro ya debería darnos eso casi gratis.

---

## 11. Lo que NO hay que hacer

- ❌ Convertir esto en una agencia ("nosotros", "el equipo"). Es marca personal.
- ❌ Declarar el vínculo con Talenters como empleo o parte de identidad.
- ❌ Llenar la página de buzzwords ("sinergia", "transformación digital", "experiencias").
- ❌ Sumar 12 servicios. Los 4 actuales son intencionales.
- ❌ Agregar testimonios o casos falsos / inventados.
- ❌ Usar stock photos genéricos.
- ❌ Diseñar un blog dentro de la web. El contenido va a LinkedIn.
- ❌ Sumar carrusels automáticos, sliders, popups intrusivos.
- ❌ Cambiar la paleta a algo "más vibrante" o "moderno tech" — la elección editorial cálida es intencional.

---

## 12. Voz y tono del copy

- **Tuteo argentino** (vos, sos, querés)
- **Directo y concreto**, no corporativo
- **Honestidad como diferencial**: "No vendo PowerPoints", "te oriento hacia quien sí pueda"
- **Imágenes cotidianas**: "atado con alambre", "se cae cuando alguien se va de vacaciones", "WhatsApps y Excels"
- **Sin exclamaciones, sin emojis** en copy de la web
- **Frases cortas, con ritmo**. Pegar la idea, no decorarla.

---

## 13. Contexto adicional sobre cómo trabaja Charly (por si Claude Code necesita inferir)

Si necesitás imaginar al cliente ideal de Charly para inferir decisiones:
- Founder/dueño de empresa entre 5-50 empleados
- Factura ya bien pero siente que el día a día consume todo
- Tiene equipo administrativo/ops que opera a pulmón
- Probó "automatizar con Zapier" alguna vez sin éxito
- No tiene tiempo de aprender herramientas nuevas él mismo
- Valora a alguien que entienda su negocio Y pueda construir
- No quiere un proveedor más, quiere un partner operativo

Si tenés dudas de qué priorizar, prioriza **claridad y autoridad** sobre cualquier otra cosa. Esta web tiene que hacer que ese founder piense "este tipo me entiende, y además puede ejecutar".

---

## Fin del brief

Cualquier ambigüedad consultarla con Charly antes de implementar. El código actual es un v1 sólido, no un final cerrado: iterar libremente, pero respetando las decisiones estratégicas de las secciones 2-5.
