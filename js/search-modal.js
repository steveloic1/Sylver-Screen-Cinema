document.addEventListener('DOMContentLoaded', function () {
  const search = document.querySelector('.search');
  const modal = document.getElementById('searchModal');
  const close = document.getElementById('closeModal');

  search.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
