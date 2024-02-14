const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  if (links.classList.toggle('show-links')) {
    navToggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  ;
})