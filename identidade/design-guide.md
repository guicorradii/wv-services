# Identidade visual — WV Services

> Como a marca aparece em tudo que o sistema gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> **Versão 1 — fechada em 30/07/2026.** Ver `identidade/brand-board.html` pra referência visual.

---

## A ideia

O Wellington pediu azul e vermelho, pela bandeira. O problema: azul e vermelho primários
são o uniforme do setor de home services nos EUA. Encanador, HVAC, contractor — todos
iguais, todos genéricos.

A saída é ancorar o vermelho em **Boston**, não na bandeira. Boston é uma cidade de
tijolo vermelho — brick red é a cor do lugar onde ele trabalha. Um vermelho de tijolo
com o navy institucional entrega as duas coisas de uma vez: a leitura patriótica que ele
quer, e uma raiz local que nenhum concorrente genérico tem.

O fundo é off-white quente, não branco puro. É o detalhe que mais separa a marca do
resto do setor — concorrente usa branco frio e cinza de template.

**Em uma frase:** contractor de Boston, estabelecido e cuidadoso, não franquia.

---

## Cores

- **Fundo principal:** `#F7F4EF` — off-white quente

- **Cor de destaque / CTA:** `#C63527` — brick red

- **Texto principal:** `#0F2544` — navy profundo *(também a cor institucional da marca)*

- **Fundo alternativo / cards:** `#FFFFFF` puro sobre o off-white, ou `#0F2544` pra seções invertidas

- **Neutro de apoio:** `#D8D2C8` — bordas, divisores, estados desativados

- **Cor proibida:** azul-royal e vermelho primário chapados (`#0000FF`, `#FF0000` e vizinhos).
  Nada de degradê, nada de metálico, nada de cromado.

**Contraste verificado (WCAG AA):**

| Combinação | Razão | Status |
|---|---|---|
| Navy sobre off-white | 14.0:1 | AAA |
| Brick red sobre off-white | 4.8:1 | AA |
| Branco sobre navy | 15.3:1 | AAA |
| Branco sobre brick red | 5.3:1 | AA |

Não usar brick red sobre navy nem navy sobre brick red — contraste insuficiente.

---

## Tipografia

- **Títulos e destaques:** **Archivo** — 700/800, tracking apertado (-0.02em).
  Sólida, levemente técnica, tem peso de coisa construída. Não é Montserrat nem Oswald,
  que é onde o setor todo está.

- **Corpo, subtítulos e botões:** **Inter** — 400 corpo, 500 botão e label.

- **Peso do título:** 800 pra manchete, 700 pra subtítulo.

- **Labels e categorias:** Archivo 700, caixa alta, tracking largo (+0.08em), corpo pequeno.

Ambas gratuitas no Google Fonts — sem atrito na hora de montar o site.

---

## Estilo geral

Editorial e assentado. Muito espaço em branco, hierarquia clara, foto grande de trabalho
real. A marca não grita — a confiança vem da calma.

Foto é o ativo principal. Serviço residencial se vende mostrando resultado, não adjetivo.
Antes/depois vale mais que qualquer headline. Foto torta de obra real ganha de foto
perfeita de banco de imagem.

---

## Elementos-chave

- **Bordas:** 1px `#D8D2C8`. Em fundo navy, 1px branco a 15% de opacidade.
- **Border-radius dos cards:** 4px. Quase reto — cantos muito redondos infantilizam.
- **Botões:** brick red com texto branco, radius 4px, padding 14px 28px, Inter 500.
  Botão secundário: contorno navy 1.5px, fundo transparente.
- **Sombras:** praticamente nenhuma. Se precisar, `0 1px 3px rgba(15,37,68,0.08)`.
- **Divisor de seção:** régua brick red de 3px e 48px de largura, alinhada à esquerda
  acima do título. É o tique visual recorrente da marca.

---

## O que NUNCA fazer

- Azul e vermelho primários chapados — é o clichê do setor
- Degradê, efeito 3D, metálico, cromado, chanfro
- Foto de banco de imagem com trabalhador sorrindo de capacete e braços cruzados
- Emoji em material formal (site, orçamento, email)
- Telefone dentro da logo
- Caixa alta em bloco de texto corrido
- Mais de duas fontes em qualquer peça

