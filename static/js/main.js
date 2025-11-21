document.addEventListener('DOMContentLoaded', function () {
  console.log('MumVisit starter JS loaded');
});

// Simple client-side search to filter the charities list
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('search');
  const list = document.getElementById('charity-list');
  if (!input || !list) return;

  input.addEventListener('input', function (e) {
    const q = e.target.value.trim().toLowerCase();
    const cards = list.querySelectorAll('.card');
    cards.forEach(card => {
      const name = card.dataset.name || '';
      const country = card.dataset.country || '';
      const matches = q === '' || name.includes(q) || country.includes(q);
      card.style.display = matches ? '' : 'none';
    });
  });
});
