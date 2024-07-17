document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const fontSizeSelect = document.getElementById('font-size');
  const animationsToggle = document.getElementById('toggle-animations');

  if (themeToggle) {
      themeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
          const icon = this.querySelector('i');
          if (icon.classList.contains('fa-moon')) {
              icon.classList.replace('fa-moon', 'fa-sun');
          } else {
              icon.classList.replace('fa-sun', 'fa-moon');
          }
      });
  }

  if (fontSizeSelect) {
      fontSizeSelect.addEventListener('change', function() {
          document.body.classList.remove('font-small', 'font-medium', 'font-large');
          document.body.classList.add('font-' + this.value);
      });
  }

  if (animationsToggle) {
      animationsToggle.addEventListener('click', function() {
          document.body.classList.toggle('reduce-motion');
          const icon = this.querySelector('i');
          if (icon.classList.contains('fa-film')) {
              icon.classList.replace('fa-film', 'fa-pause');
          } else {
              icon.classList.replace('fa-pause', 'fa-film');
          }
      });
  }
});