# Landing Pages — Enrollment / Program

Plantilla base rebrandeable + páginas por cliente para replicar la página de
enrollment de "90 días" con branding distinto cada vez.

## Archivos
- `template-base.html` — plantilla maestra (branding Elevate, dorado/negro, Preset A). Es el molde.
- `clients/antonio-berrios.html` — cliente #1 (Berrios Financial, rojo/negro, Preset B con foto en el hero).

## Cómo previsualizar
No hay build. Abre el archivo directo en el navegador, o sirve la carpeta:

```
python3 -m http.server 8000
# luego abre http://localhost:8000/landing-pages/template-base.html
```

## Cómo rebrandear un cliente nuevo (~3 min)
Copia `template-base.html` a `clients/<cliente>.html` y edita SOLO:

1. **CONTROL PANEL** (bloque `:root` arriba): `--brand-accent`, `--brand-accent-2`,
   `--brand-accent-ink`, y las fuentes `--font-head` / `--font-body`.
   - `--brand-accent-ink` = color del texto ENCIMA del color de marca (botones).
     Acento claro (dorado) -> ink oscuro `#1a1a1a`. Acento oscuro (rojo/azul) -> ink `#ffffff`.
2. **Skin de layout**: en `<body data-preset="A">` cambia a `"B"` o `"C"`.
   Rota los presets entre los 10 para que ninguno se sienta clonado.
3. **Texto y logo**: nombre de marca, programa, coach, FAQ, links del footer.

## Presets
- **A** — hero centrado, cards redondeadas (= original).
- **B** — hero a la izquierda (deja espacio para foto), cards asimétricas, esquinas filosas, headings en mayúsculas.
- **C** — editorial, aireado, headings serif.

## Montaje en GHL
- Pega el HTML en un elemento Custom HTML/Code de ancho completo.
- El form es VISUAL: embebe el widget nativo de GHL para captura real.
- Reemplaza el placeholder del logo (`.logo__mark`) por un `<img>` del logo real.
- En páginas con foto (Preset B), reemplaza el frame del hero por la foto del coach (fondo transparente).
