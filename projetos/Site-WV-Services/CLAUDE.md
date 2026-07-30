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

🔨 **Não iniciado.** Identidade visual e logo prontas; conteúdo em coleta.

Bloqueios pra começar:
- [ ] Fotos de obra real (`dados/fotos/` na raiz) — sem elas o site não fecha
- [ ] Respostas do Wellington (`_memoria/perguntas-wellington.md`) — serviços exatos,
      cidades atendidas, anos de operação, licença e seguradora

O que **não** bloqueia: estrutura, layout e componentes podem ser montados com
placeholder enquanto o material real não chega.

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
