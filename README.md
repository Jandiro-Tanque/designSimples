# DesignSimples

Site comercial de um estúdio independente de desenvolvimento web em Angola.
A nova aplicação está em `web/`: React 19, Vite, CSS e ícones Lucide, sem backend nesta fase.
A ideia original e os ficheiros HTML/CSS/JS antigos foram preservados na raiz.

## Desenvolvimento

Requer Node.js 22.12+ (ou uma versão LTS mais recente) e npm.
Na raiz deste workspace:

```sh
npm --prefix web install
npm --prefix web run dev
```

Abra o endereço indicado pelo Vite. Não abra o HTML directamente nem use Live Server: a nova versão precisa do Vite para transformar o React. O `index.html` da raiz é a versão antiga.

```sh
npm --prefix web run lint
npm --prefix web run build
npm --prefix web run preview
```

O build gera `web/dist/`. O preview permite verificar esse build localmente.

## Organização

- `web/src/App.jsx`: serviços, contactos, conceitos, perguntas frequentes e componentes.
- `web/src/App.css`: layout, componentes e regras responsivas.
- `web/src/index.css`: fontes, cores e estilos base.
- `web/public/images/`: fotografias servidas localmente.
- `web/index.html`: idioma, título e descrição para motores de pesquisa.

Os contactos estão na constante `contact` de `web/src/App.jsx`. Confirme o número de WhatsApp e o email antes de publicar.

## Contacto e privacidade

O formulário valida nome e descrição, prepara uma mensagem e abre o WhatsApp. O visitante ainda tem de enviar a mensagem no WhatsApp. Se a nova janela for bloqueada, aparece um link para a reabrir.

Não há envio de email, armazenamento de pedidos, analytics, cookies de aplicação ou backend. As fontes Manrope e DM Sans são carregadas do Google Fonts, o que implica um pedido a terceiros. Para eliminar essa dependência, aloje as fontes localmente antes de publicar.

## Conteúdo comercial

Forma Studio, Raiz e Lina Costa são marcas fictícias e conceitos visuais, identificados como tal. Os detalhes abrem num diálogo; não são sites completos nem trabalhos de clientes.

Não foram inventados preços, testemunhos ou estatísticas de clientes. Os valores e prazos devem ser definidos numa proposta real. Domínio, alojamento e manutenção devem ter custos e âmbito explícitos.

## Publicação

Num serviço de alojamento estático, configure:

- Directório raiz do projecto: `web`.
- Comando de build: `npm run build`.
- Directório de saída: `dist`.

O site pode ser publicado como ficheiros estáticos, sem servidor Django. Um backend Django poderá ser acrescentado se houver necessidade de guardar pedidos, gerir conteúdos ou autenticar utilizadores. Nunca coloque segredos nas variáveis `VITE_*`: são públicas no browser.

Antes de publicar, confirme contactos, conteúdo comercial, domínio e necessidades legais de privacidade. A aplicação ainda não foi publicada num domínio público.

## Imagens

Fotografias do Unsplash utilizadas como imagens ilustrativas dos conceitos, não como fotografias de trabalhos realizados pelo DesignSimples. Fontes das cópias locais:

- Arquitectura: https://images.unsplash.com/photo-1600585154340-be6161a56a0c
- Gastronomia: https://images.unsplash.com/photo-1512621776951-a57141f2eefd
- Retrato: https://images.unsplash.com/photo-1534528741775-53994a69daeb
- Licença: https://unsplash.com/license

## Verificação manual

1. Filtrar por Todos, Negócios e Profissionais.
2. Abrir um conceito e fechar pelo botão, pelo fundo e por Escape; confirmar que o foco volta ao projecto.
3. Escolher um serviço ou um conceito e confirmar a pré-selecção no formulário.
4. Submeter vazio ou apenas com espaços: não deve abrir o WhatsApp.
5. Preencher com acentos e `&`: verificar o texto preparado sem enviar uma mensagem de teste ao destinatário.
6. Confirmar o link alternativo e que editar o pedido limpa o estado anterior.
7. Testar menu móvel, perguntas frequentes, teclado e larguras de 320 a 1920 px.
