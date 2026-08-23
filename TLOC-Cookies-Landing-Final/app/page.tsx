import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const whatsappUrl =
  "https://wa.me/51961714497?text=Hola%20TLOC%20%F0%9F%8D%AA%20Quiero%20conocer%20los%20sabores%20disponibles%20de%20hoy";

const favorites = [
  { image: "/images/tloc-franuji.webp", name: "Franuji", note: "Suave, frutal y con una sorpresa en el centro.", tag: "TLOC original" },
  { image: "/images/tloc-classic.webp", name: "La clásica", note: "Doradita por fuera, suave por dentro y cargada de chocolate.", tag: "Favorita" },
  { image: "/images/tloc-full-chocolate-v2.webp", name: "Full chocolate", note: "Para quienes creen que nunca existe demasiado chocolate.", tag: "Intensa" },
  { image: "/images/tloc-share.webp", name: "TLOC para compartir", note: "El antojo convertido en una celebración inolvidable.", tag: "Edición especial" },
];

const tickerRounds = [0, 1];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.2-4.3a8.5 8.5 0 1 1 15.8-4.4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.3 7.8c.3-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.5 1 1.2 1.7 2.2 2.2.3.2.5.2.7 0l.9-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.6 0 .4-.2 1.2-.7 1.7-.6.6-1.4.9-2.4.7-1.1-.2-2.6-.8-4.2-2.2-1.8-1.6-2.9-3.6-3-4.8 0-.7.1-1.2.4-1.6Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="TLOC Cookies, volver al inicio">
          <span className="brand-mark">T</span><span>TLOC<span className="brand-dot">.</span>COOKIES</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#favoritas">Favoritas</a><a href="#experiencia">La experiencia</a><a href="#visitanos">Visítanos</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir ahora <ArrowIcon /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Hechas en Tacna, para alegrarte el día</p>
          <h1>Horneamos<br /><em>felicidad.</em></h1>
          <p className="hero-lead">Cookies rellenas, sabores que sorprenden y ese primer mordisco que te hace cerrar los ojos. Bienvenido a TLOC.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Pedir por WhatsApp</a>
            <a className="button button-ghost" href="#favoritas">Ver sabores <ArrowIcon /></a>
          </div>
          <div className="trust-row" aria-label="Beneficios de TLOC Cookies">
            <span>Horneadas cada día</span><span>Relleno generoso</span><span>100% espíritu TLOC</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Cookies y mascota oficial de TLOC">
          <div className="hero-photo"><Image src="/images/tloc-hero-v2.webp" alt="Cookies TLOC recién horneadas con centro de chocolate y caja azul" fill sizes="(max-width: 960px) 100vw, 52vw" priority unoptimized /></div>
          <div className="hero-mascot-shot"><Image src="/images/tloc-mascot-scene.webp" alt="Mascota oficial de TLOC sosteniendo una cookie" fill sizes="180px" priority unoptimized /></div>
        </div>
      </section>

      <div className="ticker" aria-label="Características de las cookies">
        <div className="ticker-track">
          {tickerRounds.map((round) => (
            <div className="ticker-group" aria-hidden={round === 1} key={round}>
              <span>CRUJIENTES POR FUERA</span><b>✦</b><span>SUAVES POR DENTRO</span><b>✦</b><span>RELLENAS DE FELICIDAD</span><b>✦</b>
            </div>
          ))}
        </div>
      </div>

      <section className="favorites section" id="favoritas">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Elige tu próximo antojo</p><h2>Las que hacen<br />volver por otra.</h2></div>
          <p>Una selección de la familia TLOC. La carta cambia y siempre hay algo nuevo esperándote.</p>
        </div>
        <div className="favorite-grid">
          {favorites.map((item, index) => (
            <article className={`favorite-card card-${index + 1}`} key={item.name}>
              <div className="favorite-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 720px) 100vw, 25vw" unoptimized /><span className="card-tag">{item.tag}</span></div>
              <div className="favorite-copy">
                <h3>{item.name}</h3><p>{item.note}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar disponibilidad de ${item.name}`}>Quiero probarla <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="availability-note">Los sabores y presentaciones pueden variar según disponibilidad. Escríbenos y te contamos qué salió del horno hoy.</p>
      </section>

      <section className="bite-section" aria-labelledby="bite-title">
        <div className="bite-media reveal">
          <Image src="/images/tloc-cookie-macro.webp" alt="Cookie TLOC partida con centro suave y chocolate fundido" fill sizes="(max-width: 850px) 100vw, 48vw" unoptimized />
          <span className="bite-label">Así se ve<br />la felicidad</span>
        </div>
        <div className="bite-copy reveal">
          <p className="eyebrow eyebrow-light"><span /> El momento TLOC</p>
          <h2 id="bite-title">Muerde.<br /><em>Sonríe.</em><br />Repite.</h2>
          <p>El borde doradito da paso a un centro suave, generoso y lleno de sabor. No es solo una cookie: es esa pausa que mejora el día.</p>
          <div className="bite-proof">
            <span><strong>01</strong> Horneado diario</span>
            <span><strong>02</strong> Centro irresistible</span>
            <span><strong>03</strong> Sabor con actitud</span>
          </div>
          <a className="button button-cream" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir por WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <section className="experience-wrap" id="experiencia">
        <div className="experience section">
          <div className="experience-copy">
            <p className="eyebrow eyebrow-light"><span /> Sabor con personalidad</p>
            <h2>Más que cookies.<br /><em>Una pausa feliz.</em></h2>
            <p className="experience-lead">TLOC nació para convertir un antojo simple en un momento que quieras compartir. Aquí cada detalle —del relleno a la caja— tiene un poquito de nuestra forma de ver la vida.</p>
            <div className="experience-points">
              <div><strong>01</strong><span>Cookies con centro suave y combinaciones que sorprenden.</span></div>
              <div><strong>02</strong><span>Una marca cercana, alegre y orgullosamente tacneña.</span></div>
              <div><strong>03</strong><span>Ediciones, regalos y experiencias para celebrar diferente.</span></div>
            </div>
          </div>
          <div className="experience-gallery">
            <div className="gallery-main"><Image src="/images/tloc-community.webp" alt="Amigos compartiendo cookies TLOC en Tacna" fill sizes="(max-width: 960px) 100vw, 50vw" unoptimized /></div>
            <div className="gallery-community"><Image src="/images/tloc-community-v2.webp" alt="Jóvenes compartiendo cookies TLOC" fill sizes="(max-width: 960px) 65vw, 30vw" unoptimized /></div>
            <div className="gallery-product"><Image src="/images/indulgence.webp" alt="Tortas cookie y postres TLOC para compartir" fill sizes="180px" unoptimized /></div>
            <div className="community-badge"><strong>6.9K+</strong><span>cookie lovers<br />en Instagram</span></div>
          </div>
        </div>
      </section>

      <section className="how section" aria-labelledby="how-title">
        <div className="how-title">
          <div><p className="eyebrow"><span /> Fácil, rápido y muy TLOC</p><h2 id="how-title">Tres formas de<br />disfrutarlo.</h2></div>
          <p>Elige tu momento TLOC: ven por el antojo, recógelo listo o conviértelo en un regalo que sí sorprende.</p>
        </div>
        <div className="how-grid">
          <article>
            <div className="how-media"><Image src="/images/tloc-how-store.webp" alt="Vitrina de cookies en una tienda cálida con identidad azul" fill sizes="(max-width: 720px) 100vw, 33vw" unoptimized /><span className="how-number">01</span></div>
            <div className="how-copy"><h3>Ven a la tienda</h3><p>Elige con calma, mira los sabores del día y vive la experiencia completa.</p><a href="#visitanos">Ver ubicación <ArrowIcon /></a></div>
          </article>
          <article>
            <div className="how-media"><Image src="/images/tloc-how-pickup-v2.webp" alt="Cliente recibiendo una caja azul de cookies TLOC para llevar" fill sizes="(max-width: 720px) 100vw, 33vw" unoptimized /><span className="how-number">02</span></div>
            <div className="how-copy"><h3>Pide para llevar</h3><p>Escríbenos antes de salir y encuentra tu pedido listo para recoger.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Hacer mi pedido <ArrowIcon /></a></div>
          </article>
          <article>
            <div className="how-media"><Image src="/images/tloc-how-gift.webp" alt="Caja de regalo azul con cookies y cinta rosa" fill sizes="(max-width: 720px) 100vw, 33vw" unoptimized /><span className="how-number">03</span></div>
            <div className="how-copy"><h3>Regala TLOC</h3><p>Pregunta por boxes y opciones para convertir cualquier fecha en algo especial.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Quiero sorprender <ArrowIcon /></a></div>
          </article>
        </div>
      </section>

      <section className="visit section" id="visitanos">
        <div className="visit-card">
          <div className="visit-copy">
            <p className="eyebrow eyebrow-light"><span /> Tu próxima parada feliz</p>
            <h2>Nos vemos<br />en TLOC.</h2>
            <div className="visit-details">
              <div><span>Dirección principal</span><strong>Calle Sir Jones 25, Tacna</strong></div>
              <div><span>Horario</span><strong>Lun–Sáb · 11:00 a.m.–9:00 p.m.<br />Dom · 4:00 p.m.–9:00 p.m.</strong></div>
            </div>
            <div className="visit-actions">
              <a className="button button-cream" href="https://www.google.com/maps/search/?api=1&query=Calle+Sir+Jones+25+Tacna+Peru" target="_blank" rel="noreferrer">Cómo llegar <ArrowIcon /></a>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar el punto más cercano</a>
            </div>
          </div>
          <div className="visit-visual">
            <Image src="/images/tloc-mascot-scene.webp" alt="Mascota TLOC invitando a visitar la tienda" width={900} height={900} unoptimized />
            <div className="pin-label"><span>●</span><strong>SIR JONES 25</strong><small>TACNA, PERÚ</small></div>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-intro">
          <p className="eyebrow"><span /> Síguenos la pista</p>
          <h2>El antojo sigue en<br />nuestras redes.</h2>
          <p className="social-copy">Nuevos sabores, ediciones especiales y todo lo que sale del horno, primero en redes.</p>
          <div className="social-proof" aria-label="Más de 6.9 mil seguidores en Instagram">
            <span className="social-mascot-img"><Image src="/images/tloc-mascot-scene.webp" alt="Mascota TLOC" fill sizes="76px" unoptimized /></span>
            <span className="social-proof-copy"><strong>6.9K+</strong><small>cookie lovers<br />en Instagram</small></span>
          </div>
        </div>
        <div className="social-links">
          <a className="social-instagram" href="https://instagram.com/tloc.cookies" target="_blank" rel="noreferrer" aria-label="Abrir Instagram de TLOC"><span className="social-icon"><FaInstagram /></span><span><small>Instagram</small><strong>@tloc.cookies</strong></span><ArrowIcon /></a>
          <a className="social-tiktok" href="https://tiktok.com/@tloc.cookies" target="_blank" rel="noreferrer" aria-label="Abrir TikTok de TLOC"><span className="social-icon"><FaTiktok /></span><span><small>TikTok</small><strong>@tloc.cookies</strong></span><ArrowIcon /></a>
          <a className="social-facebook" href="https://www.facebook.com/tloc.cookies" target="_blank" rel="noreferrer" aria-label="Abrir Facebook de TLOC"><span className="social-icon"><FaFacebookF /></span><span><small>Facebook</small><strong>Tloc.cookies</strong></span><ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">T</span><strong>TLOC.COOKIES</strong></div>
        <p>Horneamos felicidad en Tacna.</p>
        <div><span className="footer-socials"><a href="https://instagram.com/tloc.cookies" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://tiktok.com/@tloc.cookies" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a><a href="https://www.facebook.com/tloc.cookies" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a></span><a href="#inicio">Volver arriba ↑</a><span>© 2026 TLOC Cookies</span></div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir TLOC Cookies por WhatsApp"><FaWhatsapp /><span>Pide por WhatsApp</span></a>
    </main>
  );
}
