# Página de Onboarding — SkillsPack

Página de bienvenida (onboarding) autónoma, sin dependencias ni build. Solo HTML, CSS y JavaScript puro.

## Cómo usarla

Abre `index.html` en tu navegador, o sírvela localmente:

```bash
cd onboarding
python3 -m http.server 8000
# Abre http://localhost:8000
```

## Características

- Flujo de 4 pasos con barra de progreso.
- Captura de perfil (nombre y rol).
- Selección de intereses con "chips".
- Resumen final y guardado en `localStorage` (`skillspack:onboarding`).
- Diseño responsive y modo oscuro.

## Archivos

- `index.html` — estructura y contenido.
- `styles.css` — estilos y tema.
- `onboarding.js` — lógica de navegación y estado.
