# 🚀 Cómo publicar ZERRO Aberturas con GitHub + Vercel

Tu sitio es **100% estático** (HTML + CSS + JS, sin frameworks ni build).
Eso significa que Vercel lo detecta solo y lo publica en segundos. No hay
que compilar nada.

---

## ✅ Qué subir

Subí **todo el contenido de la carpeta `export/`** a un repositorio de GitHub.
Es importante que el archivo **`index.html` quede en la raíz del repo**, no
dentro de otra subcarpeta.

Estructura esperada del repositorio:

```
tu-repo/
├── index.html        ← página principal (debe estar en la raíz)
├── styles.css
├── site.js
├── vercel.json       ← configuración de Vercel (cache + URLs limpias)
├── .gitignore
├── fonts/
│   ├── BebasNeue-Regular.ttf
│   └── Inter-VariableFont_opsz_wght.ttf
└── assets/
    ├── logo-primary.png
    ├── logo-white.png
    ├── logo-isotype-white.png
    └── img/              ← fotos de las líneas (locales)
```

---

## 1️⃣ Subir a GitHub

### Opción A — desde la web (sin instalar nada)
1. Entrá a https://github.com/new y creá un repositorio nuevo
   (ej: `zerro-aberturas`). Dejalo **Public** o **Private**, da igual.
2. En la página del repo vacío, clic en **"uploading an existing file"**.
3. Arrastrá **todos los archivos y carpetas de `export/`** (no la carpeta
   `export` en sí — su *contenido*).
4. Clic en **Commit changes**.

### Opción B — desde la terminal (Git)
```bash
cd export
git init
git add .
git commit -m "ZERRO Aberturas — sitio web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/zerro-aberturas.git
git push -u origin main
```

---

## 2️⃣ Publicar en Vercel

1. Entrá a https://vercel.com y registrate / iniciá sesión **con tu cuenta
   de GitHub** (botón "Continue with GitHub").
2. Clic en **Add New… → Project**.
3. Elegí el repositorio `zerro-aberturas` y clic en **Import**.
4. En la pantalla de configuración:
   - **Framework Preset:** `Other` (o lo deja en *No Framework*) ✔
   - **Build Command:** dejalo **vacío**.
   - **Output Directory:** dejalo **vacío** (la raíz).
   - **Install Command:** dejalo vacío.
5. Clic en **Deploy**.

En ~20 segundos tu sitio queda online en una URL tipo
`https://zerro-aberturas.vercel.app`. 🎉

> Cada vez que hagas un cambio y lo subas a GitHub (`git push` o subiendo
> archivos por la web), Vercel **vuelve a publicar automáticamente**. No
> tenés que hacer nada más.

---

## 3️⃣ (Opcional) Tu propio dominio

Si tenés un dominio (ej: `zerroaberturas.com.ar`):
1. En el proyecto de Vercel → pestaña **Settings → Domains**.
2. Agregá tu dominio y seguí las instrucciones de DNS que te muestra Vercel
   (cambiar registros A / CNAME en donde compraste el dominio).

---

## 🖼️ Imágenes (100% locales)

Todas las fotos de las **6 líneas de aluminio** y sus galerías ya están
**descargadas dentro del repo** en `assets/img/`. El sitio **no depende de
ningún servicio externo** — funciona aunque no haya internet hacia otros
dominios.

> Estas son fotos genéricas de referencia (aberturas / arquitectura). Cuando
> tengas **fotos reales de tus trabajos**, reemplazá los archivos en
> `assets/img/` manteniendo el mismo nombre, o avisame y actualizo las rutas.

---

## 📂 Archivos de este sitio

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa (una sola página, todas las secciones) |
| `styles.css` | Todos los estilos |
| `site.js` | JS vanilla: navbar sticky, menú móvil, scroll suave |
| `vercel.json` | Cache de fuentes/assets + URLs limpias |
| `fonts/` | Bebas Neue (títulos) + Inter (texto) |
| `assets/` | Logos de ZERRO |
| `README.md` | Documentación de diseño (colores, tipografía, secciones) |
