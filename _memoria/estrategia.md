# Estratégia

## Fase

Reposicionamento de marca. A empresa existe, entrega bem e tem reputação local — mas não tem presença digital que sustente crescimento. O projeto é construir do zero a camada de marca e aquisição online.

## Prioridade principal

**Site novo.** A identidade está fechada — a próxima entrega é o site.

Sequência acordada:
1. ~~Identidade visual (logo, cores, tipografia, design guide)~~ ✅ **concluída em 30/07/2026**
2. **Site novo** ← aqui. `projetos/Site-WV-Services/`
3. Instagram posicionado (bio, destaques, grade, conteúdo recorrente)
4. Anúncios pagos pra captar cliente online

### O que a identidade entregou

- Paleta navy `#0F2544` + brick red `#C63527` + paper `#F7F4EF`, contrastes verificados em WCAG
- Tipografia Archivo (títulos) + Inter (corpo), ambas no Google Fonts
- Logo completa em `identidade/logo/` — 14 SVGs e 11 PNGs, incluindo header do site,
  favicon e avatar social
- Brand board navegável em `identidade/brand-board.html`
- Regra do favicon: branco até 40px, duas cores acima (brick sobre navy é 1.1:1 e some
  em tamanho pequeno)

Pendência menor: converter o texto dos lockups em curvas antes de mandar pra gráfica de
adesivo ou bordado.

### O que bloqueia o site

**Fotos de obra real — RESOLVIDO PARCIALMENTE (31/07/2026).** O Wellington mandou o export
de mídia do Wix (372 arquivos, cheio de duplicata e placeholder). Filtrado e organizado em
`dados/fotos/` — **62 fotos únicas** em alta resolução, categorizadas: banheiro (27),
interior (9), armários/marcenaria (8), cozinha (7), lavanderia (5), escadas (4), exterior (2).
Índice em `dados/fotos/README.md`.

Duas lacunas que seguem: **não há par antes/depois** (todas são "depois" — a identidade pede
antes/depois como peça central, pedir ao Wellington as fotos "antes") e **exterior tem só 2
fotos** (se o site reivindicar siding/trabalho externo, pedir mais).

**Estado em 31/07/2026:** estrutura v1 do site já montada — `projetos/Site-WV-Services/site/index.html`,
single-file, todas as seções (hero, serviços, provas, processo de obra, FAQ, contato).

**Fotos aplicadas (31/07/2026):** 11 fotos de obra reais selecionadas do acervo, otimizadas pra web
(máx 1600px, JPEG) em `site/img/` — hero (cozinha high-end), 4 cards de serviço e galeria de 6 obras.
Como não há par antes/depois no acervo, a seção "Our Work" foi montada como **galeria de trabalho
concluído**, não before/after — trocar por antes/depois real quando o Wellington mandar as "antes".
Falta só preencher dados do Wellington (licença, anos) e o destino do formulário.

**Hero refeito (01/08/2026):** depois de várias iterações (foto de fundo full-bleed → descartada por
não parecer obra real; header transparente → descartado), fechou no formato: fundo claro, duas colunas
no desktop (texto à esquerda, **carrossel peek** à direita — foto ativa cheia + espiada da próxima),
e no mobile empilhado na ordem intro → carrossel → botões. Kicker "Owner-Operated General Contractor"
(diferencial real: o Wellington executa), linha de cidades com pin, lead enxuto. Carrossel com 5 obras
(cozinha, banheiro, azulejo, marcenaria, exterior). Paddings do site apertados (seções 88→72px).

**Refino responsivo do hero + seção de serviços (01/08/2026).** Rodada de ajustes finos:
- Hero com espaçamentos separados por breakpoint — desktop respira (topo 44px), mobile compacto
  (topo 16px). Header 72px no desktop / 56px no mobile. Logo reduzida pra 28px. Bolinhas do
  carrossel do hero centralizadas; selos "Licensed & insured / Free estimates" numa linha só,
  centralizados no mobile.
- Seção "What we do" → renomeada. Kicker virou "Kitchen & bath specialists", H2 enxuto pra
  **"Our services"** (antes "Kitchen and bath specialists — full-service contractor", que repetia
  o hero), lead reescrito: "From a full kitchen or bathroom remodel to a single repair — one
  licensed contractor for the whole job."
- Cards de serviço: **4 numa linha no desktop**; viram **carrossel deslizável** (scroll-snap CSS)
  no tablet (~2 cards) e celular (1 card), com seta de avançar centralizada na foto via JS.
  Foto dos cards achatada (2/1 desktop, 3/2 no carrossel).
- **Animações de scroll-reveal** (IntersectionObserver): títulos, galeria, stats, depoimento,
  passos, fases e FAQ sobem+aparecem ao entrar na tela, com stagger nos grupos e respeito a
  prefers-reduced-motion. Cards de serviço ficam fora do reveal (conflita com carrossel horizontal).

### Site aprovado pelo Guilherme (01/08/2026)

Rodada final de revisão. **A estrutura e o layout estão fechados** — o site não espera mais
decisão de design.

