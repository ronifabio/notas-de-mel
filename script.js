document.addEventListener('DOMContentLoaded', () => {
  const setNavbarHeight = () => {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  };

  setNavbarHeight(); // Executa ao carregar a página
  window.addEventListener('resize', setNavbarHeight); // Executa ao redimensionar a janela

  // Lógica para o menu Hamburger (mobile)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Lógica para animação de fade-in ao rolar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.1, // Anima quando 10% do elemento estiver visível
    }
  );

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
});
