const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#navigation');
const setMenu = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav?.classList.toggle('open', open);
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

// Native dialogs provide focus trapping, Escape dismissal and focus restoration.
document.querySelectorAll<HTMLButtonElement>('[data-open]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.open || '') as HTMLDialogElement | null;
    dialog?.showModal();
  });
});
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
document.querySelectorAll<HTMLElement>('[data-project]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector<HTMLSelectElement>('#contact-form-project');
  if (select) select.value = link.dataset.project || '';
  link.closest('dialog')?.close();
}));

const track = document.querySelector<HTMLElement>('#project-track');
const previous = document.querySelector<HTMLButtonElement>('[data-slide="prev"]');
const next = document.querySelector<HTMLButtonElement>('[data-slide="next"]');
const updateControls = () => {
  if (!track) return;
  if (previous) previous.disabled = track.scrollLeft <= 2;
  if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
};
const move = (direction: number) => {
  if (!track) return;
  const card = track.querySelector<HTMLElement>('.project-card:not([hidden])');
  const distance = (card?.getBoundingClientRect().width || track.clientWidth) + parseFloat(getComputedStyle(track).columnGap || '0');
  track.scrollBy({ left: distance * direction, behavior: prefersReducedMotion.matches ? 'instant' : 'smooth' });
};
previous?.addEventListener('click', () => move(-1));
next?.addEventListener('click', () => move(1));
track?.addEventListener('scroll', updateControls, { passive: true });
track?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  }
});
if (track) new ResizeObserver(updateControls).observe(track);
document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b === button);
    b.setAttribute('aria-pressed', String(b === button));
  });
  let count = 0;
  document.querySelectorAll<HTMLElement>('[data-family]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.family !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  track?.scrollTo({ left: 0, behavior: 'instant' });
  const status = document.querySelector('#project-count');
  if (status) status.textContent = `${count} proyectos para comenzar tu nueva historia.`;
  updateControls();
}));
updateControls();

document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    if (!name) {
      const nameInput = form.elements.namedItem('name') as HTMLInputElement;
      nameInput.setCustomValidity('Escribe tu nombre para continuar.');
      nameInput.reportValidity();
      nameInput.addEventListener('input', () => nameInput.setCustomValidity(''), { once: true });
      return;
    }
    const lines = [`Hola, soy ${name}. Me interesa ${data.get('project')}. Quisiera recibir información y coordinar una visita.`];
    if (data.get('phone')) lines.push(`Mi celular: ${String(data.get('phone')).trim()}.`);
    if (data.get('email')) lines.push(`Mi correo: ${String(data.get('email')).trim()}.`);
    const url = `https://wa.me/51938927163?text=${encodeURIComponent(lines.join('\n'))}`;
    const fallback = form.querySelector<HTMLAnchorElement>('[data-whatsapp-fallback]');
    if (fallback) fallback.href = url;
    form.querySelector<HTMLElement>('.form-feedback')?.removeAttribute('hidden');
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});

// Reveal once; reduced-motion and JavaScript-free experiences keep all content visible.
if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
}
const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
const updateNavigation = () => {
  const current = [...sections].reverse().find(section => section.getBoundingClientRect().top < 160)?.id || 'inicio';
  nav?.querySelectorAll<HTMLAnchorElement>('a').forEach(a => {
    const active = a.hash === `#${current}`;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
};
let queued = false;
window.addEventListener('scroll', () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { updateNavigation(); queued = false; });
}, { passive: true });
updateNavigation();
