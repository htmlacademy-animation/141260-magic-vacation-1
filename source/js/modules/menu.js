export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (event) {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      const isCurrentLocation = window.location.hash;
      const isCurrentMenuLinkPrizes = menuLinks[i].getAttribute(`href`).includes(`#prizes`);

      if (isCurrentLocation === `#story` && isCurrentMenuLinkPrizes) {
        event.preventDefault();
        let screenBgHidden = document.querySelector(`.screen__background-hidden`);
        screenBgHidden.classList.remove(`screen__background-hidden_state_non-active`);
        screenBgHidden.classList.add(`screen__background-hidden_state_active`);
        screenBgHidden.addEventListener(`animationend`, () => {
          window.location.hash = menuLinks[i].getAttribute(`href`);
          screenBgHidden.classList.remove(`screen__background-hidden_state_active`);
          screenBgHidden.classList.add(`screen__background-hidden_state_non-active`);
        });
      }
    });
  }
};
