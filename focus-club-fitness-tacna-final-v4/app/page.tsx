const whatsappUrl =
  "https://wa.me/51930792693?text=Hola%20Focus%20Club%20Fitness%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes%20y%20promociones.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Asc.%20de%20Vivienda%20San%20Francisco%20Mz.%2095%20Lt.%2026%2C%20Gregorio%20Albarrac%C3%ADn%2C%20Tacna";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.5Z" />
      <path d="M8.2 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.8c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.7.6-1.6.8-2.5.6-1.1-.2-2.5-.8-4.2-2.3-2-1.8-3.2-4-3.3-5.4 0-.7.2-1.1.5-1.4Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4.5c-.7-.1-1.9-.3-3.2-.3-3.1 0-5.2 1.9-5.2 5.4V12H5v4h3.6v7H13v-7h3.5l.6-4H13V10c0-1.2.3-2 1-2Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function StrengthIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 20v8M12 16v16M36 16v16M41 20v8M12 24h24" /></svg>;
}

function PulseIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 25h8l4-10 7 20 5-13 4 7h10" /></svg>;
}

function MotionIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="31" cy="9" r="4" />
      <path d="m27 17-7 8 7 5-6 11M28 18l7 7 8 1M20 25l-8-3" />
    </svg>
  );
}

const services = [
  { number: "01", title: "Fuerza & musculación", copy: "Un espacio para construir fuerza, mejorar tu técnica y avanzar con constancia, sin importar desde dónde empiezas.", icon: <StrengthIcon /> },
  { number: "02", title: "Fitness & cardio", copy: "Sesiones dinámicas para activar tu energía, elevar tu resistencia y convertir el entrenamiento en parte de tu rutina.", icon: <PulseIcon /> },
  { number: "03", title: "Entrenamiento funcional", copy: "Movimientos completos que retan fuerza, agilidad y coordinación para sentirte mejor dentro y fuera del gimnasio.", icon: <MotionIcon /> },
];

