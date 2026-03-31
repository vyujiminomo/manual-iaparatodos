

## Plano: Simplificar oferta para apenas Online + mensagem de upsell presencial

### O que muda

1. **Seção de Oferta (linhas 684-795)**: Remover o card "Imersão Presencial" e centralizar apenas o card "Imersão Online", ocupando largura total (max-w-lg centralizado em vez de grid 2 colunas).

2. **Adicionar mensagem abaixo do card Online**: Um texto sutil tipo:
   > "Quer participar presencialmente? Após a compra, você será redirecionado para conhecer a versão presencial. Também enviaremos informações por WhatsApp."

   Estilo discreto, texto cinza claro, sem competir com o CTA principal.

3. **Seção de Bônus/Consultoria (linhas 826-838)**: Remover o botão "Quero Fazer Parte: Presencial →" e deixar apenas o botão "Quero Fazer Parte →" (online), já que a decisão presencial será pós-compra.

4. **Página /upgrade-presencial já existe** — ela já serve como upsell pós-compra, então o fluxo fica natural.

### Arquivos alterados
- `src/pages/Webinar.tsx`

