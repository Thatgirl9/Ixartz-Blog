const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const form = document.querySelector('.newsletter__form');

navToggle.addEventListener('click', function () {
  if (links.classList.toggle('show-links')) {
    navToggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  ;
})



// const formSubmit = () => {

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = form['email'].value;
  if (email === '') {
    form['email'].classList.add('error');
  } else {
    form['email'].classList.remove('error');
    form.reset();
  }
})
// }