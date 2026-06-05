const form = document.getElementById('bewerbungsformular');
const statusEl = document.getElementById('form-status');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-navigation');

const setNavigationOpen = isOpen => {
  if (!navToggle || !siteNav) return;
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Navigation schließen' : 'Navigation öffnen';
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    setNavigationOpen(!document.body.classList.contains('nav-open'));
  });

  siteNav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      setNavigationOpen(false);
    }
  });

  document.addEventListener('click', event => {
    if (!document.body.classList.contains('nav-open')) return;
    if (siteNav.contains(event.target) || navToggle.contains(event.target)) return;
    setNavigationOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setNavigationOpen(false);
    }
  });
}

const fieldValue = id => {
  const field = document.getElementById(id);
  return field ? field.value.trim() : '';
};

const getApplicationData = () => ({
  organisation: fieldValue('org-name'),
  kontaktperson: fieldValue('kontaktperson'),
  email: fieldValue('email'),
  region: fieldValue('region'),
  website: fieldValue('website-aktuell'),
  schwerpunkt: fieldValue('tierschutz-bereich'),
  beschreibung: fieldValue('beschreibung'),
  pflegeperson: fieldValue('wer-pflegt'),
  homepage: fieldValue('homepage'),
  source: 'kostenlose-tierschutz-website.de'
});

const setStatus = (message, isError = false) => {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.toggle('error', isError);
};

const buildApplicationMailto = data => {
  const subject = encodeURIComponent('Bewerbung um die Website-Spende: ' + data.organisation);
  const body = encodeURIComponent(
    'Hallo Annemarie und Erik,\n\n' +
    'wir bewerben uns um die kostenlose Tierschutz-Website, weil wir unsere Tierschutzarbeit online besser sichtbar machen möchten.\n\n' +
    'Kurz zu uns\n' +
    '-----------\n' +
    'Organisation: ' + data.organisation + '\n' +
    'Ansprechperson: ' + data.kontaktperson + '\n' +
    'E-Mail für eure Rückmeldung: ' + data.email + '\n' +
    'Region / Ort: ' + (data.region || 'nicht angegeben') + '\n' +
    'Aktuelle Website: ' + (data.website || 'keine vorhanden') + '\n' +
    'Schwerpunkt unserer Tierschutzarbeit: ' + data.schwerpunkt + '\n\n' +
    'Was wir machen und was uns online fehlt\n' +
    '---------------------------------------\n' +
    data.beschreibung + '\n\n' +
    'Pflege der späteren Website\n' +
    '--------------------------\n' +
    'Die Website würde später gepflegt durch: ' + (data.pflegeperson || 'noch offen / nicht angegeben') + '\n\n' +
    'Falls wir für die Website-Spende infrage kommen, freuen wir uns über eure Rückmeldung. Für ein kurzes Kennenlerngespräch sind wir gerne erreichbar.\n\n' +
    'Viele Grüße\n' +
    data.kontaktperson
  );
  return 'mailto:info@andersen-webworks.de?subject=' + subject + '&body=' + body;
};

const submitApplication = event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = getApplicationData();
  if (data.homepage) {
    setStatus('Danke, die Bewerbung ist angekommen.');
    form.reset();
    return;
  }

  const button = form.querySelector('.submit-btn');
  const mailto = buildApplicationMailto(data);

  button.disabled = true;
  button.textContent = 'E-Mail wird geöffnet ...';
  setStatus('Ein vorbereiteter E-Mail-Entwurf öffnet sich. Bitte im Mailprogramm noch absenden.');
  window.location.href = mailto;

  window.setTimeout(() => {
    button.disabled = false;
    button.textContent = 'E-Mail-Entwurf öffnen →';
  }, 800);
};

if (form) {
  form.addEventListener('submit', submitApplication);
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 3, 2) * 80 + 'ms';
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
