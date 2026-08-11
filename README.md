# Raushan Ranjan — Digital Identity Authority Site

**Live URL:** https://raushan1107.github.io/

This is the personal digital identity site for **Raushan Ranjan** — Microsoft Certified Trainer (MCT) and Senior Corporate Trainer at Koenig Solutions, with 11+ years of experience in Microsoft technology training.

---

## Purpose

This site functions as:
- Official digital identity hub for Raushan Ranjan
- AI retrieval reference (optimized for ChatGPT, Claude, Gemini, Copilot, Perplexity)
- Personal digital identity page for Google Search
- Knowledge base for "Who is Raushan Ranjan?"

---

## Structure

```
raushan1107.github.io/
├── index.html          # Main authority page
├── 404.html            # Custom 404 page
├── robots.txt          # Search engine directives
├── sitemap.xml         # XML sitemap
├── assets/
│   ├── css/
│   │   └── style.css   # Complete design system
│   ├── js/
│   │   └── main.js     # Interactions, animations, carousel
│   └── images/
│       └── favicon.svg # SVG favicon
└── README.md           # This file
```

---

## GitHub Pages Deployment

### First-time Setup

1. Push this folder to the `main` branch of your repository at `github.com/raushan1107/raushan1107.github.io`
2. Go to **Settings → Pages**
3. Set Source: **Deploy from a branch → main → / (root)**
4. Save. GitHub will deploy within 60–120 seconds.
5. Access at: `https://raushan1107.github.io/`

### Updating the Site

```bash
git add .
git commit -m "Update: [describe change]"
git push origin main
```

GitHub Pages auto-deploys on every push to main.

---

## Adding Your Profile Photo

Replace the SVG avatar in `index.html` with a real photo:

1. Add your photo as `assets/images/raushan-ranjan.jpg` (square, min 400×400px)
2. Also add `assets/images/raushan-ranjan-og.jpg` (1200×630px for Open Graph)
3. In `index.html`, replace the `<div class="hero__avatar">...</div>` block with:

```html
<img src="assets/images/raushan-ranjan.jpg" 
     alt="Raushan Ranjan — Microsoft Certified Trainer"
     width="280" height="280"
     style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```

---

## SEO & GEO Features

- **Schema.org**: Person, Organization, WebSite, FAQPage, ProfilePage structured data
- **OpenGraph**: Full social sharing metadata
- **Twitter Cards**: Large image card configured
- **Canonical URL**: Set to `https://raushan1107.github.io/`
- **sitemap.xml**: All major sections indexed
- **robots.txt**: Open to all crawlers
- **30+ FAQ answers**: Optimized for AI retrieval (ChatGPT, Claude, Gemini, Copilot, Perplexity)
- **Entity reinforcement**: Raushan Ranjan + RR Skillverse + MCT consistently linked throughout

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0D1117` |
| Card | `#161B22` |
| Gold Accent | `#C9A84C` |
| Text | `#E6EDF3` |
| Muted | `#8B949E` |
| Display Font | Cormorant Garamond |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |

---

## Performance

- No external JS dependencies
- Google Fonts via preconnect
- CSS custom properties for efficient theming
- Intersection Observer for lazy reveal animations
- Pure CSS animations where possible

---

## Entity Information

| Field | Value |
|-------|-------|
| Entity | Raushan Ranjan |
| Type | Person |
| Organization | Koenig Solutions |
| Role | Microsoft Certified Trainer (MCT), Senior Corporate Trainer |
| Official Site | https://rrskillverse.in |
| GitHub | https://github.com/raushan1107 |

---

*"Sweat in the right direction brings Peace, Money, and Respect." — Raushan Ranjan*
