# WV Services — MazyOS

Operação da WV Services. Aqui mora o reposicionamento da marca, o site novo,
o Instagram e a máquina de aquisição de cliente online.

## O que é esse workspace

Sistema operacional da WV Services — empresa de serviços residenciais nos EUA.
O trabalho corrente é construir a camada de marca e aquisição digital que a
empresa nunca teve.

**Estrutura de pastas:**
- `_memoria/` — quem é a empresa, como falamos, foco atual
- `identidade/` — marca aplicada em tudo que o sistema gera
  - `identidade/logo/` — arquivos da logo (SVG e PNG). Ver o `README.md` de lá.
- `projetos/` — uma pasta por iniciativa, cada uma com seu `CLAUDE.md` e `briefing.md`
  - `projetos/Site-WV-Services/` — site novo, feito do zero
  - `projetos/Painel-WV-Services/` — sistema interno, reservado, não iniciado
- `marketing/` — campanhas, conteúdo, mídia paga
- `saidas/` — documentos pontuais
- `dados/` — arquivos a analisar
  - `dados/fotos/` — fotos de obra real do Wellington
- `scripts/` — automações
- `templates/` — moldes de skill e perfil

Pasta a criar quando o trabalho chegar nela: `instagram/`.

## Sobre a empresa

WV Services é uma prestadora de serviços residenciais nos Estados Unidos —
construção, elétrica e reparos em geral. Atende proprietários de imóveis na
região onde o Wellington mora. Hoje a base de clientes vem quase toda de
indicação.

Wellington é o dono e executa os serviços. Guilherme (sobrinho, no Brasil)
cuida de marca, site, redes sociais e aquisição digital.

## Frentes de trabalho

- **Identidade visual** — logo, paleta, tipografia, design guide *(prioridade atual)*
- **Site** — refazer a partir do conteúdo do site atual
- **Instagram** — bio, destaques, grade, conteúdo recorrente
- **Anúncios** — Google e Meta, depois que marca e site estiverem prontos

## Tom de voz

Conteúdo de cliente final: **sempre em inglês americano.** Direto, confiável, de
vizinho competente — a empresa cresceu por indicação e a comunicação tem que
soar como a pessoa que o vizinho recomenda.

Conversa de trabalho com o Guilherme: **português**, direto, sem cerimônia.

Evitar: inglês de tradução, linguagem corporativa vazia, promessa exagerada de
resultado, emoji em contexto formal.

## Regras do sistema

- Todo texto voltado ao cliente final sai em inglês. Não entregar em português
  por engano.
- Nenhuma peça visual definitiva antes de `identidade/design-guide.md` estar
  fechado — ele ainda está em construção. Se uma skill visual for chamada antes
  disso, avisar.
- Fuso: o Wellington está 1 hora atrás do horário do Brasil. Considerar isso em
  agendamento de post, horário de anúncio e qualquer contato com ele.
- Referências da marca atual ficam em `identidade/referencias/` — são direção de
  gosto, não base a copiar.

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Google Ads
- [ ] Meta Ads
- [ ] Slack

*(Marcar conforme for instalando os MCPs)*

---

## Regras de operação do MazyOS

### Contexto do negócio

No início de toda conversa, ler:

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Pra qualquer tarefa visual, consultar `identidade/design-guide.md`.

Não listar o que foi lido nem confirmar a leitura. Apenas usar o contexto.

### Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em
`.claude/skills/`. Se encontrar, seguir as instruções da skill.

Ao concluir uma tarefa sem skill que pareça repetível, perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Só quando o padrão de repetição for claro.

### Aprender com correções

Quando o usuário corrigir algo ou der instrução que parece permanente ("na
verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...",
"evita..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Onde salvar:
- **Sobre o negócio** → `_memoria/empresa.md`
- **Sobre preferências e estilo** → `_memoria/preferencias.md`
- **Sobre prioridades e foco** → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`
- **Visual** → `identidade/design-guide.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar
mostrando a linha adicionada.

### Manter contexto atualizado

Ao terminar tarefa que mudou algo relevante (frente nova, mudança de foco,
processo novo, identidade fechada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Mostrar o que vai mudar antes de salvar. Não perguntar em tarefas pontuais.

**Dica:** rode `/atualizar` pra varredura completa quando houver dúvida.

### Criação de skills

1. Verificar template em `templates/skills/`
2. Perguntar se é específica desse projeto (`.claude/skills/`) ou universal (`~/.claude/skills/`)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
4. Arquivos de apoio dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
