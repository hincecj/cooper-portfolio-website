// ---------- mobile nav ----------
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  list.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      list.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ---------- papers list ----------
(function () {
  const container = document.getElementById('papers-list');
  if (!container) return;

  const list = (typeof papers !== 'undefined' ? papers : []).slice();

  if (list.length === 0) {
    container.innerHTML = '<p class="papers-empty">No papers published yet &mdash; the first one is on its way.</p>';
    return;
  }

  const monthFormatter = (value) => {
    // Accepts "YYYY-MM" or "YYYY-MM-DD"; falls back to the raw string.
    const parts = String(value).split('-');
    if (parts.length < 2) return value;
    const date = new Date(Number(parts[0]), Number(parts[1]) - 1, 1);
    if (isNaN(date)) return value;
    return date.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' });
  };

  container.innerHTML = list.map((paper) => {
    const title = escapeHtml(paper.title || 'Untitled');
    const description = escapeHtml(paper.description || '');
    const date = paper.date ? monthFormatter(paper.date) : '';
    const file = encodeURIComponent(paper.file || '');

    return `
      <article class="paper-row">
        <div class="paper-row-head">
          <h3>${title}</h3>
          ${date ? `<span class="paper-date">${date}</span>` : ''}
        </div>
        ${description ? `<p>${description}</p>` : ''}
        ${paper.file ? `<a class="paper-link" href="papers/${file}" target="_blank" rel="noopener">View PDF</a>` : ''}
      </article>
    `;
  }).join('');

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();
