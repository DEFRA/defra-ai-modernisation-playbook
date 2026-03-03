// Theme toggle — runs immediately (IIFE) to avoid flash of wrong theme
(function() {
  var themeToggle = document.querySelector('.theme-toggle-checkbox');
  var html = document.documentElement;

  var getPreferredTheme = function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  var setTheme = function(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.checked = theme === 'dark';
  };

  setTheme(getPreferredTheme());

  themeToggle.addEventListener('change', function() {
    var newTheme = themeToggle.checked ? 'dark' : 'light';
    setTheme(newTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

// Copy-code buttons — waits for DOM ready
document.addEventListener('DOMContentLoaded', function() {
  var codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(function(codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.textContent = 'Copy';

    codeBlock.appendChild(copyButton);

    copyButton.addEventListener('click', function() {
      var codeElement = codeBlock.querySelector('code');
      var codeToCopy = codeElement ? codeElement.innerText : codeBlock.innerText;

      navigator.clipboard.writeText(codeToCopy).then(function() {
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy code: ', err);
        copyButton.textContent = 'Error';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });
});