const products = [
  {
    tag: "FUERZA · RECUPERACIÓN",
    title: "Proteína Whey / Isolate",
    copy: "Opciones de proteína para complementar tu alimentación y recuperación después del entrenamiento.",
    image: "/product-whey-isolate.webp",
    alt: "Presentación referencial de proteína Whey Isolate",
  },
  {
    tag: "POTENCIA · RENDIMIENTO",
    title: "Creatina monohidratada",
    copy: "Uno de los suplementos más utilizados para acompañar objetivos de fuerza y desempeño físico.",
    image: "/product-creatine.webp",
    alt: "Presentación referencial de creatina monohidratada",
  },
  {
    tag: "ENERGÍA · ENFOQUE",
    title: "Preentreno y energía",
    copy: "Alternativas para quienes buscan llegar con mayor energía y concentración a cada sesión.",
    image: "/product-preworkout.webp",
    alt: "Presentación referencial de suplemento preentreno",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#contenido">Ir al contenido</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Focus Club Fitness, inicio">
          <img src="/focus-logo-transparent.png" alt="Focus Club Fitness" />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#entrenamiento">Entrenamiento</a>
          <a href="#productos">Productos</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Quiero entrenar <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true"><img src="/focus-hero.webp" alt="" /></div>
        <div className="hero-grain" aria-hidden="true" />
        <div className="bolt bolt-one" aria-hidden="true" />
        <div className="bolt bolt-two" aria-hidden="true" />
        <div className="hero-content" id="contenido">
          <p className="eyebrow reveal reveal-1"><span /> Gimnasio en Gregorio Albarracín · Tacna</p>
          <h1 className="reveal reveal-2">Entrena con<span>propósito.</span></h1>
          <p className="hero-copy reveal reveal-3">Tu energía cambia cuando encuentras el lugar correcto. Entrena fuerza, fitness y funcional en una comunidad que va por más.</p>
          <div className="hero-actions reveal reveal-4">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Conocer promociones <WhatsAppIcon /></a>
            <a className="text-link" href="#entrenamiento">Ver entrenamientos</a>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true">FOCUS / DISCIPLINA / ENERGÍA</div>
        <a className="scroll-cue" href="#experiencia" aria-label="Explorar la página"><span /> Descubre Focus</a>
      </section>

      <section className="ticker" aria-label="Valores de Focus">
        <div className="ticker-track">
          <span>FUERZA</span><i>✦</i><span>DISCIPLINA</span><i>✦</i><span>ENERGÍA</span><i>✦</i><span>RESULTADOS</span><i>✦</i><span>FOCUS</span><i>✦</i>
          <span>FUERZA</span><i>✦</i><span>DISCIPLINA</span><i>✦</i><span>ENERGÍA</span><i>✦</i><span>RESULTADOS</span><i>✦</i><span>FOCUS</span><i>✦</i>
        </div>
      </section>

      <section className="intro section-pad" id="experiencia">
        <div className="section-kicker"><span>01</span><p>La experiencia Focus</p></div>
        <div className="intro-grid">
          <h2>Tu meta merece<span>todo tu enfoque.</span></h2>
          <div className="intro-copy">
            <p>No se trata solo de venir al gimnasio. Se trata de encontrar el ritmo, la motivación y la disciplina para seguir avanzando.</p>
            <p>En Focus encuentras entrenamiento para distintos objetivos en una sede cercana, directa y lista para ayudarte a dar el siguiente paso.</p>
            <a className="line-link" href={whatsappUrl} target="_blank" rel="noreferrer">Cuéntanos cuál es tu objetivo <ArrowIcon /></a>
          </div>
        </div>
        <div className="proof-grid">
          <article><strong>01</strong><span>Una sola sede</span><p>Atención cercana en Gregorio Albarracín.</p></article>
          <article><strong>03</strong><span>Formas de entrenar</span><p>Fuerza, fitness y entrenamiento funcional.</p></article>
          <article><strong>100%</strong><span>Enfoque en tu avance</span><p>Empieza a tu ritmo y construye constancia.</p></article>
        </div>
      </section>

      <section className="training section-pad" id="entrenamiento">
        <div className="section-heading">
          <div className="section-kicker light"><span>02</span><p>Elige tu entrenamiento</p></div>
          <h2>Muévete. Supérate. Repite.</h2>
          <p>Entrena de acuerdo con tu objetivo y haz que cada sesión cuente.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><div className="service-icon">{service.icon}</div></div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar por ${service.title}`}>Consultar <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="products section-pad" id="productos">
        <div className="products-heading">
          <div>
            <div className="section-kicker"><span>03</span><p>Suplementación disponible</p></div>
            <h2>Complementa tu<span>progreso.</span></h2>
          </div>
          <div className="products-intro">
            <p>Encuentra opciones para acompañar tus objetivos de entrenamiento. Consulta las presentaciones, marcas y stock disponibles directamente con Focus.</p>
            <span>Imágenes referenciales · Venta sujeta a disponibilidad</span>
          </div>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.title}>
              <div className="product-media">
                <img src={product.image} alt={product.alt} loading="lazy" />
                <span className="product-index">0{index + 1}</span>
              </div>
              <div className="product-body">
                <p>{product.tag}</p>
                <h3>{product.title}</h3>
                <span>{product.copy}</span>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar disponibilidad de ${product.title}`}>
                  Consultar disponibilidad <WhatsAppIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="Motivación">
        <div className="statement-image" aria-hidden="true"><img src="/focus-statement-v2.webp" alt="" loading="lazy" /></div>
        <div className="statement-overlay" />
        <div className="statement-copy">
          <p>NO ESPERES EL MOMENTO PERFECTO.</p>
          <h2>Haz que <em>hoy</em><span>cuente.</span></h2>
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Empieza en Focus <ArrowIcon /></a>
        </div>
      </section>

      <section className="location section-pad" id="ubicacion">
        <div className="section-kicker"><span>04</span><p>Encuéntranos</p></div>
        <div className="location-grid">
          <div className="location-copy">
            <p className="location-label">ÚNICA SEDE · TACNA</p>
            <h2>Tu próxima sesión está más cerca de lo que crees.</h2>
            <address>Asc. de Vivienda San Francisco<br />Mz. 95 Lt. 26<br />Gregorio Albarracín Lanchipa, Tacna</address>
            <p className="reference">Frente al Mercado Santa Rosa, 3.er piso.</p>
            <div className="location-actions">
              <a className="primary-button dark" href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar <ArrowIcon /></a>
              <a className="phone-link" href="tel:+51930792693">930 792 693</a>
            </div>
          </div>
          <a className="map-card" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir ubicación de Focus en Google Maps">
            <div className="map-grid" aria-hidden="true"><span className="road road-a" /><span className="road road-b" /><span className="road road-c" /><span className="pin"><i /></span></div>
            <div className="map-caption"><span>Gregorio Albarracín</span><strong>Abrir en Google Maps <ArrowIcon /></strong></div>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div><p>Tu mejor versión no se encuentra.</p><h2>Se construye.</h2></div>
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar con Focus <WhatsAppIcon /></a>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio"><img src="/focus-logo-transparent.png" alt="Focus Club Fitness" /></a>
        <p>Una sede. Una comunidad. Tu enfoque.</p>
        <div className="social-links" aria-label="Canales de Focus Club Fitness">
          <a href="https://www.facebook.com/FOCUSclubfitness/" target="_blank" rel="noreferrer" aria-label="Facebook de Focus Club Fitness"><FacebookIcon /></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp de Focus Club Fitness"><WhatsAppIcon /></a>
          <a href={mapUrl} target="_blank" rel="noreferrer" aria-label="Ubicación en Google Maps"><MapPinIcon /></a>
        </div>
        <small>© 2026 Focus Club Fitness Tacna</small>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp"><WhatsAppIcon /><span>Escríbenos</span></a>
    </main>
  );
}
