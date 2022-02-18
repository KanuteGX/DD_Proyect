window.addEventListener('scroll', () => {
  elementAnimationScroll();
});

// Element scroll
const cardService0 = document.getElementById('cardService-0');
const cardService1 = document.getElementById('cardService-1');
const cardService2 = document.getElementById('cardService-2');
const cardService3 = document.getElementById('cardService-3');
const cardService4 = document.getElementById('cardService-4');
const containerCardTwo = document.getElementById('containerCardTwo');
const cardTwo = document.getElementById('cardTwo');

const elementAnimationScroll = () => {
  let scrollTop = document.firstElementChild.scrollTop;
  let cardServiceTop0 = cardService0.offsetTop;
  let cardServiceTop1 = cardService1.offsetTop;
  let cardServiceTop2 = cardService2.offsetTop;
  let cardServiceTop3 = cardService3.offsetTop;
  let cardServiceTop4 = cardService4.offsetTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  if (scrollTop > cardServiceTop0 - viewportHeight / 1.3)
    cardService0.classList.add('card-service__scroll');

  if (scrollTop > cardServiceTop1 - viewportHeight / 1.3)
    cardService1.classList.add('card-service__scroll');

  if (scrollTop > cardServiceTop2 - viewportHeight / 1.3)
    cardService2.classList.add('card-service__scroll');

  if (scrollTop > cardServiceTop3 - viewportHeight / 1.3)
    cardService3.classList.add('card-service__scroll');

  if (scrollTop > cardServiceTop4 - viewportHeight / 1.3)
    cardService4.classList.add('card-service__scroll');
};
// || scrollTop > cardService1 - viewportHeight / 1.3 || scrollTop > cardService2 - viewportHeight / 1.3 || scrollTop > cardService3 - viewportHeight / 1.3 || scrollTop > cardService4 - viewportHeight / 1.3
