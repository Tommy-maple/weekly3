const target = document.getElementById("humberger");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const drawer = document.getElementById('drawer');
  drawer.classList.toggle('in');
});