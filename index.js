const primaryNav = document.querySelector('.primary-nav');
const secondaryNav = document.querySelector('.secondary-nav');
const bannerMain = document.querySelector('.banner-main');
const bannerCol = document.querySelector('.banner-col');
const bannerText = document.querySelector('.banner-text');
const bannerImg = document.querySelector('.banner-img');
const screenWidth = window.screen.width;

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

var scaleBanner = () => {
  const newScale = Math.max(Math.min(window.innerWidth/screenWidth, 1) + 0.2, 0.55);
  bannerText.style.scale = newScale
}

window.addEventListener('resize', scaleBanner, false)