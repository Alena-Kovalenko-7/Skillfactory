const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const icons = document.querySelectorAll('.btn_icon');
  icons.forEach((elem) => {
    elem.classList.toggle('hidden');
  });
});

