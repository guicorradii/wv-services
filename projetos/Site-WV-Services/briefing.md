# Briefing — Site WV Services

## Objetivo

Transformar o site de cartão de visitas passivo em canal de aquisição. Hoje o
negócio vive 100% de indicação; o site precisa gerar contato de quem nunca ouviu
falar da empresa.

**Métrica que importa:** pedidos de orçamento vindos do site por mês. Hoje: zero
mensurado.

## Quem visita

Proprietário de casa em Boston e região, com um problema concreto e urgente —
banheiro vazando, cozinha datada, piso levantando, pintura descascando. Está
comparando dois ou três contractors. Já foi mal atendido por alguém antes.

Ele não quer ler sobre a empresa. Quer três coisas, rápido:
1. Você faz o que eu preciso?
2. Você já fez isso antes e ficou bom?
3. Como eu falo com você agora?

O site precisa responder as três acima da dobra.

## Estrutura proposta

1. **Hero** — o que faz + onde atende + CTA de orçamento grátis + foto de obra real
2. **Serviços** — Kitchen · Bathroom · Interior · Exteriors, cada um com foto e
   lista concreta do que inclui
3. **Portfólio** — antes/depois. É a seção mais importante do site.
4. **Provas** — licenciado e segurado (com número), anos de operação, cidades
   atendidas, depoimentos reais
5. **Como funciona** — 3 passos: liga → avaliação grátis no local → orçamento
   e prazo. Reduz o medo de chamar um estranho em casa.
6. **FAQ** — as objeções reais (vindas da pergunta 10 do roteiro do Wellington)
7. **Contato** — telefone clicável, formulário curto, área atendida

## Conteúdo aproveitável do site atual

Serve, com reescrita:
- As quatro categorias de serviço e suas descrições
- "Fully Licensed & Insured", "Complimentary On-Site Assessments",
  "Flexible Payment Options"
- Depoimento do Michael Weymouth (cozinha completa) — é a única voz autêntica lá

Não serve:
- Todo o texto institucional ("exceed your expectations" etc.) — filler de template
- "Excellence Recognized" / prêmios — provavelmente falso, confirmar antes
- Página `/services` inteira — está com o nome de outra empresa no título

## Restrições

- Inglês americano em todo texto de cliente final
- Sem build; `index.html` único
- Telefone `(508) 818-7005` clicável em mobile — a maioria das visitas será de celular
- Email atual é `wcorradi96@gmail.com`. Recomendar migração pra email de domínio
  (`contact@` ou similar) — Gmail pessoal reduz percepção de profissionalismo,
  que é justamente o que o projeto quer atacar.

## Decisões pendentes

- [ ] Domínio: manter `bookwvservices.com` ou registrar algo mais curto?
- [ ] Hospedagem: Vercel (padrão dos outros projetos) ou Netlify?
- [ ] Formulário posta pra onde? Email direto, ou já preparar pro painel futuro?
- [ ] Site em inglês só, ou também espanhol? (Grande Boston tem público hispânico
      relevante; decidido inglês por ora, revisitar depois de ver a demanda)
