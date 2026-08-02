import { writeFileSync } from 'node:fs'

const NAVY = '#0F2544'
const BRICK = '#C63527'
const PAPER = '#F7F4EF'

// Ícones line-art, viewBox 0 0 200 200, traço branco.
// Desenhados pra ler bem no crop circular de ~161px do Instagram:
// forma cheia, poucos detalhes, nada abaixo de 4px de traço no render final.
const icons = {
  kitchens: `
    <rect x="30" y="46" width="140" height="108" rx="6"/>
    <path d="M30 100h140"/>
    <path d="M100 46v108"/>
    <path d="M84 76h-14M130 76h-14M84 128h-14M130 128h-14"/>`,
  baths: `
    <path d="M28 106h144v10c0 24-20 44-44 44H72c-24 0-44-20-44-44v-10z"/>
    <path d="M52 106V56c0-11 9-20 20-20s20 9 20 20"/>
    <path d="M84 56h16"/>
    <path d="M56 160l-10 16M144 160l10 16"/>`,
  tile: `
    <rect x="26" y="42" width="148" height="116" rx="5"/>
    <path d="M26 80h148M26 118h148"/>
    <path d="M100 42v38M62 80v38M138 80v38M100 118v40"/>`,
  // Espelha o slider de arraste do site: moldura partida ao meio + alça central.
  beforeafter: `
    <rect x="24" y="48" width="152" height="104" rx="6"/>
    <path d="M100 34v132"/>
    <circle cx="100" cy="100" r="26" fill="${'#0F2544'}"/>
    <path d="M92 93l-7 7 7 7M108 93l7 7-7 7" stroke-linejoin="round"/>`,
  reviews: `
    <path d="M100 30l22 47 51 7-37 36 9 51-45-25-45 25 9-51-37-36 51-7z" stroke-linejoin="round"/>`,
  estimate: `
    <rect x="44" y="34" width="112" height="136" rx="8"/>
    <path d="M74 34h52v20H74z" stroke-linejoin="round"/>
    <path d="M70 82h60M70 106h60"/>
    <path d="M70 138l16 16 34-38" stroke-linejoin="round"/>`,
}

const covers = [
  { file: 'destaque-kitchens',     icon: 'kitchens',     bg: NAVY,  label: 'Kitchens' },
  { file: 'destaque-baths',        icon: 'baths',        bg: NAVY,  label: 'Baths' },
  { file: 'destaque-tile',         icon: 'tile',         bg: NAVY,  label: 'Tile' },
  { file: 'destaque-before-after', icon: 'beforeafter',  bg: NAVY,  label: 'Before/After' },
  { file: 'destaque-reviews',      icon: 'reviews',      bg: NAVY,  label: 'Reviews' },
  { file: 'destaque-estimate',     icon: 'estimate',     bg: BRICK, label: 'Free estimate' },
]

const html = ({ icon, bg }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1080px;height:1920px;overflow:hidden}
  .cover{width:1080px;height:1920px;background:${bg};display:flex;align-items:center;justify-content:center}
  /* O Instagram recorta um círculo centralizado. Tudo vive dentro dele. */
  .safe{width:640px;height:640px;display:flex;align-items:center;justify-content:center}
  svg{width:470px;height:470px}
  .ln{fill:none;stroke:${PAPER};stroke-width:7;stroke-linecap:round}
</style></head>
<body><div class="cover"><div class="safe">
  <svg viewBox="0 0 200 200"><g class="ln">${icons[icon]}</g></svg>
</div></div></body></html>`

const outDir = process.argv[2]
for (const c of covers) {
  writeFileSync(`${outDir}/${c.file}.html`, html(c), 'utf8')
}
console.log(covers.map(c => c.file).join('\n'))
