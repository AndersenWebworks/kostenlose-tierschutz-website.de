function absenden() {
  const g = id => document.getElementById(id).value.trim();
  const orgName = g('org-name'), kontakt = g('kontaktperson'), email = g('email'),
        region = g('region'), websiteAkt = g('website-aktuell'),
        bereich = g('tierschutz-bereich'), beschr = g('beschreibung'), wer = g('wer-pflegt');
  if (!orgName || !kontakt || !email || !bereich || !beschr) {
    alert('Bitte alle Pflichtfelder ausfüllen.');
    return;
  }
  const subject = encodeURIComponent('Website-Bewerbung Tierschutz-Spende: ' + orgName);
  const body = encodeURIComponent(
    'Organisation: ' + orgName + '\n' +
    'Ansprechperson: ' + kontakt + '\n' +
    'Antwort-E-Mail: ' + email + '\n' +
    'Region: ' + (region || '(nicht angegeben)') + '\n' +
    'Aktuelle Website: ' + (websiteAkt || '(keine)') + '\n' +
    'Tierschutz-Schwerpunkt: ' + bereich + '\n\n' +
    'Was wir machen / was uns fehlt:\n' + beschr + '\n\n' +
    'Website-Pflege später durch: ' + (wer || '(nicht angegeben)')
  );
  window.location.href = 'mailto:info@andersen-webworks.de?subject=' + subject + '&body=' + body;
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = Math.min(i % 3, 2) * 80 + 'ms';
  io.observe(el);
});
