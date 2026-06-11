## Objetivo
Substituir a imagem placeholder do card **"Gravações"** (em `/imersao`) pela imagem enviada (screenshot do Google Meet com Vitor Yuji no ChatGPT).

## Passos

1. Subir a imagem como asset Lovable:
   - `lovable-assets create --file /mnt/user-uploads/image-40.png --filename gravacoes.jpg > src/assets/gravacoes.jpg.asset.json`

2. Em `src/pages/Webinar.tsx`:
   - Importar o pointer: `import gravacoesImg from "@/assets/gravacoes.jpg.asset.json";`
   - Linha 557: trocar `image: "/lovable-uploads/gravacoes.jpg"` por `image: gravacoesImg.url`

Sem alterações de layout, copy ou lógica — apenas troca de imagem.
