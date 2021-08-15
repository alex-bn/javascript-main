// Sticky navigation
// Not very efficient

const initCoords = section1.getBoundingClientRect();
console.log(initCoords);
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
  if (window.scrollY > initCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
