# Capas dos destaques — @wv.services

Seis capas em **1080×1920**, na identidade da marca (navy `#0F2544`, brick red
`#C63527`, traço off-white `#F7F4EF`). Ícone line-art centralizado, sem texto: o
Instagram já mostra o rótulo embaixo da bolinha, e texto dentro da capa some no
recorte circular de ~161px.

| Arquivo | Rótulo no Instagram | Fundo |
|---|---|---|
| `destaque-kitchens.png` | Kitchens | navy |
| `destaque-baths.png` | Baths | navy |
| `destaque-tile.png` | Tile | navy |
| `destaque-before-after.png` | Before/After | navy |
| `destaque-reviews.png` | Reviews | navy |
| `destaque-estimate.png` | Free estimate | **brick red** |

O set de rótulos veio da simulação de Instagram da proposta
(`saidas/proposta-wellington/ig-wv.html`). O sexto, **Free estimate**, é adição —
é o destaque que trabalha aquisição, e por isso é o único em brick red: fica
sendo o botão da fileira.

## Decisões

- **Sem texto na capa.** Rótulo é função do Instagram.
- **Traço de 7px** no viewBox de 200 (≈16px no arquivo final). Abaixo disso o
  ícone some quando o app reduz pra 161px.
- **Ícone dentro de um quadrado de 640px centralizado** — o app recorta um
  círculo do centro da story, então nada pode encostar na borda.
- **Ícone branco sempre.** Brick red sobre navy tem contraste baixo demais
  (2.88:1) e some no tamanho pequeno — a mesma razão da regra do favicon em
  `identidade/design-guide.md`.
- **Before/After** repete o slider de arraste do site (moldura partida + alça
  central), pra o Instagram e o site contarem a mesma história.

## Como regerar

```powershell
node gerar-destaques.mjs <pasta-de-saida>   # escreve os 6 HTMLs
# depois renderiza cada um em PNG 1080x1920 com Chrome headless
```

Render pelo Chrome headless, **gravando no scratchpad e copiando depois** — o
Controlled Folder Access do Windows impede o Chrome de escrever dentro de
`Documents\`. Detalhes e demais gotchas em `_memoria/carrosseis.md`.
