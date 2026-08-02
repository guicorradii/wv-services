# Carrosséis — padrão de qualidade (WV Services)

> Portado do playbook validado na Hope Consult (`hope-consult/_memoria/carrosseis.md`,
> consolidado em 30/07/2026 depois do Guilherme aprovar o carrossel "boca a boca"
> como referência de qualidade). Aqui está adaptado à marca da WV.
> **Este arquivo manda sobre o `/carrossel` genérico.** Onde os dois divergirem,
> vale o que está aqui.

Formato sempre **1080×1350**, 7 slides, um único `carrossel.html` self-contained
na pasta do post (`marketing/conteudo/carrossel-<tema>-<AAAA-MM-DD>/`), com as
imagens copiadas pra dentro e os PNGs finais em `instagram/`.

⚠️ **Copy de cliente final da WV é em inglês americano.** O playbook original é
de uma marca que publica em português; a estrutura viaja, o idioma não. Ao
propor copy, mostrar o significado em PT + o texto final em EN (regra de
`preferencias.md`).

---

## A. Arco narrativo da copy — o que mais importa

- **Cada slide emenda no próximo.** Não são 7 cartões soltos, é uma história com
  costura. Estrutura que funcionou:
  1. **Capa** — gancho (a dor, nomeada sem rodeio)
  2. **Statement** — valida e *chama* o que vem ("...and it shows up in three ways")
  3-4-5. **Os três cenários** — a dor concreta, um por slide, com imagem
  6. **Fecho** — conclui desarmando ("o problema não é você")
  7. **CTA** — instrução explícita de ação
- **Desarmar antes de vender.** O slide 6 valida o leitor (competente, trabalha
  duro) e joga a falta no sistema/processo, não nele. Tira a defensiva antes do CTA.
- **Reserve o conceito-chave pro punch.** O body *descreve*, o punch *nomeia*.
  Não gastar a palavra-chave no meio do body — dilui o soco.
- **Punch fecha cada slide** (`.punch`): 1 frase curta, marcador "›", na cor de
  destaque, peso 600, sem itálico. Escaneável de propósito, nunca textão.
- **Sem repetir listas.** Não re-listar os cenários no slide de conclusão.
  Referir de volta ("these situations", "they").
- **Sem travessão no meio de frase.** Vicia de IA. Trocar por ponto (ou
  dois-pontos antes de lista). Vale igual em inglês — em português o "—" e em
  inglês o em dash são o mesmo tique. Só a régua de destaque permanece.
- **CTA final precisa de instrução explícita** ("Tap the link in bio →"): no
  Instagram ninguém clica no slide. Destino: link da bio → site → formulário de
  orçamento. A oferta vai no lead; a pílula carrega a ação em 1 linha.
- **Voz da WV** (`preferencias.md`): vizinho competente, frases curtas, inglês
  americano cotidiano, problema resolvido e serviço feito direito. Sem
  corporativês, sem promessa exagerada.

## B. Formatação e tipografia

Tipografia da marca (`identidade/design-guide.md`): **Archivo** 700/800 em
headline e número (tracking -0.02em), **Inter** 400/500 no corpo e UI. Labels
Archivo 700 caixa alta, tracking +0.08em.

Escala aprovada em 1080×1350 (foi calibrada com outra fonte — conferir no render
e ajustar 1-2px se o Archivo pesar mais):

- **Slides de texto** (statement/fecho, classe `.statement`): h2 **86px**, body
  **33px** (max-width 88%), punch **35px**. Regra: texto grande, fácil de ler no
  feed. Não deixar slide de texto menor que slide de imagem.
- **Slides de cenário (imagem):** eyebrow 22px / tracking .30em, h2 **78px**,
  body **32px**, punch 32px, `.cena-text{padding-top:188px}` (menos que isso cola
  o eyebrow na régua do cabeçalho).
- **CTA (slide 7):** h2 **84px**, lead **31px** (max-width 82%), pílula 31px /
  padding 34×64, ícones IG **60px** / gap 44.
- **Régua brick red** (72×3px) separando título do corpo em todo slide de texto —
  é o tique visual da marca (o design-guide pede 48px no site; no carrossel a
  escala é maior, 72px lê melhor).
- **Cabeçalho em TODOS os slides:** `@wv.services` em texto, peso leve (**não
  bold**) à esquerda + contador `NN / 07` à direita + linha divisória fina
  abaixo. Cor herda do fundo (off-white sobre navy, navy sobre claro).
  Na capa, só o handle textual — **sem logo na capa**.

## C. Ilustrações

SVG line-art inline, minimalista, acento em brick red, traduzindo o conceito do
slide (trilha → X, três linhas convergindo numa raiz, linha subindo). Layout:
**texto centralizado no slide + ilustração flutuando por cima**
(`position:absolute`, fora do fluxo).

⚠️ Ao crescer a fonte, a ilustração cola no título — ajustar o `top` e conferir
no render.

## D. Imagens

