

## Plano: Redesign do card de oferta no estilo Adapta (mais persuasivo e maior)

### Problemas atuais
- Card pequeno, deslocado para a esquerda
- Sem elementos de urgência/prova social (badges como "Mais Escolhido", desconto percentual)
- Imagem ao lado ocupa espaço sem agregar persuasão

### O que muda

**1. Card centralizado e maior**
- Remover layout side-by-side (card + imagem). O card passa a ser centralizado com `max-w-2xl mx-auto`
- A imagem `ofertaImagem` pode ficar **dentro** do card ou ser removida — o foco é o card ocupar a atenção

**2. Badge "Mais Escolhido | 75% OFF"**
- Adicionar badge verde/teal no topo do card, similar ao da referência Adapta GOLD
- Texto: `🔥 Mais Escolhido | 75% OFF*`
- Estilo: `bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full`

**3. Preço "de/por" com risco no valor original**
- Adicionar preço original riscado (ex: ~~R$ 997~~) acima do preço atual para justificar o "75% OFF"
- Preço atual mantido: 12x R$ 25,55 / R$ 247 à vista
- Tipografia maior e mais impactante

**4. Card com borda destacada**
- Borda colorida (cyan/teal ou gradient) para dar destaque visual, como na referência
- Shadow mais forte (`shadow-2xl`)

**5. Mover imagem para dentro do card ou remover**
- Opção: colocar a imagem dos materiais como uma faixa visual dentro do card, abaixo dos checkmarks
- Ou removê-la e deixar o card 100% focado na conversão

### Estrutura visual do card redesenhado

```text
┌─────────────────────────────────────┐
│  🔥 Mais Escolhido | 75% OFF*      │  ← badge
│                                     │
│  Imersão Online                     │
│  [Ao Vivo via Zoom]                 │
│                                     │
│  ✓ Acesso completo aos 4 Dias      │
│  ✓ Comunidade WhatsApp Exclusiva   │
│  ✓ Gravações e Mapas Mentais       │
│  ✓ Manual IA Para Todos            │
│  ✓ Biblioteca de Prompts           │
│                                     │
│  ~~R$ 997~~                         │  ← preço riscado
│  12x R$ 25,55                       │  ← preço grande
│  ou R$ 247 à vista                  │
│                                     │
│  [  Quero Fazer Parte →  ]          │  ← CTA amarelo
│                                     │
│  🛡 7 Dias de Garantia  🔒 Segura  │
└─────────────────────────────────────┘

  Quer participar presencialmente?...   ← mensagem sutil
```

### Arquivo alterado
- `src/pages/Webinar.tsx` (seção de oferta, linhas ~685-753)

