# ZERRO Aberturas — Web Producción

## Estructura de archivos

```
zerro-web/
├── index.html        ← Página principal con SEO completo
├── styles.css        ← Estilos optimizados
├── site.js           ← JavaScript (navbar, form, animaciones)
├── robots.txt        ← SEO crawling rules
├── sitemap.xml       ← SEO sitemap
├── vercel.json       ← Configuración de deploy en Vercel
└── assets/
    ├── logo.png          ← Logo color (subir manualmente)
    ├── logo_bn.png       ← Logo blanco (subir manualmente)
    ├── favicon.png       ← Favicon (subir manualmente)
    └── og-image.jpg      ← Imagen Open Graph 1200x630px (subir manualmente)
```

## Deploy en Vercel (paso a paso)

1. Creá una cuenta en https://vercel.com (gratis)
2. Instalá Vercel CLI: `npm i -g vercel`
3. Desde la carpeta del proyecto: `vercel`
4. Seguí los pasos del wizard
5. Apuntá tu dominio zerroaberturas.com.ar a Vercel

## Configurar Formspree (formulario de contacto)

1. Ir a https://formspree.io
2. Crear cuenta gratuita
3. Crear nuevo form → copiar el ID (ej: `xpzgkwrb`)
4. En index.html, reemplazar `YOUR_FORM_ID` por tu ID real:
   `action="https://formspree.io/f/xpzgkwrb"`

## Pendiente de subir

- [ ] logo.png (logo color de ZERRO)
- [ ] logo_bn.png (logo blanco/negativo)
- [ ] favicon.png (32x32 o 64x64px)
- [ ] og-image.jpg (imagen para redes sociales, 1200x630px)
- [ ] Reemplazar YOUR_FORM_ID en el formulario con el ID de Formspree
- [ ] Verificar número de WhatsApp: 5492213047332
- [ ] Reemplazar imágenes de Unsplash por fotos reales de ZERRO

## SEO incluido

- Meta tags completos
- Open Graph para Facebook/Instagram
- Twitter Card
- Schema.org LocalBusiness
- robots.txt
- sitemap.xml
- Canonical URL
- Semantic HTML (header, main, section, article, footer)
- Alt text en imágenes
- ARIA labels para accesibilidad

## Google Ads

El GTM (GTM-WRVFTLH7) ya está integrado. Para Google Ads:
1. Crear cuenta Google Ads
2. Vincular con Google Analytics vía GTM
3. Configurar conversiones: form_submit_contacto, click_whatsapp_*
