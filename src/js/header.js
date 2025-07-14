document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');
  const logo = document.querySelector('.header-logo');

  menuBtn?.addEventListener('click', () => {
    backdrop.classList.add('show');
    menuBtn.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    logo.classList.add('hidden');
  });

  closeMenu?.addEventListener('click', () => {
    backdrop.classList.remove('show');
    menuBtn.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    logo.classList.remove('hidden');
  });

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
      menuBtn.classList.remove('hidden');
      closeMenu.classList.add('hidden');
      logo.classList.remove('hidden');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
      menuBtn.classList.remove('hidden');
      closeMenu.classList.add('hidden');
      logo.classList.remove('hidden');
    });
  });
});
