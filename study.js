const dockPaths = `<g transform="translate(3 7) scale(.48)"><path class="part-a" d="M614.702 121.018C568.004 67.0353 505.918 28.621 436.768 10.9258C367.618 -6.76935 294.711 -2.89928 227.823 22.0171C160.935 46.9334 103.265 91.7048 62.544 150.328C21.8235 208.951 0 278.622 0 350C0 421.378 21.8235 491.05 62.544 549.672C103.265 608.295 160.935 653.067 227.823 677.983C294.711 702.899 367.618 706.769 436.768 689.074C505.918 671.379 568.004 632.965 614.702 578.982C560.353 570.13 510.925 542.235 475.256 500.285C439.586 458.335 420 405.065 420 350C420 294.935 439.586 241.666 475.256 199.716C510.925 157.766 560.353 129.87 614.702 121.018Z"/><circle class="part-b" cx="652" cy="350" r="168"/></g>`;
function usingCurrentLogo() { return document.querySelector('[data-logo="current"]').getAttribute('aria-pressed') === 'true'; }
function currentLockup(extraClass = '') {
  return `<span class="current-lockup ${extraClass}" aria-label="Pairing Mind"><svg viewBox="0 0 400 350" aria-hidden="true">${dockPaths}</svg><span>p<span class="logo-ai">ai</span>ring mind</span></span>`;
}

const directions = {
  volt: {
    name: 'Volt / Ink', number: '01', font: 'Archivo',
    colors: ['#17201D', '#D8F53C', '#F2F3E9', '#A0AAA0'],
    description: '01 / The strongest performance expression. Wide Archivo lettering, electric lime, and offset forms that find a shared line.',
    strength: 'The clearest departure from the current blue. It can carry a bold slide or a one-color shirt with very few ingredients. My lead recommendation for exploration.',
    risk: 'Lime and dark ink can lean toward fitness or gaming. Keep the content personal and useful; avoid speed stripes, rankings, and aggressive slogans.',
    construction: 'Two equal-area stepped forms, related by a half-turn. The gap stays open. Repetition becomes a framing device; neither form is assigned to “the human” or “the AI”.',
    paths: '<path class="part-a" d="M20 30H230V120H140V210H20Z"/><path class="part-b" d="M260 140H380V320H170V230H260Z"/>'
  },
  cobalt: {
    name: 'Cobalt / Chalk', number: '02', font: 'Manrope',
    colors: ['#111E3D', '#194AE8', '#F2F5FF', '#91BCF4'],
    description: '02 / The most measured expression. Heavy Manrope lettering, a deeper blue, and two open arcs around a shared space.',
    strength: 'A confident bridge from the existing blue identity. The circular forms soften the performance energy and make the system feel open.',
    risk: 'The easiest to mistake for another technology or education brand. It needs disciplined use of the paired arcs to become recognizable.',
    construction: 'Two matching thick half-rings, one rotated and shifted. Equal area and weight; offset centers keep the pair from becoming a single closed circle.',
    paths: '<path class="part-a" d="M190 20A150 150 0 0 0 190 320V240A70 70 0 0 1 190 100Z"/><path class="part-b" d="M210 30A150 150 0 0 1 210 330V250A70 70 0 0 0 210 110Z"/>'
  }
};

function pairSvg(direction, extraClass = '', viewBox = '0 0 400 350') {
  return `<svg class="pair ${extraClass}" viewBox="${viewBox}" aria-hidden="true">${direction.paths}</svg>`;
}

