export default () => {
  let body = document.querySelector(`body`);

  window.addEventListener(`load`, () => {
    body.classList.add(`body_loaded`);
  });
};
