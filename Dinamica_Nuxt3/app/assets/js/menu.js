const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

document.getElementById('abrir').addEventListener('click', function () {
  this.classList.toggle('effect');
});
cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
});