**Seções cortadas:** galeria "Our Work", "Why WV Services" (levou junto o depoimento do Michael
Weymouth, única voz autêntica que a empresa tinha) e o método de obra em 6 fases, redundante com
o "How it works". Fica registrado: se em algum momento a página parecer curta em prova social,
o depoimento é o primeiro item a voltar.

**Seções novas:** faixa navy de números (4 indicadores, com contador animado) e **Before & after**
com slider de arraste — três comparadores onde o usuário puxa o divisor. A mecânica está pronta e
acessível (arraste, toque, clique e setas do teclado); só falta a foto.

**Ordem final:** header sticky com botão "Free estimate" → hero → Our services → faixa de números
→ Before & after → How it works → formulário → FAQ → rodapé.

**Fundos:** creme do hero até o "How it works", faixa de números em navy no meio, formulário e FAQ
em navy `#0F2544`, rodapé em `#0b1c33` (variável `--navy-deep`).

**Falta pra publicar — nada disso é design:**
1. **Números** — anos em Greater Boston e obras concluídas, hoje `[X]+`
2. **Fotos "antes"** — o acervo é 100% "depois"; os três sliders estão com placeholder tracejado
3. **Destino do formulário** — é stub de front-end: mostra sucesso e descarta os dados. Todo
   pedido de orçamento se perderia em silêncio. É o bloqueio mais grave, e não depende do Wellington

Os itens 1 e 2 passam ao topo do roteiro de `_memoria/perguntas-wellington.md`.

> **Correção a fazer no design guide:** ele afirma que brick red sobre navy dá 1.1:1 e usa isso pra
> justificar a regra do favicon. O valor real é **2.88:1** (1.1:1 é o contraste entre `#0F2544` e
> `#0b1c33` — parece medição trocada). A regra continua válida, o número não.

## O que pode esperar

Anúncios. Só fazem sentido depois que marca, site e perfil estiverem prontos pra receber o tráfego.

**Site multilíngue (PT/ES) — adiado pra fase 2 (01/08/2026).** Ideia do Guilherme pelo mercado imigrante
de Boston (brasileiro/hispânico). Decisão: fechar o site em inglês primeiro e **confirmar posicionamento
com o Wellington** antes de construir — o público que ele declarou é a comunidade americana, e foi por
isso que o site é 100% inglês. É decisão de posicionamento dele, não só de design.

## Contexto com prazo

O site atual **não será editado** — decisão do Guilherme. O novo é feito do zero, aqui.

Consequência aceita: a página `/services` segue no ar com o título "M&B Remodeling
Services" (nome de outra empresa, resto do template) até o site novo entrar. Fica
registrado como motivo pra não arrastar o cronograma do site.

Coleta de contexto rodando em paralelo: `_memoria/perguntas-wellington.md` — roteiro de
áudios pro Wellington. **Primeiras respostas chegaram em 31/07/2026** (áudio + PDF de serviços):
cidades atendidas definidas (Boston, Cambridge, Newton + Grande Boston), foco em cozinha/banheiro
confirmado, linha de manutenção mapeada. Ainda faltam licença, anos de operação e casos concretos.

## Proposta pro Wellington (01/08/2026)

Com o site praticamente pronto pra encaminhar, o Guilherme decidiu montar uma **proposta
formal** (em página web, PT) pro Wellington — foco em **combinar a remuneração** e **fechar os
dados que faltam**. Decisões travadas:

- **Modelo:** por projeto/entrega. Valores em **R$**, com equivalente em US$ só de referência.
- **Âncora / valor de referência:** **R$ 5.000** pelo pacote completo — é quanto o trabalho vale
  no mercado (R$ 4–8k) e a referência que o Wellington passa quando indicar o Guilherme.
- **Três níveis em escada (definidos em 02/08/2026)** — cada um inclui o anterior, e a
  **identidade visual entra já no primeiro** (não é mais exclusiva do pacote):
  - **Site** (identidade + site): **R$ 1.500** ≈ US$ 300
  - **Site + Instagram**: **R$ 2.000** ≈ US$ 400
  - **Pacote completo** (+ Google Ads + **2 meses de gestão grátis**): **R$ 2.500** ≈ US$ 500
- **Câmbio arredondado a R$ 5,00/US$** pra os números saírem redondos. Decisão do Guilherme:
  número quebrado (era 5,40, dava US$ 465 e US$ 185) dá vontade de conferir na calculadora.
- A **verba de mídia** (o que vai pro Google) é **à parte, paga pelo cliente**. Fica explícito
  no card do pacote **e** na seção dedicada — é o ponto que mais gera mal-entendido.
- **Preço de fundador:** decisão consciente de primeiro cliente / case.
- **Mensalidade (após os 2 meses):** **a partir de R$ 500/mês** (≈ US$ 100) — gestão de ads +
  conteúdo de Instagram + acompanhamento. Sem contrato longo.

