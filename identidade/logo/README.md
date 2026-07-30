# Logo WV Services

Fechada em 30/07/2026. Conceito e regras em `identidade/design-guide.md`.
Referência visual completa: `identidade/brand-board.html`.

---

## Qual arquivo usar

| Situação | Arquivo |
|---|---|
| **Header do site** | `svg/wv-header-horizontal-cor.svg` |
| Header sobre fundo navy | `svg/wv-header-horizontal-branco.svg` |
| Assinatura de email, orçamento, proposta, rodapé | `svg/wv-logo-horizontal-cor.svg` |
| Impresso, adesivo de van, placa de obra, camiseta | `svg/wv-logo-empilhada-cor.svg` |
| **Favicon do site** | `svg/wv-favicon-circulo.svg` |
| **Foto de perfil do Instagram / Google Business** | `svg/wv-avatar-circulo.svg` ou `png/wv-favicon-circulo-512.png` |
| Ícone em app, atalho, marca d'água | `svg/wv-icone-navy.svg` |
| Marca d'água sobre foto | `svg/wv-monograma-branco.svg` |
| Canva / Google Docs / qualquer coisa sem SVG | os `.png` de `png/` |

**Na dúvida, use SVG.** Não borra em nenhum tamanho e é o que serve pra gráfica.
PNG só quando a ferramenta não aceitar vetor.

---

## A regra do favicon (importante)

**Favicon é branco. Avatar é duas cores.** São peças diferentes de propósito.

Vermelho sobre navy tem contraste de **1.1:1** — a mesma combinação que o design guide
proíbe. Grande, funciona: o olho lê o V vermelho porque a forma é enorme. A 16px, o V
some no fundo navy e a marca vira um borrão com metade clara.

- **Até 40px** (favicon, ícone de aba, ícone de app pequeno) → `wv-favicon-circulo.svg`,
  monograma todo branco
- **Acima de 40px** (perfil do Instagram, Google Business, avatar de WhatsApp Business)
  → `wv-avatar-circulo.svg`, duas cores

Testado renderizando em 16, 32, 48 e 128px antes de fechar essa regra.

O formato circular resolve o crop do Instagram e do Google Business sem adaptação.

---

## Header vs. horizontal — qual a diferença

Duas versões deitadas, e não é redundância:

- **`wv-header-horizontal-*`** — monograma maior, **sem** o descritor. É pra header de
  site, onde a logo já vive ao lado do menu. Descritor ali é ruído.
- **`wv-logo-horizontal-*`** — monograma menor, **com** "GENERAL CONTRACTOR · BOSTON, MA".
  É pra onde a logo aparece sozinha e precisa se explicar: email, orçamento, proposta.

---

## Estrutura

```
svg/                              vetor, fundo transparente — arquivos de trabalho
  wv-header-horizontal-cor.svg        header do site
  wv-header-horizontal-branco.svg     header sobre navy
  wv-logo-horizontal-cor.svg          deitada com descritor
  wv-logo-horizontal-branco.svg
  wv-logo-empilhada-cor.svg           monograma acima, texto abaixo
  wv-logo-empilhada-branco.svg
  wv-monograma-cor.svg                só o WV, duas cores
  wv-monograma-navy.svg               só o WV, uma cor
  wv-monograma-branco.svg
  wv-favicon-circulo.svg              circulo navy + WV branco  ← favicon
  wv-avatar-circulo.svg               circulo navy + WV 2 cores ← social
  wv-icone-navy.svg                   quadrado arredondado navy
  wv-icone-brick.svg                  quadrado arredondado brick
  favicon.svg                         quadrado arredondado 64px

png/                              exportações
  wv-header-horizontal.png            header, fundo transparente
  wv-favicon-circulo-512.png          512x512 — perfil do Instagram
  wv-monograma-cor.png                1200px, transparente
  wv-logo-horizontal-cor.png          1600px, transparente
  wv-logo-horizontal-branco.png       1600px, transparente
  wv-logo-empilhada-transp.png        1200px, transparente
  wv-icone-navy-512.png               512x512
  wv-icone-brick-512.png              512x512
  wv-logo-empilhada-cor.png           fundo paper sólido
  wv-logo-empilhada-navy.png          fundo navy sólido
  wv-logo-empilhada-brick.png         fundo brick sólido

originais/                        saída bruta do ChatGPT, preservada como veio
```

---

## O que foi consertado em relação aos originais

Os SVGs que saíram do ChatGPT tinham quatro problemas que impediam uso real:

**1. Fundo chapado embutido.** Cada arquivo trazia um `<rect>` de fundo colorido. Logo com
fundo sólido não aplica sobre foto, sobre seção colorida, nem gera PNG transparente.
Removido. *(O `wv-services-header-horizontal.svg` já veio certo nisso.)*

**2. O vão entre o W e o V estava pintado com a cor do fundo.** Era um retângulo fino na
cor do fundo simulando separação — funciona só naquele fundo específico; em qualquer outro
apareceria uma listra bege atravessando a marca. Refeito com `<mask>`: agora é vão de
verdade e funciona sobre qualquer fundo. Isso é o que permite as versões em uma cor
existirem sem o W e o V grudarem num blob.

**3. O texto usava Arial, não Archivo.** Fora do sistema tipográfico, e como texto vivo —
renderizava diferente em cada máquina. Trocado por Archivo, e a largura travada com
`textLength` (ver abaixo).

**4. O header original transbordava o viewBox.** O `<text>` em Arial 155px começando em
x=650 terminava por volta de x=1549 num viewBox de 1500 de largura — e em Archivo, que é
mais larga, cortaria mais. Recalculado, com folga.

Também padronizado: os arquivos divergiam entre "SERVICES" e "WV SERVICES". Agora todos
dizem **SERVICES** — o monograma já é o WV, repetir é redundante.

---

## Sobre o textLength

Todos os lockups usam `textLength` + `lengthAdjust="spacing"` no `<text>`. Isso trava a
largura exata que o texto ocupa, independente da fonte disponível na máquina.

Efeito prático: se o Archivo não estiver instalado e cair no fallback, o espaçamento se
ajusta e o lockup mantém a geometria. Sem isso, a logo mudava de proporção de máquina pra
máquina.

**Ainda assim, para gráfica de adesivo ou bordado, converta o texto em curvas** (Figma:
*Outline stroke* / Illustrator: *Create Outlines*) e salve como `-outlined.svg`. O
`textLength` protege a largura, não o desenho da letra.

Fonte: [Archivo no Google Fonts](https://fonts.google.com/specimen/Archivo) — instalar
localmente antes de abrir os SVGs em editor.

---

## Nunca

- Esticar, girar, contornar ou aplicar sombra
- Trocar as cores por outras que não sejam navy `#0F2544`, brick `#C63527` ou branco
- Colocar o telefone dentro da logo
- Usar a horizontal abaixo de 120px de largura — nesse tamanho, use o ícone
- Usar a versão **duas cores** abaixo de 40px — o vermelho desaparece
- Aplicar sobre foto sem placa de fundo atrás
