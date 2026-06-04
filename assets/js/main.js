const form = document.getElementById('bewerbungsformular');
const statusEl = document.getElementById('form-status');

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
  const subject = encodeURIComponent('Website-Bewerbung: ' + data.organisation);
  const body = encodeURIComponent(
    'Hallo Jan-Erik, hallo Annemarie,\n\n' +
    'wir möchten uns für die kostenlose Tierschutz-Website bewerben.\n\n' +
    'Organisation: ' + data.organisation + '\n' +
    'Ansprechperson: ' + data.kontaktperson + '\n' +
    'Antwort-E-Mail: ' + data.email + '\n' +
    'Region: ' + (data.region || '(nicht angegeben)') + '\n' +
    'Aktuelle Website: ' + (data.website || '(keine)') + '\n' +
    'Tierschutz-Schwerpunkt: ' + data.schwerpunkt + '\n\n' +
    'Was wir machen / was uns online fehlt:\n' + data.beschreibung + '\n\n' +
    'Website-Pflege später durch: ' + (data.pflegeperson || '(nicht angegeben)') + '\n\n' +
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
