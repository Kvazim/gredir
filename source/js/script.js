const burger = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');
const pageHeader = document.querySelector('.page-header');
const promo = document.querySelector('.promo');
const btnnext = document.querySelector('.promo__button--next');
const btnprev = document.querySelector('.promo__button--prew');
const slideItem = document.querySelectorAll('.slider');
const mapNojs = document.querySelector('.map');
const mapCanvas = document.querySelector('.map__canvas');

let i = 0;
const ZOOM_MAP = 17;
const CENTER_MAP = {
  lat: 59.96832,
  lng: 30.31756,
};
const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

nav.classList.remove('navigation--nojs');
pageHeader.classList.remove('page-header--nojs');
promo.classList.remove('promo--nojs');
mapNojs.classList.remove('map--nojs');

burger.addEventListener('click', function (event) {

  burger.classList.toggle('toggle--activ');
  nav.classList.toggle('navigation--close');
});

btnnext.addEventListener('click', function (event) {
  if (slideItem[i].classList.contains('slider--active')) {
    slideItem[i].classList.remove('slider--active');
    i++;
    if (i >= slideItem.length) {
      i = 0;
      slideItem[i].classList.add('slider--active');
    } else if (i <= slideItem.length) {
      slideItem[i].classList.add('slider--active');
    };
  };
});

btnprev.addEventListener('click', function (event) {
  if (slideItem[i].classList.contains('slider--active')) {
    slideItem[i].classList.remove('slider--active');
    i--;
    if (i < 0) {
      i = slideItem.length - 1;
      slideItem[i].classList.add('slider--active');
    } else if (i <= slideItem.length) {
      slideItem[i].classList.add('slider--active');
    };
  };
});


const map = L.map(mapCanvas)
  .on('load', () => {
    CENTER_MAP;
  })
  .setView(CENTER_MAP, ZOOM_MAP);

L.tileLayer(
  LeafletParameters.TILE_LAYER,
  {
    attribution: LeafletParameters.ATTRIBUTION,
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  CENTER_MAP,
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
