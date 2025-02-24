const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const icons = document.querySelectorAll('.btn_icon');
  icons.forEach((elem) => {
    elem.classList.toggle('hidden');
  });
 });

// const showCheckbox = () => {
//   btnArrow.classList.toggle('visible');
//   btnArrowFill.classList.toggle('visible');
//   if (!btn.checked) {
//     btn.checked = true;
//   } else {
//     btn.checked = false;
//   }

// }


// btnArrow.addEventListener('click', showCheckbox);
// btnArrowFill.addEventListener('click', showCheckbox)