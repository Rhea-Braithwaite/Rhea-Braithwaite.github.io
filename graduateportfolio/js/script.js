function toggleNav(){
  var navBar = document.getElementById("nav-bar");
  document.getElementById("nav-bar").classList.toggle("visible");
}

function openNav(){
  var navBar = document.getElementById("nav-bar");
  navBar.classList.add("visible");
}

function closeNav(){
  var navBar = document.getElementById("nav-bar");
  navBar.classList.remove("visible");
}

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('no-transition');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 150);
});


document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('lightbox');
  const overlayImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // lock background scroll
  }

  function closeLightbox() {
    overlayImg.src='';
    overlayImg.alt='';
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // restore scroll
  }

  document.querySelectorAll('.zoomable').forEach(function(img) {
    img.addEventListener('click', function() {
      openLightbox(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  // close when clicking the dark background, but not the image itself
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeLightbox();
    }
  });
});