function renderDirection(key) {
  if (!Object.hasOwn(directions, key)) key = 'volt';
  const d = directions[key];
  const currentLogo = usingCurrentLogo();
  const artwork = currentLogo ? { ...d, paths: dockPaths } : d;
  const board = document.getElementById('board');
  board.className = `board ${key}${currentLogo ? ' current-logo' : ''}${document.getElementById('monochrome').checked ? ' monochrome' : ''}`;
  board.setAttribute('aria-label', `${d.name} identity direction`);
  board.innerHTML = `
    <article class="hero" aria-label="Website opening concept">
      <div class="hero-top">${currentLogo ? currentLockup('brand-name') : '<span class="brand-name">pairing mind</span>'}<span class="micro">Human curiosity.<br>Useful possibilities.</span></div>
      <h2 class="display">Put more<br><em>within reach.</em></h2>
      ${pairSvg(artwork, 'hero-art')}
      <div class="hero-bottom"><p>Bring an idea.<br>Build what you wish you had.</p></div>
    </article>
    <div class="swatches" aria-label="Proposed palette">${d.colors.map((hex,i)=>`<div class="${['dark','accent','light','secondary'][i]}"><span>${['Foundation','Accent','Light','Support'][i]}</span><span>${hex}</span></div>`).join('')}</div>
    ${portalHome(d, artwork, currentLogo)}
    <article class="slide" aria-label="Class slide concept">
      <div class="slide-top">${currentLogo ? currentLockup('slide-logo') : '<span class="micro">PAIRING MIND / CLASS 02</span>'}<span class="micro">DESIGN WITH AI</span></div>
      <h3 class="display">Make it<br>look like<br>your idea.</h3>
      ${pairSvg(artwork, 'slide-art')}
      <div class="slide-bottom"><span class="pair-tab">P</span><span class="pair-tab active">A</span><span class="pair-tab">I</span><span class="pair-tab">R</span><small>Ask · make a first version</small></div>
    </article>
    <article class="poster" aria-label="Social poster concept">
      <span class="micro">YOUR NEXT PROJECT STARTS HERE</span>
      <h3 class="display">You have<br>an idea.<br>Let’s give<br>it a go.</h3>
      <div class="poster-bottom">${currentLogo ? currentLockup('poster-logo') : '<span class="micro">pairing mind<br>Learn by making.</span>'}${pairSvg(artwork)}</div>
    </article>
    <article class="project" aria-label="Illustrative project presentation">
      <div><span class="micro">FROM IDEA TO FIRST VERSION</span><h3 class="display">A little more<br>“I made that.”</h3><p>A family planner.<br>Built around your own week.</p><span class="example-tag">Illustrative project</span></div>
      <div class="app-preview"><div class="app-head"><span>Our week</span>${pairSvg(artwork)}</div><h4>Room for the<br>good stuff.</h4><div class="app-row"><span class="done"></span><div>Make something together<small>Saturday · 10:00</small></div></div><div class="app-row"><span></span><div>Get outside<small>Sunday · afternoon</small></div></div><div class="app-row"><span></span><div>Plan next week<small>Sunday · 18:00</small></div></div><div class="app-foot"><span>Family planner</span><span>Sample project ↗</span></div></div>
    </article>
    <article class="shirt" aria-label="Flat apparel placement study">
      <svg class="shirt-svg" viewBox="0 0 440 380" role="img" aria-label="Pairing Mind graphic on a T-shirt silhouette">
        <path class="shirt-body" d="M145 38L185 24Q220 48 255 24L295 38L375 106L331 164L295 142V350H145V142L109 164L65 106Z"/>
        <path class="seam" d="M185 24Q220 80 255 24M145 38L145 142M295 38L295 142M151 338H289M75 105L111 152M365 105L329 152"/>
        <g transform="translate(163 93) scale(.285)" class="pair">${artwork.paths}</g>
        <text x="220" y="228" text-anchor="middle" class="shirt-print">${currentLogo ? 'p<tspan class="logo-ai">ai</tspan>ring mind' : 'pairing mind'}</text>
        <text x="220" y="248" text-anchor="middle" class="shirt-print-sub">PUT MORE WITHIN REACH</text>
      </svg><span class="shirt-label">Flat placement study / no photography</span>
    </article>`;
  document.getElementById('direction-description').textContent = currentLogo ? `${d.number} / ${d.name} with your current Dock A logo. Existing wordmark; ${d.font} headlines. Logo colors adapted to this palette.` : d.description;
  document.getElementById('strength').textContent = d.strength;
  document.getElementById('risk').textContent = currentLogo && key === 'cobalt' ? 'Blue remains a familiar technology and education cue. The existing Dock A silhouette supplies recognition; use it consistently and keep the typography confident.' : d.risk;
  document.getElementById('construction').textContent = currentLogo ? 'Your existing Dock A silhouette and separate disk, with the Plus Jakarta Sans wordmark and highlighted “ai”. Colors follow this study’s palette. Large artwork repeats the same symbol; no new logo geometry.' : d.construction;
  document.querySelectorAll('[data-direction]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.direction === key)));
}

document.querySelectorAll('[data-direction]').forEach(button => button.addEventListener('click', () => {
  history.replaceState(null, '', `#${button.dataset.direction}`);
  renderDirection(button.dataset.direction);
}));
document.querySelectorAll('[data-logo]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-logo]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  renderDirection(document.querySelector('[data-direction][aria-pressed="true"]').dataset.direction);
}));
document.getElementById('monochrome').addEventListener('change', event => document.getElementById('board').classList.toggle('monochrome', event.target.checked));
function updateSpecimens() {
  const text = document.getElementById('sample-text').value || 'Put more within reach.';
  const uppercase = document.getElementById('letter-case').value === 'upper';
  document.querySelectorAll('.sample').forEach(sample => { sample.textContent = uppercase ? text.toUpperCase() : text; });
}
document.getElementById('sample-text').addEventListener('input', updateSpecimens);
document.getElementById('letter-case').addEventListener('change', updateSpecimens);
window.addEventListener('hashchange', () => { const key = location.hash.slice(1); if (key !== 'type-study' && key !== 'board') renderDirection(key); });
renderDirection(location.hash.slice(1));

document.getElementById('jump-portal').addEventListener('click', () => document.getElementById('portal-home').scrollIntoView({behavior:'instant',block:'start'}));
