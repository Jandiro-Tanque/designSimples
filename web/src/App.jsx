import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  PanelsTopLeft,
  Plus,
  Wrench,
  X,
} from "lucide-react";
import "./App.css";

const contact = { phone: "244927155574", email: "jandirotanque4@gmail.com" };
const whatsapp = (message) =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
const services = [
  {
    icon: Globe2,
    title: "Site institucional",
    label: "Um lugar para o seu negócio.",
    description:
      "Apresente a sua empresa, os seus serviços e uma forma simples de os clientes chegarem até si.",
    features: [
      "Páginas à medida do negócio",
      "Contacto e localização",
      "Adaptado ao telemóvel",
    ],
  },
  {
    icon: PanelsTopLeft,
    title: "Landing page",
    label: "Uma página. Um objectivo.",
    description:
      "Dê a um produto, serviço ou campanha uma página própria, com um caminho claro até ao contacto.",
    features: [
      "Página focada na sua oferta",
      "Contacto pelo WhatsApp",
      "Estrutura para campanhas",
    ],
  },
  {
    icon: Wrench,
    title: "Melhorias e manutenção",
    label: "O seu site pode ir mais longe.",
    description:
      "Corrija o que não funciona, actualize o conteúdo ou dê uma nova vida ao site que já tem.",
    features: [
      "Análise do site existente",
      "Correcções e actualizações",
      "Suporte com âmbito definido",
    ],
  },
];
const projects = [
  {
    id: "forma",
    name: "Forma Studio",
    category: "Negócios",
    type: "Arquitectura · Site institucional",
    image: "/images/architecture.jpg",
    alt: "Casa contemporânea com volumes brancos e jardim",
    className: "forma",
    headline: "Espaços para\nviver melhor.",
    description:
      "Um conceito para um atelier de arquitectura: projectos em destaque, apresentação do estúdio e contacto para novos pedidos.",
    features: [
      "Galeria de projectos",
      "Apresentação do atelier",
      "Pedido de contacto",
    ],
    service: "Site institucional",
  },
  {
    id: "raiz",
    name: "Raiz",
    category: "Negócios",
    type: "Restauração · Landing page",
    image: "/images/food.jpg",
    alt: "Prato fresco com legumes e ingredientes coloridos",
    className: "raiz",
    headline: "À mesa,\ncomo em casa.",
    description:
      "Um conceito para um restaurante local, onde a comida ocupa o primeiro plano e fazer uma reserva fica à distância de uma mensagem.",
    features: [
      "Destaques da ementa",
      "Horários e localização",
      "Reservas pelo WhatsApp",
    ],
    service: "Landing page",
  },
  {
    id: "lina",
    name: "Lina Costa",
    category: "Profissionais",
    type: "Fotografia · Portfólio",
    image: "/images/portrait.jpg",
    alt: "Retrato fotográfico de uma mulher em luz natural",
    className: "lina",
    headline: "Pessoas reais.\nHistórias únicas.",
    description:
      "Um conceito de portfólio para uma fotógrafa independente: séries de imagens, serviços e pedidos de sessões num só lugar.",
    features: [
      "Portfólio visual",
      "Serviços de fotografia",
      "Pedido de sessão",
    ],
    service: "Site institucional",
  },
];
const faqs = [
  [
    "Quanto custa um site?",
    "Depende do número de páginas, do conteúdo e das funcionalidades. Depois de conhecer o seu projecto, envio uma proposta em kwanzas, com o que está incluído. O trabalho só começa depois da sua aprovação.",
  ],
  [
    "Quanto tempo demora?",
    "O prazo é combinado na proposta, depois de definirmos o que vai ser feito. A entrega dos textos, imagens e feedback também entra nesse planeamento.",
  ],
  [
    "Preciso de ter textos e fotografias?",
    "Pode trazer os materiais que já tem. Se ainda não tiver tudo, identificamos juntos o que falta e combinamos como preparar o conteúdo antes de começar.",
  ],
  [
    "O domínio e o alojamento estão incluídos?",
    "São custos separados, identificados na proposta. Posso ajudar na escolha e configuração, mantendo o domínio e as contas em seu nome.",
  ],
  [
    "E depois de o site estar online?",
    "Recebe o site e as orientações para o utilizar. O período de correcções e qualquer manutenção contínua ficam definidos na proposta, sem promessas de suporte ilimitado.",
  ],
];

