from urllib.parse import urlencode

CONTACT = {"phone": "244927155574", "email": "jandirotanque4@gmail.com"}
CONTACT_URL = f"https://wa.me/{CONTACT['phone']}?" + urlencode({
    "text": "Olá, Jandiro! Quero saber mais sobre o DesignSimples."
})
SERVICES = [
    {
        "icon": "globe-2", "title": "Site institucional",
        "label": "Um lugar para o seu negócio.",
        "description": "Apresente a sua empresa, os seus serviços e uma forma simples de os clientes chegarem até si.",
        "features": ["Páginas à medida do negócio", "Contacto e localização", "Adaptado ao telemóvel"],
    },
    {
        "icon": "panels-top-left", "title": "Landing page",
        "label": "Uma página. Um objectivo.",
        "description": "Dê a um produto, serviço ou campanha uma página própria, com um caminho claro até ao contacto.",
        "features": ["Página focada na sua oferta", "Contacto pelo WhatsApp", "Estrutura para campanhas"],
    },
    {
        "icon": "wrench", "title": "Melhorias e manutenção",
        "label": "O seu site pode ir mais longe.",
        "description": "Corrija o que não funciona, actualize o conteúdo ou dê uma nova vida ao site que já tem.",
        "features": ["Análise do site existente", "Correcções e actualizações", "Suporte com âmbito definido"],
    },
]
REAL_PROJECTS = [
    {
        "slug": "kaza", "name": "KAZA", "icon": "trophy",
        "badge": "1.º lugar · Hackathon", "kind": "Turismo sustentável",
        "description": "Projecto vencedor do Hackathon de Turismo Sustentável em Angola, em Julho de 2026. Tecnologia para descobrir destinos e pontos de interesse do país.",
        "contribution_label": "A minha participação",
        "contribution": "Desenvolvimento backend com Django",
        "details": "API de destinos, motor de recomendação e integrações de dados para a plataforma.",
        "credit": "Projecto real · Participação em equipa",
        "status": "Demonstração indisponível", "url": "",
    },
    {
        "slug": "elun", "name": "Elun", "icon": "globe-2",
        "badge": "Site publicado", "kind": "Projecto web",
        "description": "Um projecto real do meu percurso de desenvolvimento web, com uma versão publicada que pode visitar.",
        "contribution_label": "Conheça o projecto", "contribution": "elun.website",
        "details": "O site abre na página de entrada. O acesso ao conteúdo requer uma conta.",
        "credit": "Projecto real", "status": "Site publicado", "url": "https://elun.website",
    },
    {
        "slug": "kengo", "name": "Kengo Store", "icon": "store",
        "badge": "Temporariamente indisponível", "kind": "Projecto web",
        "description": "Outro projecto do meu percurso de desenvolvimento web: Kengo Store.",
        "contribution_label": "A minha participação", "contribution": "Desenvolvimento do projecto",
        "details": "A versão alojada no Render encontra-se temporariamente indisponível. O endereço está disponível abaixo.",
        "credit": "Projecto real", "status": "Temporariamente indisponível",
        "url": "https://kengo-store.onrender.com",
    },
]
CONCEPTS = [
    {
        "slug": "forma", "name": "Forma Studio", "category": "Negócios",
        "type": "Arquitectura · Site institucional",
        "image": "website/images/architecture.jpg",
        "alt": "Casa contemporânea com amplas janelas e jardim",
        "headline": "Espaços para\nviver melhor.",
        "eyebrow": "PENSADO PARA SI", "tagline": "Arquitectura & interiores",
        "action": "Conheça o trabalho", "caption": "Cada espaço começa com uma ideia.",
        "description": "Um conceito para um atelier de arquitectura: projectos em destaque, apresentação do estúdio e contacto para novos pedidos.",
        "features": ["Galeria de projectos", "Apresentação do atelier", "Pedido de contacto"],
        "service": "Site institucional",
    },
    {
        "slug": "raiz", "name": "Raiz", "category": "Negócios",
        "type": "Restauração · Landing page", "image": "website/images/food.jpg",
        "alt": "Prato fresco com legumes e ingredientes coloridos",
        "headline": "À mesa,\ncomo em casa.",
        "eyebrow": "FRESCO. LOCAL. NOSSO.", "tagline": "Sabor que nos aproxima",
        "action": "À nossa mesa", "caption": "Os melhores momentos começam à mesa.",
        "description": "Um conceito para um restaurante local, onde a comida ocupa o primeiro plano e fazer uma reserva fica à distância de uma mensagem.",
        "features": ["Destaques da ementa", "Horários e localização", "Reservas pelo WhatsApp"],
        "service": "Landing page",
    },
    {
        "slug": "lina", "name": "Lina Costa", "category": "Profissionais",
        "type": "Fotografia · Portfólio", "image": "website/images/portrait.jpg",
        "alt": "Retrato fotográfico de uma mulher em luz natural",
        "headline": "Pessoas reais.\nHistórias únicas.",
        "eyebrow": "UM OLHAR MAIS PRÓXIMO", "tagline": "Fotografia com alma",
        "action": "Conheça o trabalho", "caption": "O extraordinário nos dias comuns.",
        "description": "Um conceito de portfólio para uma fotógrafa independente: séries de imagens, serviços e pedidos de sessões num só lugar.",
        "features": ["Portfólio visual", "Serviços de fotografia", "Pedido de sessão"],
        "service": "Site institucional",
    },
]
STEPS = [
    ("Conversamos", "Conta-me sobre o negócio, o que precisa e o que quer alcançar. Primeiro, ouvir."),
    ("Definimos", "Recebe uma proposta com âmbito, investimento e prazo. Tudo claro antes de avançar."),
    ("Criamos", "O site ganha forma. Acompanha o progresso e dá o seu feedback nas etapas combinadas."),
    ("Publicamos", "Depois da aprovação, colocamos o site no ar e passamos as orientações de utilização."),
]
FAQS = [
    ("Quanto custa um site?", "Depende do número de páginas, do conteúdo e das funcionalidades. Depois de conhecer o seu projecto, envio uma proposta em kwanzas, com o que está incluído. O trabalho só começa depois da sua aprovação."),
    ("Quanto tempo demora?", "O prazo é combinado na proposta, depois de definirmos o que vai ser feito. A entrega dos textos, imagens e feedback também entra nesse planeamento."),
    ("Preciso de ter textos e fotografias?", "Pode trazer os materiais que já tem. Se ainda não tiver tudo, identificamos juntos o que falta e combinamos como preparar o conteúdo antes de começar."),
    ("O domínio e o alojamento estão incluídos?", "São custos separados, identificados na proposta. Posso ajudar na escolha e configuração, mantendo o domínio e as contas em seu nome."),
    ("E depois de o site estar online?", "Recebe o site e as orientações para o utilizar. O período de correcções e qualquer manutenção contínua ficam definidos na proposta, sem promessas de suporte ilimitado."),
]