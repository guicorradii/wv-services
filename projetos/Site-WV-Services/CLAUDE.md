# Site WV Services

> Site novo da WV Services. Pasta dedicada — instruções aqui sobrescrevem as
> da raiz quando relevantes.

## Sobre

Site institucional e de captação da WV Services — general contractor em Boston, MA.
Substitui o site atual (`bookwvservices.com`, construtor visual). **Feito do zero**,
não é edição do atual.

## Tipo

Projeto próprio da empresa (em construção)

## Estado

✅ **Estrutura e layout aprovados pelo Guilherme (01/08/2026).** `site/index.html` single-file.
O que falta não é design — é dado que só o Wellington tem, mais o destino do formulário.

**Seções, na ordem:** header sticky (logo + menu + telefone + botão "Free estimate") → hero
(texto à esquerda, carrossel de 5 obras à direita, botões centralizados) → Our services (4 cards)
→ faixa navy de números → Before & after (3 sliders de arraste) → How it works (3 passos) →
formulário de contato → FAQ → rodapé.

**Removidas na revisão de 01/08:** a galeria "Our Work", a seção "Why WV Services" (com o
depoimento do Michael Weymouth) e o método de obra em 6 fases — este último por redundância
com o "How it works". As fotos `work-*.jpg` seguem em `site/img/`, hoje usadas no hero e no
antes/depois.

**Fundos:** creme (`--paper`) do hero até o "How it works", com a faixa de números em navy no
meio; formulário e FAQ em navy `#0F2544`; rodapé em `--navy-deep` `#0b1c33`.

Bloqueios pra fechar:
- [x] Fotos de obra real — 62 fotos em `dados/fotos/`, 11 otimizadas em `site/img/` (31/07)
- [x] Cidades atendidas — Boston, Cambridge, Newton + Grande Boston (respondido 31/07)
- [ ] **Números da faixa navy** — anos em Greater Boston e obras concluídas estão como `[X]+`.
      Pra ligar o contador, trocar o texto e adicionar `data-count="15" data-suffix="+"`
- [ ] **Fotos "antes"** — o acervo é 100% "depois". Os 3 sliders funcionam; o lado esquerdo é
      um placeholder tracejado. Trocar cada `<div class="ba-ph">` por `<img>` e nada mais muda
- [ ] **Destino do formulário** — hoje é stub de front-end: mostra sucesso e descarta os dados.
      Do jeito que está, todo pedido de orçamento se perde em silêncio. Bloqueia a publicação
- [ ] Email de domínio (hoje Gmail pessoal) e o restante das respostas do Wellington
      (licença/seguradora, casos concretos)

## Onde salvar o que

- Código do site: `site/`
- Assets (fotos de obra, logo, favicon): `site/img/`
- Textos longos em revisão: `copy/`

## Decisões já tomadas

- **Idioma: inglês americano.** Todo texto de cliente final. Sem exceção.
- **Sem build.** Seguir o padrão dos outros projetos: `index.html` único com CSS
  e JS inline. Não introduzir framework sem necessidade real.
- **Foto é o ativo principal.** O layout se organiza em volta de antes/depois de
  obra real, não de blocos de texto.
- **CTA primário:** orçamento grátis no local (*free on-site estimate*) — é o que
  o negócio já oferece e o que converte em serviço residencial.

## Contexto que herda da raiz

Identidade visual (navy `#0F2544` + brick red `#C63527` + paper `#F7F4EF`;
tipografia Archivo + Inter) vem de `identidade/design-guide.md` na raiz. Logo em
`identidade/logo/svg/`. Não duplicar aqui — consultar lá pra qualquer decisão visual.

Tom de voz e o que evitar: `_memoria/preferencias.md` na raiz.

## Específico desse projeto

- **O site atual tem um bug herdado do template:** a página `/services` de
  `bookwvservices.com` está no ar com o título "M&B Remodeling Services". Não vamos
  corrigir lá — mas o site novo tem que entrar antes que isso custe um cliente.
- **Não repetir o filler do site antigo.** Frases como "dedicated to providing
  services that exceed your expectations" e "recognized through numerous awards"
  são texto de construtor de site. A segunda pode ser falsa — confirmar antes de
  qualquer menção a prêmio.
- **Provas concretas ganham de adjetivo.** "Licensed & insured" com número de
  licença vale mais que "excellence". Anos de operação e cidades atendidas idem.
- **Favicon:** `identidade/logo/svg/favicon.svg` — já pronto, testado a 48px.
