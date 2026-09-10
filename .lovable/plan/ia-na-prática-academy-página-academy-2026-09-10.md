# IA Na Prática Academy — página /academy

Nova página em `vitoryuji.com/academy`: uma vitrine de vendas com cara de plataforma de cursos (estilo Asimov Academy), apresentando a escada de três produtos.

## Estrutura da página

**1. Topo (hero)**
Fundo escuro, título tipo "Aprenda IA na prática, do zero ao domínio", subtítulo curto explicando que é a plataforma com aulões, cursos e assinatura. Dois botões: "Ver planos" e "Começar pelos aulões".

**2. A escada — como funciona**
Três degraus lado a lado, deixando claro o caminho:
- Aulões (entrada, R$47 cada)
- Curso Dominando IA Generativa (aprofundamento)
- Academy (assinatura mensal, tudo incluso)

**3. Aulões — R$47 cada**
Grade de 4 cards, cada um com ícone, nome e uma linha do que a pessoa sai sabendo:
- Aulão IA para Vendas
- Aulão IA pra Slides
- Aulão IA pra Estudos
- Aulão IA pra Médicos

Cada card tem botão de compra.

**4. Cursos**
Card grande em destaque para "Dominando IA Generativa" com os 3 módulos listados e espaço reservado para próximos cursos ("em breve").

**5. Academy — a assinatura**
Bloco de destaque com o que está incluído:
- Todos os aulões
- Todos os cursos
- 2 aulas ao vivo por mês (1 plantão de dúvidas + 1 aula temática)
- Todo conteúdo novo conforme for lançado
- Bônus: Workbook IA Para Todos

Preço mensal em destaque com botão principal.

**6. Comparativo de planos**
Tabela simples: Aulão / Curso / Academy x o que cada um dá acesso. Deixa a assinatura como a escolha óbvia.

**7. Prova social**
Reaproveita os depoimentos já existentes no site (Max, Karina, Carlos, Osvaldo) num carrossel enxuto.

**8. Perguntas frequentes + rodapé com chamada final**

## Visual

Escuro no estilo Asimov: fundo quase preto, cards com borda sutil e brilho no hover, tipografia grande e limpa, amarelo da marca como cor de destaque nos botões e etiquetas. Totalmente adaptado para celular.

## Detalhes técnicos

- Nova página `src/pages/Cursinho`-style: `src/pages/Academy.tsx`, rota `/academy` registrada em `src/App.tsx` com lazy loading, seguindo o padrão das demais rotas.
- Tokens escuros novos (superfície, borda, brilho, destaque amarelo) adicionados em `src/index.css` e `tailwind.config.ts` — sem cores fixas nos componentes.
- Título e descrição da página via `useDynamicMeta`, com H1 único e imagens com texto alternativo.
- Botões de compra apontam para os links Hotmart; onde o link ainda não existe, o botão fica com o texto "Em breve" até você me passar a URL.

## O que preciso de você depois do rascunho

- Preço do curso Dominando IA Generativa e valor final da assinatura (usarei R$100/mês por enquanto).
- Links de checkout dos 4 aulões e do curso.
- Se quiser imagem/capa própria para cada aulão, ou se posso gerar capas provisórias.
