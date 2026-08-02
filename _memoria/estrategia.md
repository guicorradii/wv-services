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

- **Modelo:** por projeto/entrega. Valores em **R$** (com equivalente em US$ na página, câmbio ~R$ 5,40).
- **Âncora / valor de referência:** **R$ 5.000** pelo pacote completo — é quanto o trabalho vale
  no mercado (R$ 4–8k) e a referência que o Wellington passa quando indicar o Guilherme.
- **Preço de fundador (o que ele paga):** **R$ 2.500** pelo pacote — identidade + site + Instagram
  + estrutura de Google Ads, com **2 meses de gestão dos anúncios grátis**. A **verba de mídia**
  (o que vai pro Google) é **à parte, paga pelo cliente** — isso está explícito na proposta pra
  não virar mal-entendido. Preço de primeiro cliente / case, decisão consciente.
- **Nível enxuto:** site sozinho **R$ 1.000**.
- **Mensalidade (após os 2 meses):** **a partir de R$ 500/mês** — gestão de ads + conteúdo de
  Instagram + acompanhamento. Sem contrato longo.

**Entregáveis criados** (versionados em `saidas/proposta-wellington/`; publicados como artifact
privado no claude.ai — URLs no README de lá):
- **Proposta** (página web na identidade WV): abertura → seção "Na prática" (site antes/depois,
  Instagram antes/depois, demonstração de Google Ads) → opções/preço → disclaimer de fundador →
  tabela de valores → "o que falta confirmar" → próximos passos.
- **Simulação do Instagram** posicionado (formato Hope-Consult): moldura de celular, header/bio
  em inglês, destaques e **grade de obras clicável** com visualizador modal. É um **shell** —
  fotos de obra como posts simples; a mecânica já aceita carrossel de vários slides pra plugar depois.

**Pendências da proposta:** (1) o Wellington vai mandar **prints reais** do site atual e do
@wv.services pra trocar os "antes" ilustrativos; (2) confirmar o **sobrenome** dele no cabeçalho;
(3) validar o **câmbio**. Seguem valendo as pendências que travam o site (licença/seguro, anos de
operação, fotos "antes", destino do formulário).

## Gargalo atual

Aquisição de cliente depende 100% de indicação e rede pessoal. Não existe canal que traga cliente novo sem alguém apresentar. É o teto de crescimento do negócio.
