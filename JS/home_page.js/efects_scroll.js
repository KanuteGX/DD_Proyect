// Scroll Event
// Scroll bar

const header = document.getElementById('header');

const logo = document.getElementById('logo');

const headerContainer = document.getElementById('header-container');

const list = document.getElementById('list');

const scrollBar = () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 200) {
    header.style.transition = ' all 0.4s ease';
    header.classList.add('elements-header__scroll-bar');
    headerContainer.classList.add('elements-header--container__scroll-bar');

    logo.classList.add('logo__scroll-bar');
  }
  if (scrollTop < 200) {
    header.style.transition = 'none';
    header.classList.remove('elements-header__scroll-bar');
    headerContainer.classList.remove('elements-header--container__scroll-bar');

    logo.classList.remove('logo__scroll-bar');
  }
};

// Element opacity scroll
const bgrCardTwo = document.getElementById('bgrCardTwo');
const containerCardTwo = document.getElementById('containerCardTwo');
const cardTwo = document.getElementById('cardTwo');

const elementOpacityScroll = () => {
  let scrollTop = document.firstElementChild.scrollTop;
  let cardTop = containerCardTwo.offsetTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  if (scrollTop > cardTop - viewportHeight / 1.3) {
    bgrCardTwo.classList.add('background-card2__scroll');
    cardTwo.classList.add('card2__scroll');
  }
};

// aprender WebPack - no puedo concatenar 2 eventos en archivos distintos

window.addEventListener('scroll', (e) => {
  scrollBar();
  elementOpacityScroll();
});
