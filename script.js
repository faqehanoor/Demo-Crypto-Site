document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
  });

  // Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Dark/Light Mode Toggle
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleBtnMobile = document.getElementById('theme-toggle-btn-mobile');
  
  const toggleFunction = () => {
    document.body.classList.toggle('dark');
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleFunction);
  }
  if (themeToggleBtnMobile) {
    themeToggleBtnMobile.addEventListener('click', toggleFunction);
  }

  // Smooth Scrolling for Nav Links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Search Bar Mock Functionality
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  const searchFunction = () => {
    if (searchInput.value) {
      console.log('Searching for:', searchInput.value);
    }
  };

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', searchFunction);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchFunction();
      }
    });
  }
});
