const menuBtn = document.querySelector('.header__m-menu');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});
