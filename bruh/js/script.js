function toggleNav(){
  var navBar = document.getElementById("nav-bar");
  document.getElementById("nav-bar").classList.toggle("mobile");
}

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('no-transition');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 150);
});