---

## Logo

**Fechada em 30/07/2026.** Arquivos em `identidade/logo/` — guia de qual usar em
`identidade/logo/README.md`. Referência antiga preservada em
`identidade/referencias/logo-atual.jpeg`.

### A marca

Monograma **WV** em letra chapada e angular, sem contorno e sem efeito. O W em navy,
o V em brick red, separados por um vão diagonal fino. As diagonais e o vértice do V
carregam a leitura de telhado sem desenhar uma casa — e as duas cores dividem a marca
exatamente nas duas letras.

Funciona porque:
- Resolve em uma cor só, chapada, sem perder nada
- Testada a 24px e ainda lê
- O monograma sozinho já é a marca — não depende do texto
- Vira foto de perfil de Instagram sem adaptação

### Do que veio da logo antiga

**Sobreviveu:** o monograma WV como centro, a dupla navy + vermelho, a ideia do V lendo
como telhado.

**Caiu:** degradê metálico 3D, elipse orbitando, skyline de prédios, as quatro linhas de
texto empilhadas, e o telefone dentro da marca.

### Versões do sistema

1. **Header** — monograma maior, sem descritor. Só pro header do site, onde a logo já vive
   ao lado do menu e descritor virava ruído.
2. **Horizontal** — monograma + "SERVICES" com descritor "GENERAL CONTRACTOR · BOSTON, MA".
   Assinatura de email, orçamento, proposta, rodapé — onde a logo aparece sozinha e precisa
   se explicar.
3. **Empilhada** — monograma acima, texto abaixo. Impresso, adesivo de van, placa, camiseta.
4. **Círculo** — favicon e avatar social. Ver a regra abaixo.
5. **Ícone quadrado** — monograma em quadrado navy ou brick. App, atalho, marca d'água.
6. **Uma cor** — navy sobre claro, branco sobre navy, branco sobre brick red.

**O wordmark diz "SERVICES", não "WV SERVICES".** O monograma já é o WV — repetir é
redundante. Padronizado em todos os arquivos.

### A regra do favicon

**Favicon é branco. Avatar é duas cores.** Não é preferência — é consequência do contraste.

Vermelho sobre navy dá 1.1:1, a mesma combinação proibida na tabela de cores acima. Grande
funciona, porque a forma é enorme e o olho completa. A 16px o V vermelho desaparece no
fundo navy e a marca vira um borrão com metade clara.

- **Até 40px** → `wv-favicon-circulo.svg`, monograma todo branco
- **Acima de 40px** → `wv-avatar-circulo.svg`, duas cores

Verificado renderizando em 16, 32, 48 e 128px antes de fechar a regra.

### Regras de uso

- Largura mínima da versão horizontal: 120px. Abaixo disso, usar o ícone.
- Respiro em volta: metade da altura do monograma em todos os lados.
- Nunca esticar, rotacionar, contornar, sombrear ou aplicar sobre foto sem placa de fundo.
- Na dúvida entre formatos, usar SVG. PNG só quando a ferramenta não aceitar vetor.

### Sobre a tipografia dos lockups

Os `<text>` dos lockups usam `textLength` + `lengthAdjust="spacing"`, que trava a largura
exata que o texto ocupa. Se o Archivo não estiver instalado e cair no fallback, o
espaçamento se ajusta e a logo mantém a proporção — sem isso, mudava de máquina pra
máquina.

Pendência restante: **para gráfica de adesivo ou bordado, converter o texto em curvas.**
O `textLength` protege a largura, não o desenho da letra. Pra web e Canva, o arquivo atual
resolve.

---

## Observações adicionais

Referências coletadas em 30/07/2026:
- Site atual: https://www.bookwvservices.com/ — azul e neutros, sem o vermelho da logo.
  A marca era inconsistente entre logo e site; essa paleta resolve na origem.
- Instagram: @wv.services
- Logo de referência: `identidade/referencias/logo-atual.jpeg`

Pendente: fotos de serviço real (`dados/fotos/`). A identidade está fechada, mas nenhuma
peça final fica boa sem foto de obra de verdade.
