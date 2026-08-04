// Opening and closing navigation bar
const navBar = document.getElementById("nav-bar");
  
function toggleNav(){
  navBar.classList.toggle("visible");
}

function openNav(){
  navBar.classList.add("visible");
}

function closeNav(){
  navBar.classList.remove("visible");
}

// Enlarge images and activate dark overlay for background
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('lightbox');
  if(!overlay) return; //if page doesn't have a lightbox simply return
  
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
