const primaryNav = document.querySelector('.primary-nav');
const secondaryNav = document.querySelector('.secondary-nav');

var showScroll = () => {   
  if (document.documentElement.scrollTop >= 70) {
    secondaryNav.setAttribute('data-visible', true);
  }
  else {
    secondaryNav.setAttribute('data-visible', false);
  }
  console.log(document.documentElement.scrollTop)
}

window.addEventListener('scroll', showScroll, false);