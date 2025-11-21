document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  const list = document.getElementById('charity-list');
  const chips = document.querySelectorAll('.filters .chip');

  // Simple debounce
  function debounce(fn, delay = 250) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
  }

  function filterCards(query, countryFilter) {
    const q = (query || '').trim().toLowerCase();
    const cards = list ? list.querySelectorAll('.card') : [];
    let visible = 0;
    cards.forEach(card => {
      const name = card.dataset.name || '';
      const country = (card.dataset.country || '').toLowerCase();
      const matchQuery = q === '' || name.includes(q) || country.includes(q);
      const matchCountry = !countryFilter || country.includes(countryFilter);
      const show = matchQuery && matchCountry;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    // update stats if present
    const stats = document.querySelector('.stats');
    if (stats) stats.innerHTML = `Showing <strong>${visible}</strong> charities`;
  }

  if (input) {
    input.addEventListener('input', debounce((e) => filterCards(e.target.value, currentFilter)));
  }

  // chips
  let currentFilter = '';
  if (chips) {
    chips.forEach(ch => ch.addEventListener('click', (e) => {
      chips.forEach(c=>c.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const f = e.currentTarget.dataset.filter;
      currentFilter = (f === 'all') ? '' : f;
      filterCards(input ? input.value : '', currentFilter);
    }));
  }

  // initialize
  filterCards('', '');
});
