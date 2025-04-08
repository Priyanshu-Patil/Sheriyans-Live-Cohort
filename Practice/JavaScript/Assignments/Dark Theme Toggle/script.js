// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
    
// Check for saved theme preference or default to user's OS preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

// Set initial theme based on saved preference or OS preference
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-theme');
  updateThemeUI(true);
} else {
  updateThemeUI(false);
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeUI(isDarkMode);
});

// Update UI elements based on current theme
function updateThemeUI(isDarkMode) {
  themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Listen for OS theme preference changes
prefersDarkScheme.addEventListener('change', (e) => {
  // Only update theme if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.body.classList.add('dark-theme');
      updateThemeUI(true);
    } else {
      document.body.classList.remove('dark-theme');
      updateThemeUI(false);
    }
  }
});