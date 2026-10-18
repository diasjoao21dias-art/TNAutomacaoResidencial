# TN Automação Residencial — site premium

Site estático responsivo, preparado para publicação no Render Static Site. Inclui layout mobile, animações suaves, catálogo de soluções com CTA, FAQ, favicon SVG e imagem Open Graph.

## Antes de publicar (importante)
1. Abra `script.js` e substitua `WHATSAPP_LINK` pelo link real de WhatsApp da empresa. O link de WhatsApp que aparece no print do Instagram está cortado, então foi deixado um fallback para o Instagram `https://www.instagram.com/tnautomacao/` até configurar o link correto.
2. No `index.html`, substitua `https://SEU-DOMINIO.onrender.com/assets/og-image.png` pela URL pública real da imagem OG após publicar (ou pelo domínio final).
3. Confira as soluções e textos para garantir que representam exatamente os serviços oferecidos. As imagens de ambientes deste protótipo são ilustrações feitas em CSS, não fotos de obras reais.

## Publicar no Render
- Crie um repositório GitHub e envie os arquivos desta pasta para a raiz.
- No Render, escolha **New + → Static Site** e conecte o repositório.
- Build Command: deixe vazio.
- Publish Directory: `.`
- Clique em **Create Static Site**.

Não precisa de banco de dados nem comando de build.
