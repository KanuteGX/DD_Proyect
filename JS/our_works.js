// Pantalla de carga

const load = document.getElementById('load');

window.addEventListener('load', (e) => {
  load.classList.add('load__end');
  setTimeout(() => {
    load.style.display = 'none';
  }, 1000);
});

// Scroll Event

window.addEventListener('scroll', (e) => {
  scrollBar();
});

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

// Menu menos de 1300 px

const menuActive = document.getElementById('menu-active');
const menuDesac = document.getElementById('menu-desactive');
const menu = document.getElementById('menu');

const menuDesacBgr = document.getElementById('menu-desactive-background');

// const body = document.querySelector('body');

menuActive.addEventListener('click', (e) => {
  menu.classList.add('menu__start');
  menuDesacBgr.classList.add('menu-desactive-background');
});

menuDesac.addEventListener('click', (e) => {
  menu.classList.remove('menu__start');
  menuDesacBgr.classList.remove('menu-desactive-background');
});

menuDesacBgr.addEventListener('click', (e) => {
  menu.classList.remove('menu__start');
  menuDesacBgr.classList.remove('menu-desactive-background');
});
