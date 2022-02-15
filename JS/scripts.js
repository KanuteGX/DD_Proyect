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
  elementOpacityScroll();
});

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

//slider

/* Expilcar */
const slider = document.getElementById('slider');

const elementsSlider = Array.from(slider.children);

let index = -1;

const nextSlider = () => {
  if (index == -1) {
    elementsSlider.forEach((element) => {
      element.style.transition = 'none';
      element.style.opacity = '1';
    });
  }
  index++;

  // Cuando se va a opacar
  slider.children[index].style.transition = 'opacity 1.2s ease';
  slider.children[index].style.opacity = '0';
  if (index == elementsSlider.length - 1) {
    index = -1;
    slider.children[0].style.opacity = '1';
  }
};

setInterval(() => {
  nextSlider();
}, 6000);

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

// Libreria efecto escritura - titulo
const typed = new Typed('.typed', {
  // strings: ['Marketing', 'Diseño', 'Edición', 'Web'],

  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html' // 'html' o 'null' para texto sin formato
});

// Element opacity scroll
const bgrCardTwo = document.getElementById('bgrCardTwo');
const containerCardTwo = document.getElementById('containerCardTwo');
const cardTwo = document.getElementById('cardTwo');

const elementOpacityScroll = () => {
  let scrollTop = document.firstElementChild.scrollTop;
  let cardTop = containerCardTwo.offsetTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  if (scrollTop > cardTop - viewportHeight / 1.3)
    bgrCardTwo.classList.add('background-card2__scroll');
  cardTwo.classList.add('card2__scroll');
};
