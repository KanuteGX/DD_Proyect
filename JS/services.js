window.addEventListener('scroll', () => {
  elementAnimationScroll();
});

// Element scroll
const containerServices = document.getElementById('containerServices');

const containerServicesArray = Array.from(containerServices.children);

const containerCardTwo = document.getElementById('containerCardTwo');
const cardTwo = document.getElementById('cardTwo');

const elementAnimationScroll = () => {
  let scrollTop = document.firstElementChild.scrollTop;
  let viewportHeight = document.firstElementChild.clientHeight;

  containerServicesArray.forEach((card, index) => {
    if (index != 0) {
      let cardTop = card.offsetTop;
      // Numero PAR
      if (index % 2 == 0) {
        if (scrollTop > cardTop - viewportHeight / 1.3)
          card.classList.add('card-service__scroll');
      } else {
        if (scrollTop > cardTop - viewportHeight / 1.3)
          card.children[1].classList.add('card-service__scroll');
      }
    }
  });
};
