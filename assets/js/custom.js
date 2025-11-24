  const burger = document.querySelector('.btn-burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('show');
  });