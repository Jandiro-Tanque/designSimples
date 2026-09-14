# DesignSimples

Site comercial de um estúdio independente de desenvolvimento web em Angola.
A aplicação principal usa **Django 5.2 LTS com templates**, CSS e JavaScript simples. Não precisa de React, Vite ou Node para funcionar.
A pasta `web/` contém a versão React anterior, preservada como referência; os ficheiros HTML/CSS/JS antigos da raiz e a ideia original também foram mantidos. Não são carregados pelo Django.

## Desenvolvimento

Requer Python 3.10+; validado com Python 3.14.2 e Django 5.2.17. No Windows, a partir da raiz do workspace:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver
```

Se o ambiente já existir, não é necessário voltar a criá-lo. No VS Code, seleccione `.venv/Scripts/python.exe` como interpretador.
Abra http://127.0.0.1:8000/. Não use Live Server nem abra o HTML directamente: os templates precisam de ser renderizados pelo Django.

```powershell
.\.venv\Scripts\python.exe manage.py test website
.\.venv\Scripts\python.exe manage.py check
.\.venv\Scripts\python.exe manage.py collectstatic --noinput
```

Em Linux/macOS, use `python3 -m venv .venv` e `.venv/bin/python` nos restantes comandos. O `collectstatic` reúne os recursos em `staticfiles/`, que não é versionada.

## Organização

- `manage.py`: comandos Django.
- `config/`: settings, URLs, WSGI e ASGI.
- `website/content.py`: contactos, serviços, projectos reais, conceitos e perguntas frequentes.
- `website/views.py`: contexto da página.
- `website/templates/website/base.html`: estrutura, metadados e recursos estáticos.
- `website/templates/website/home.html`: página inicial; `partials/` contém as secções reutilizáveis.
- `website/static/website/css/`: estilos base, layout preservado e animações discretas em `motion.css`.
- `website/static/website/js/site.js`: menu, filtros, diálogos, WhatsApp e animações ao entrar no ecrã.
- `website/static/website/images/`: imagens locais; `vendor/` contém Lucide 0.468.0 e a sua licença original.
- `website/tests.py`: sete testes de renderização, conteúdo, recursos, escape HTML e comportamento HTTP.

Edite `CONTACT`, `SERVICES`, `REAL_PROJECTS` e `CONCEPTS` em `website/content.py` para actualizar o site. Confirme os contactos antes de publicar. O conteúdo ainda é gerido em Python, não pelo Admin.

O Admin padrão está em `/admin/`; para criar o seu próprio utilizador, execute `python manage.py createsuperuser` no ambiente virtual e introduza a password directamente no terminal. Não foi criada nenhuma conta administrativa por esta migração. SQLite, ambiente virtual e ficheiros `.env` estão excluídos do Git.

## Contacto e privacidade

O formulário valida nome e descrição, prepara uma mensagem e abre o WhatsApp. O visitante ainda tem de enviar a mensagem no WhatsApp. Se a nova janela for bloqueada, aparece um link para a reabrir.

O Django renderiza a página, mas não recebe nem armazena os pedidos deste formulário. A rota pública só aceita GET. Não há analytics ou cookies definidos pela página pública; o Admin usa os mecanismos normais de sessão e CSRF do Django. As fontes Manrope e DM Sans são carregadas do Google Fonts, o que implica um pedido a terceiros.

Sem JavaScript, a navegação, os conteúdos, as perguntas frequentes e os links directos de WhatsApp/email continuam disponíveis; os controlos que precisam de JavaScript ficam ocultos. As animações respeitam `prefers-reduced-motion` e não escondem permanentemente o conteúdo.

## Conteúdo comercial

KAZA e Elun aparecem primeiro como projectos reais do percurso do Jandiro, separados dos conceitos. KAZA é apresentado como vencedor do Hackathon de Turismo Sustentável (Julho de 2026), com participação em equipa e contribuição no backend Django; não tem demonstração pública. Elun liga a https://elun.website, que abre na página de entrada e requer conta para aceder ao conteúdo. A autoria e o prémio baseiam-se nas informações do autor; o acesso público ao Elun foi confirmado no navegador.

Forma Studio, Raiz e Lina Costa são marcas fictícias e conceitos visuais, identificados como tal. Os detalhes abrem num diálogo; não são sites completos nem trabalhos de clientes.

Não foram inventados preços, testemunhos ou estatísticas de clientes. Os valores e prazos devem ser definidos numa proposta real. Domínio, alojamento e manutenção devem ter custos e âmbito explícitos.

## Publicação

A versão Django precisa de alojamento Python, não de um build estático React. Pontos de entrada: `config.wsgi:application` ou `config.asgi:application`. O `runserver` é apenas para desenvolvimento; escolha e instale um servidor WSGI/ASGI adequado ao alojamento.

Configure variáveis de ambiente no alojamento:

- `DJANGO_DEBUG=false` (por omissão é `true` para desenvolvimento local).
- `DJANGO_SECRET_KEY`: segredo forte gerado e guardado fora do Git. É obrigatório com DEBUG desligado.
- `DJANGO_ALLOWED_HOSTS`: domínios separados por vírgula, sem protocolo.

As variáveis são lidas do ambiente do processo; ficheiros `.env` não são carregados automaticamente. Configure HTTPS no servidor/proxy, execute `migrate` e `collectstatic`, e faça o alojamento servir `/static/` a partir de `staticfiles/`. Esta configuração ainda não inclui servidor de produção nem WhiteNoise. Os cookies administrativos são marcados como seguros quando DEBUG está desligado.

Execute `python manage.py check --deploy` com as variáveis de produção configuradas e resolva os avisos de segurança conforme o alojamento, incluindo redireccionamento HTTPS e HSTS. Confirme contactos, conteúdo comercial, domínio e necessidades legais de privacidade antes de publicar. A aplicação ainda não foi publicada num domínio público.

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
8. Confirmar movimento reduzido e conteúdo/contacto directo com JavaScript desligado.
