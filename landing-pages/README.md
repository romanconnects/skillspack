# Enrollment Landing Page Template

A rebrandeable, single-file enrollment/checkout landing page modeled on a GHL
(GoHighLevel) enrollment funnel. Each page is one **self-contained HTML file**
(inline CSS + minimal JS, fonts via Google Fonts `<link>`) — no build step.
Open any `index.html` directly in a browser.

```
landing-pages/
├── README.md            ← you are here
├── _template/index.html ← MASTER template (Elevate gold/black reference)
└── berrios/index.html   ← client variant: Berrios Financial (Antonio Berrios)
```

## How the template works

Every page shares one skeleton (in section order):

1. **Header** — logo mark + brand name (centered in Preset A, left in Preset B)
2. **Hero** — eyebrow "SECURE ENROLLMENT", H1 program name, subtitle, primary CTA
3. **Info cards (2×2)** — Program / Coach / Duration / Deliverable
4. **Everything Included** — 2 columns of checkmark items in accent badges
5. **Scarcity badge** — "LIMITED SPOTS" pill + scarcity line + trust line
6. **Checkout module** — visual stepper (1 Contact → 2 Payment) + contact form + Next button
7. **FAQ** — native `<details>`/`<summary>` accordion on a light background
8. **Final CTA** — "Claim Your Spot Now"
9. **Footer** — logo, Pages column, Connect column, copyright

### The form is a visual placeholder

The contact form and stepper are **visual only** (non-functional). On deploy,
replace the `<form>` with **GHL's native form / order-form widget** so
submissions are actually captured. Look for the HTML comment marking the spot.

## CONTROL PANEL (rebrand in ~3 minutes)

Open the target `index.html` and edit only the `:root` block at the top of the
`<style>` tag (clearly marked `██ CONTROL PANEL ██`). The whole page recolors
and re-fonts from these variables:

| Variable | Role |
| --- | --- |
| `--brand-primary` | Main brand color (headings on light bg, links) |
| `--brand-accent` | Primary action color (buttons, highlights, badges) |
| `--brand-accent-2` | Secondary / lighter accent (gradients, hovers, dark-bg accents) |
| `--brand-accent-ink` | **Text color that sits ON the accent.** Dark on light accents, white on dark accents — mind the contrast |
| `--brand-dark` | Dark section background (header, hero, footer) |
| `--brand-surface` | Light page / card surface background |
| `--brand-text` | Default body text color |
| `--font-head` | Display / heading font family |
| `--font-body` | Body / UI font family |

To fully rebrand:

1. **Fonts** — update the Google Fonts `<link>` in `<head>`, then set
   `--font-head` / `--font-body`.
2. **Colors** — set the seven color variables above.
3. **Copy** — change the brand name, program name, coach, card values,
   included bullets, and FAQ text in the markup.
4. **Logo** — replace the `.logo-mark` (header and footer) with your real logo.
   Placeholder logo marks are flagged with HTML comments.
5. **Preset** — set `data-preset="A|B|C"` on `<body>` (see below).

## Layout presets — `data-preset` on `<body>`

Switch the whole page layout by changing one attribute. Presets are pure CSS
overrides (`body[data-preset="…"]`), no markup changes required.

- **Preset A** (default) — centered hero, symmetric full-width alternating
  sections, rounded corners.
- **Preset B** — left-aligned hero with reserved photo space on the right,
  asymmetric info-card grid, sharper corners. (Used by the Berrios variant.)
- **Preset C** — editorial / minimal: extra whitespace, squared corners, and a
  subtle darkening overlay on the hero.

The master `_template` ships all three; `A` is the default. `B` and `C`
visibly reorganize the hero and cards.

## The Berrios variant

`berrios/index.html` is the first client build:

- **Brand:** Berrios Financial, "AB" logo mark (CSS/SVG placeholder in brand
  red — HTML comments flag it for replacement with Antonio's real metallic AB
  PNG in GHL, both header and footer).
- **Program:** 90 Days Restart Coaching Program — coach **Antonio Berrios**.
- **Palette:** deep red `#940b15`, bright red `#be161b`, oxblood `#450202`
  dark backgrounds, charcoal `#343434` secondary, white ink on red.
- **Fonts:** Oswald (condensed, uppercase, letter-spaced hero H1 with a subtle
  red gradient) + Inter body.
- **Preset B** — left hero with a dashed **"PHOTO OF ANTONIO GOES HERE"**
  placeholder on the right (Antonio uploads his transparent-bg photo in GHL),
  plus a **signature-image placeholder** near the final CTA.
- **Copy:** "restart / comeback" tone throughout.

## Creating a new client variant

```bash
cp -r landing-pages/_template landing-pages/<client>
```

Then edit `landing-pages/<client>/index.html`: update the CONTROL PANEL
variables, swap the copy and logo, and pick a `data-preset`. Done.