**Entregáveis criados** (versionados em `saidas/proposta-wellington/`; publicados como artifact
privado no claude.ai — URLs no README de lá):
- **Proposta** (página web na identidade WV): abertura → seção "Na prática" (site antes/depois,
  Instagram antes/depois, demonstração de Google Ads) → opções/preço → disclaimer de fundador →
  tabela de valores → "o que falta confirmar" → próximos passos.
- **Simulação do Instagram** posicionado (formato Hope-Consult): moldura de celular, header/bio
  em inglês, destaques e **grade de obras clicável** com visualizador modal. É um **shell** —
  fotos de obra como posts simples; a mecânica já aceita carrossel de vários slides pra plugar depois.

**Pendências da proposta:** confirmar o **sobrenome** do Wellington no cabeçalho. Seguem valendo
as pendências que travam o site (licença/seguro, anos de operação, fotos "antes", destino do
formulário). ✅ Prints reais e câmbio resolvidos em 02/08/2026 (ver abaixo).

## Instagram + carrosséis + proposta com print real (02/08/2026)

Rodada que fechou a camada de Instagram e tirou os "ilustrativos" da proposta.

- **Padrão de qualidade de carrossel importado** da Hope Consult pra `_memoria/carrosseis.md`
  (arco narrativo, escala tipográfica, imagem full-bleed com scrim, navegação, gotchas de
  render deste PC). A skill `/carrossel` daqui era idêntica à de lá e agora lê esse arquivo
  primeiro. Adaptado à marca: Archivo/Inter, brick red no lugar do dourado, **foto de obra real
  na frente de imagem de IA** (o design-guide manda), copy em inglês.
- **Capas de destaque** em `instagram/destaques/` — 6 capas 1080×1920, ícone line-art branco:
  Kitchens, Baths, Tile, Before/After, Reviews em navy + **Free estimate em brick red** (é o
  destaque de aquisição, por isso é o único vermelho). Gerador `gerar-destaques.mjs` junto.
- **Avatar do Instagram**: `identidade/logo/png/instagram-profile.png` (monograma em relevo
  fosco). Prompts em `identidade/logo/prompts-avatar-ia.md`. ⚠️ 3D/metálico está no "nunca" do
  design guide — a versão aprovada é volume **fosco**, sem cromado.
- **3 carrosséis iniciais** em `marketing/conteudo/`, 7 slides cada, renderizados:
  *One contractor. The whole job.* (apresentação) · *Three questions to ask before you hire
  anyone.* (autoridade, alcance) · *A remodel should not feel like guesswork.* (processo).
  Ordem de publicação: 1 → 3 → 2. A 1ª leva de temas foi descartada por ser específica demais
  (impermeabilização camada a camada, cronograma semana a semana) — ficam pra quando o perfil
  tiver base.
- **Preview do Instagram** (`ig-wv.html`) atualizado: avatar novo, os 6 destaques e os 3
  carrosséis na grade, folheáveis no visualizador.
- **Proposta** com **print real** nos dois antes/depois (site e Instagram). Os 6 prints estão em
  `dados/`. Logo do topo e do rodapé agora em **W branco + V brick** (acima de 40px a regra do
  favicon não se aplica).

**Trava pra publicar os carrosséis:** licença/seguro confirmados (os três afirmam "licensed and
insured") e o **destino do formulário** do site — os CTAs mandam pro link da bio → site, e hoje
o formulário descarta os dados em silêncio.

## Site: reviews, números reais e antes/depois oculto (02/08/2026)

Rodada de pedidos do Wellington aplicada em `projetos/Site-WV-Services/site/index.html`.

- **Aba de reviews** (pedido dele): seção `#reviews` entre a faixa de números e o "How it
  works", com link no header e no rodapé. Duas colunas — reviews publicados à esquerda,
  formulário à direita (nome, nota em estrelas acessível, serviço, cidade, texto) e nota de
  consentimento de publicação. **O depoimento do Michael Weymouth voltou ao site** como
  primeiro review — era a previsão registrada em 01/08 e se cumpriu: aba de review vazia é
  pior que aba nenhuma.
- **Números fechados:** `10+` anos na Grande Boston e `250+` obras, os dois com o contador
  animado ligado. O `[X]+` saiu do site.
- **Licença e seguro:** confirmados pelo Wellington e reforçados em cinco pontos do site.
  Ele tratou isso como informação obrigatória.
- **Antes/depois oculto** (`hidden`), por falta das fotos "antes". Código inteiro e
  funcionando; religar é tirar o atributo, trocar os `.ba-ph` por `<img>` e devolver o link
  ao menu. O link do header virou "Reviews".

**Único bloqueio que sobra pra publicar:** o **destino dos formulários**. Agora são dois —
orçamento e review — e os dois descartam os dados em silêncio. Mesma solução resolve os dois.
Fotos "antes" deixaram de ser bloqueio, viraram melhoria (a seção está oculta).

## Gargalo atual

Aquisição de cliente depende 100% de indicação e rede pessoal. Não existe canal que traga cliente novo sem alguém apresentar. É o teto de crescimento do negócio.