**Na WV, foto de obra real ganha de imagem gerada.** O design-guide é explícito:
foto é o ativo principal, antes/depois vale mais que headline, foto torta de obra
real ganha de foto perfeita de banco. Então: usar `dados/fotos/` sempre que
existir material do Wellington. Imagem de IA só quando não houver foto do
serviço em questão — e nunca com rosto de pessoa identificável.

Regras de composição (valem pros dois casos):

- **Full-bleed** (`inset:0; background-size:cover`) + `::after` com scrim no topo
  (fade 0→66%) pro texto ler sobre a imagem. Variante `.cena.light` (scrim claro,
  texto navy). **Nunca** imagem cortada por gradiente no meio — o Guilherme
  rejeita.
- **Assunto no terço inferior, metade de cima vazia** (espaço negativo pro
  texto). Ao escolher a foto do Wellington, priorizar enquadramento com céu /
  parede lisa / teto em cima. Ao gerar por IA, prompt-chave: *"CRITICAL FRAMING:
  subject sits LOW in the BOTTOM ~40-45%; the WHOLE UPPER ~55-60% is smooth EMPTY
  negative space, reserved for text."*
- **Enquadramento fino** só na linha do `.cena-img`: `background-size` = zoom
  (114%…), `background-position:center NN%` = sobe/desce (NN maior = imagem sobe).
- **Ritmo de cor** dos cenários: escuro → claro → escuro. A quebra no meio
  funciona.

## E. Navegação e social

- **Setas:** par centralizado na base — `‹` faint (disco translúcido via
  `color-mix` do currentColor) + `›` em disco brick red com chevron branco.
  Entram nos slides **2 a 6**. Não na capa, não no último. Nada de chevron na
  borda lateral: aquelas são as setas do próprio Instagram.
- **Ícones do Instagram** (curtir / comentar / compartilhar / salvar, outline
  navy) só no **último slide**, depois da pílula.

## F. Capa

- Texto centralizado no **topo** (headline + pílula-gancho), assunto/rosto na
  metade inferior.
- Headline em Archivo 800; o destaque pode ir em brick red (a marca não tem fonte
  itálica de display — o contraste vem da cor e do peso, não de outra família).
- `padding-top:186px` no `.inner` da capa pra descolar do cabeçalho. Menos que
  isso gruda.
- **Sem logo, sem eyebrow, sem "arraste"** na capa. A única marca é o handle.
- Antes de fechar a capa, olhar a **última capa publicada** e alternar
  (claro → foto/escuro → cor da marca → claro). Nunca duas capas iguais seguidas.

## G. Dados e estatística

- **Nunca inventar número** nem atribuir "pesquisa" a dado sem fonte.
- Só fonte primária reputável **e citada na arte**. Blog de ferramenta de
  marketing e press release não valem.
- Se não houver dado limpo, o argumento entra como tese lógica na copy, sem
  número. Melhor sem estatística que com estatística fraca.
- Na WV a prova forte não é estatística de mercado: é **obra feita, antes/depois
  e depoimento de cliente** (o registro do Michael Weymouth em `preferencias.md`
  é o padrão a perseguir).

## H. Render — gotchas desta máquina (PC)

Chrome headless:

```
--headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1
--screenshot=SAIDA.png --window-size=1080,1350 --virtual-time-budget=5000
"file:///C:/Users/.../carrossel.html"
```

- ⚠️ **`?s=N` não funciona neste Chrome.** Query string em `file://` dá
  `ERR_FILE_NOT_FOUND` (ele renderiza a página de erro, PNG de ~17KB).
  **Workaround:** copiar a HTML pro scratchpad trocando
  `const s = new URLSearchParams(...).get('s')` por `const s = '<N>'`,
  renderizar de lá e `Copy-Item` o PNG pra `instagram/slide-0N.png`.
  Copiar as imagens locais junto.
- ⚠️ **Controlled Folder Access (Windows Defender):** o Chrome **não** grava
  screenshot dentro de `Documents\`. Renderizar pro scratchpad
  (`AppData\Local\Temp`) e copiar de lá com `Copy-Item` — o PowerShell tem
  permissão, o Chrome não.
- ⚠️ **URL no Git Bash:** `file://$(pwd)/...` vira `/c/Users/...` e quebra. Usar
  caminho Windows explícito `file:///C:/Users/...` e rodar o render por
  **PowerShell**.
- ⚠️ **Não usar `2>$null` / `2>/dev/null`** na chamada do chrome.exe — pode
  quebrar a gravação silenciosamente. Conferir `Length` e `LastWriteTime` do PNG.
- ⚠️ Ler/gravar HTML com `[IO.File]::ReadAllText/WriteAllText` em **UTF-8 sem
  BOM**. O `Set-Content -Encoding utf8` do PS 5.1 corrompe acento (mojibake).
- **Sempre conferir cada PNG no Read antes de dar por pronto.**

---

## Referência de fato

O template real é o `carrossel.html` do boca-a-boca em
`hope-consult/marketing/conteudo/carrossel-boca-a-boca-2026-07-15/` — copiar de
lá e trocar copy, paleta e fontes pelas da WV. Quando o primeiro carrossel da WV
fechar e for aprovado, ele vira a referência daqui e este parágrafo sai.