function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#inicio"
      aria-label="DesignSimples, início"
    >
      <Asterisk aria-hidden="true" strokeWidth={2.5} />
      <span>
        designsimples<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.className}`}>
      <div className="preview-nav">
        <span>
          {project.name}
          <span className="preview-dot">.</span>
        </span>
        <span className="preview-nav-label">
          {project.id === "raiz"
            ? "Sabor que nos aproxima"
            : project.id === "lina"
              ? "Fotografia com alma"
              : "Arquitectura & interiores"}
        </span>
        <Plus size={14} />
      </div>
      <div className="preview-scene">
        <img src={project.image} alt={project.alt} loading="lazy" />
        <div className="preview-copy">
          <span>
            {project.id === "forma"
              ? "PENSADO PARA SI"
              : project.id === "raiz"
                ? "FRESCO. LOCAL. NOSSO."
                : "UM OLHAR MAIS PRÓXIMO"}
          </span>
          <h3>{project.headline}</h3>
          <span className="preview-link">
            {project.id === "raiz" ? "À nossa mesa" : "Conheça o trabalho"}{" "}
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
      <div className="preview-bottom">
        <span>
          {project.id === "forma"
            ? "Cada espaço começa com uma ideia."
            : project.id === "raiz"
              ? "Os melhores momentos começam à mesa."
              : "O extraordinário nos dias comuns."}
        </span>
        <span>01 / 03</span>
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose, onChoose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-header">
        <span className="eyebrow">Projecto demonstrativo</span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Fechar projecto"
          title="Fechar projecto"
          autoFocus
        >
          <X size={22} />
        </button>
      </div>
      <ProjectPreview project={project} />
      <div className="dialog-body">
        <span className="eyebrow">{project.type}</span>
        <h2 id="project-title">{project.name}</h2>
        <p>{project.description}</p>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <p className="disclosure">
          Marca fictícia e conceito visual. Não representa um cliente nem um
          site publicado.
        </p>
        <button
          className="button button-dark"
          onClick={() => onChoose(project.service)}
        >
          Quero um projecto assim <ArrowUpRight size={18} />
        </button>
      </div>
    </dialog>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [service, setService] = useState("Ainda não sei");
  const [formError, setFormError] = useState("");
  const [preparedLink, setPreparedLink] = useState("");
  const projectTrigger = useRef(null);

  function chooseService(value) {
    setService(value);
    setPreparedLink("");
    setSelectedProject(null);
    requestAnimationFrame(() => {
      document
        .getElementById("contacto")
        .scrollIntoView({ behavior: "smooth" });
      document.getElementById("name").focus({ preventScroll: true });
    });
  }

  function closeProject() {
    setSelectedProject(null);
    requestAnimationFrame(() => projectTrigger.current?.focus());
  }

  function submitBrief(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = values.get("name").trim();
    const business = values.get("business").trim();
    const message = values.get("message").trim();
    if (!name || !message) {
      setFormError("Preencha o seu nome e conte um pouco sobre o projecto.");
      return;
    }
    setFormError("");
    const url = whatsapp(
      `Olá, Jandiro! Gostaria de falar sobre um projecto com o DesignSimples.\n\nNome: ${name}\nNegócio: ${business || "Por definir"}\nServiço: ${service}\n\n${message}`,
    );
    setPreparedLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <header className="site-header" id="inicio">
        <div className="container nav-inner">
          <Brand />
          <nav
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            id="main-navigation"
            aria-label="Navegação principal"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("menu-toggle").focus();
              }
            }}
          >
            {[
              ["servicos", "Serviços"],
              ["projectos", "Projectos"],
              ["processo", "Como funciona"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contacto"
              onClick={() => setMenuOpen(false)}
            >
              Vamos conversar <ArrowUpRight size={17} />
            </a>
          </nav>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-top">
            <div className="hero-kicker">
              <span className="eyebrow">
                Estúdio independente de desenvolvimento web
              </span>
              <span className="location">
                <span /> Luanda, Angola · Online, em todo o lado
              </span>
            </div>
            <h1 id="hero-title">
              DesignSimples<span className="hero-period">.</span>
              <Asterisk aria-hidden="true" />
            </h1>
            <div className="hero-intro">
              <p>
                O seu negócio merece um bom site.
                <br />
                <span>Vamos torná-lo realidade.</span>
              </p>
              <a className="button button-dark" href="#contacto">
                Vamos criar o seu site <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/architecture.jpg"
              alt="Arquitectura contemporânea de linhas simples, com fachada branca e jardim"
              fetchPriority="high"
            />
            <div className="hero-image-shade" />
            <div className="container hero-image-content">
              <div>
                <span className="eyebrow">
                  Menos complicação. Mais presença.
                </span>
                <h2>
                  Boas ideias merecem
                  <br />
                  sair do papel.
                </h2>
              </div>
              <a href="#projectos" className="hero-project-link">
                Explore as possibilidades <ArrowDown size={20} />
              </a>
            </div>
            <span className="image-caption">
              Forma Studio / Conceito de site institucional
            </span>
          </div>
        </section>
        <div className="promise-strip">
          <div className="container promise-inner">
            <span>
              <Check /> Design à medida
            </span>
            <span>
              <Check /> Do computador ao telemóvel
            </span>
            <span>
              <Check /> Contacto directo com quem cria
            </span>
            <span>
              <Check /> Feito em Angola
            </span>
          </div>
        </div>
        <section className="section container" id="servicos">
          <div className="section-heading">
            <div>
              <span className="eyebrow section-index">01 / O que fazemos</span>
              <h2>
                Simples na experiência.
                <br />
                <span>Sério no resultado.</span>
              </h2>
            </div>
            <p>
              Para quem está a começar, para quem quer crescer e para quem sabe
              que está na hora de mudar.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, ...item }, index) => (
              <article className="service" key={item.title}>
                <div className="service-top">
                  <Icon size={27} strokeWidth={1.5} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="service-label">{item.label}</p>
                <p className="service-description">{item.description}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="text-link"
                  onClick={() => chooseService(item.title)}
                >
                  Conversar sobre este serviço <ArrowUpRight size={18} />
                </button>
              </article>
            ))}
          </div>
          <div className="pricing-note">
            <span>
              Sem pacotes às cegas. Cada negócio tem o seu ponto de partida.
            </span>
            <span>
              Proposta personalizada em Kz <ArrowUpRight size={16} />
            </span>
          </div>
        </section>
        <section className="projects-section" id="projectos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow section-index">
                  02 / Possibilidades, na prática
                </span>
                <h2>
                  Imagine o seu negócio
                  <br />
                  <span>assim.</span>
                </h2>
              </div>
              <p>
                Três marcas fictícias. Três direcções diferentes.
                <br />
                Conceitos para mostrar o que podemos criar.
              </p>
            </div>
            <div className="project-toolbar">
              <div
                className="filters"
                role="group"
                aria-label="Filtrar projectos"
              >
                {["Todos", "Negócios", "Profissionais"].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="concept-note">
                Conceitos, não trabalhos de clientes
              </span>
            </div>
            <div className="projects-grid">
              {projects
                .filter(
                  (project) =>
                    filter === "Todos" || project.category === filter,
                )
                .map((project) => (
                  <button
                    className="project-card"
                    key={project.id}
                    onClick={(event) => {
                      projectTrigger.current = event.currentTarget;
                      setSelectedProject(project);
                    }}
                    aria-label={`Explorar conceito ${project.name}`}
                  >
                    <ProjectPreview project={project} />
                    <div className="project-meta">
                      <div>
                        <span>{project.type}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <span className="project-arrow">
                        <ArrowUpRight size={22} />
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </section>
        <section className="section container process-section" id="processo">
          <div className="section-heading">
            <div>
              <span className="eyebrow section-index">
                03 / Do primeiro olá ao site no ar
              </span>
              <h2>
                Uma conversa começa.
                <br />
                <span>Um projecto acontece.</span>
              </h2>
            </div>
            <a className="text-link" href="#contacto">
              Começamos? <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="steps">
            {[
              [
                "Conversamos",
                "Conta-me sobre o negócio, o que precisa e o que quer alcançar. Primeiro, ouvir.",
              ],
              [
                "Definimos",
                "Recebe uma proposta com âmbito, investimento e prazo. Tudo claro antes de avançar.",
              ],
              [
                "Criamos",
                "O site ganha forma. Acompanha o progresso e dá o seu feedback nas etapas combinadas.",
              ],
              [
                "Publicamos",
                "Depois da aprovação, colocamos o site no ar e passamos as orientações de utilização.",
              ],
            ].map(([title, description], index) => (
              <article key={title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="container about-inner">
            <div className="about-mark">
              <Asterisk aria-hidden="true" />
              <span>
                Pequeno estúdio.
                <br />
                Envolvimento inteiro.
              </span>
            </div>
            <div>
              <span className="eyebrow">Uma pessoa real do outro lado.</span>
              <h2>
                Olá, sou o Jandiro.
                <br />
                Vamos construir algo seu.
              </h2>
              <p>
                Sou programador em Angola, com foco em Python, Django e
                desenvolvimento web. Criei o DesignSimples para aproximar a
                tecnologia de quem tem um negócio para fazer crescer.
              </p>
              <p>
                Aqui, fala directamente com quem vai construir o seu site. Da
                primeira ideia aos últimos detalhes.
              </p>
              <a
                className="text-link"
                href="https://github.com/Jandiro-Tanque"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={19} /> Conheça o meu trabalho no GitHub{" "}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="section container faq-section">
          <div>
            <span className="eyebrow section-index">
              04 / Sem pontas soltas
            </span>
            <h2>
              É normal
              <br />
              <span>ter perguntas.</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus className="faq-plus" size={20} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contacto">
          <div className="container contact-grid">
            <div className="contact-intro">
              <span className="eyebrow">05 / O próximo passo é seu</span>
              <h2>
                Tem uma ideia?
                <br />
                Vamos falar<span>.</span>
              </h2>
              <p>
                Não precisa de ter tudo definido.
                <br />
                Começamos pelo que tem em mente.
              </p>
              <a
                className="contact-direct"
                href={whatsapp(
                  "Olá, Jandiro! Quero saber mais sobre o DesignSimples.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={21} />
                <span>
                  Prefere uma conversa?
                  <strong>
                    Falar pelo WhatsApp <ArrowUpRight size={17} />
                  </strong>
                </span>
              </a>
              <a className="email-link" href={`mailto:${contact.email}`}>
                <Mail size={17} />
                {contact.email}
              </a>
              <span className="contact-location">
                Luanda, Angola · Atendimento em português
              </span>
            </div>
            <form
              className="brief-form"
              onSubmit={submitBrief}
              onChange={() => {
                setPreparedLink("");
                setFormError("");
              }}
            >
              <div className="form-row">
                <label htmlFor="name">
                  O seu nome <span>*</span>
                  <input
                    id="name"
                    name="name"
                    placeholder="Como se chama?"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label htmlFor="business">
                  Nome do negócio
                  <input
                    id="business"
                    name="business"
                    placeholder="O seu negócio ou projecto"
                    autoComplete="organization"
                    maxLength={150}
                  />
                </label>
              </div>
              <label htmlFor="service">
                O que vamos criar?
                <div className="select-wrap">
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                  >
                    {[
                      "Ainda não sei",
                      ...services.map((item) => item.title),
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown size={17} />
                </div>
              </label>
              <label htmlFor="message">
                Conte-me a sua ideia <span>*</span>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="O que faz o seu negócio? O que gostaria de ter no site?"
                  required
                  maxLength={2000}
                />
              </label>
              <p className="privacy-note">
                Os dados são partilhados pelo WhatsApp apenas quando enviar a
                mensagem. Este formulário não os guarda num servidor.
              </p>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <button className="button button-coral" type="submit">
                Continuar no WhatsApp <ArrowUpRight size={20} />
              </button>
              {preparedLink && (
                <p className="form-status" role="status">
                  Pedido preparado, ainda não enviado. Envie a mensagem no
                  WhatsApp.{" "}
                  <a href={preparedLink} target="_blank" rel="noreferrer">
                    Abrir novamente <ArrowUpRight size={14} />
                  </a>
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <Brand light />
          <span>Boas ideias. Bons sites. Sem complicação.</span>
          <a
            href="#inicio"
            className="back-top"
            aria-label="Voltar ao início"
            title="Voltar ao início"
          >
            <ArrowUpRight size={23} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} DesignSimples</span>
          <span>De Angola, para a sua próxima ideia.</span>
        </div>
      </footer>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={closeProject}
          onChoose={chooseService}
        />
      )}
    </>
  );
}

export default App;
