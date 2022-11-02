(function () {
  try {
    var mode = localStorage.getItem('dark');
    var supportDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    if (!mode && supportDarkMode) document.body.classList.add('dark-true');
    if (!mode) return;
    document.body.classList.add('dark-' + mode);
  } catch (e) {}
})();