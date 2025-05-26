
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('language-toggle');
  function switchLang(lang) {
    document.querySelectorAll('.lang').forEach(el => {
      el.style.display = el.dataset.lang === lang ? 'inline' : 'none';
    });
  }
  toggle.addEventListener('change', function () {
    switchLang(this.value);
  });
  switchLang(toggle.value);
});
