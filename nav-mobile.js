/* ============================================
   CRYSTALIA ICE — Menu mobile (burger)
   ============================================
   Gère l'ouverture/fermeture du panneau de nav mobile.
   À inclure sur toutes les pages, après le HTML de la nav.
*/
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.nav-burger');
  const panel = document.querySelector('.nav-mobile-panel');
  if (!burger || !panel) return;

  function closeMenu() {
    burger.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }
  function openMenu() {
    burger.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  burger.addEventListener('click', () => {
    if (panel.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a link inside the panel is clicked
  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when a language is picked in the mobile panel
  panel.querySelectorAll('[data-lang]').forEach(span => {
    span.addEventListener('click', closeMenu);
  });
});
