// Menu menos de 1300 px

const menuActive = document.getElementById('menu-active');
const menuDesac = document.getElementById('menu-desactive');
const menu = document.getElementById('menu');

const menuDesacBgr = document.getElementById('menu-desactive-background');

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
