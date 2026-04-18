// script.js

// Auto year in footer (safe if #year exists)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===============================
// SWIPERS (HERO + WORKSHOPS)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // HERO: moving featured work in hero section
  if (typeof Swiper !== "undefined" && document.querySelector(".heroSwiper")) {
    new Swiper(".heroSwiper", {
      loop: true,
      speed: 1200,
      effect: "fade",
      fadeEffect: { crossFade: true },

      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".heroSwiper .swiper-pagination",
        clickable: true,
      },

      // If you want NO dragging/swiping on hero, set false:
      // allowTouchMove: false,
      allowTouchMove: true,
    });
  }

  // WORKSHOPS: Swiper slider
  if (typeof Swiper !== "undefined" && document.querySelector(".workshopSwiper")) {
    new Swiper(".workshopSwiper", {
      loop: true,
      speed: 900,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      slidesPerView: 1,
      spaceBetween: 16,

      navigation: {
        nextEl: ".workshopSwiper .swiper-button-next",
        prevEl: ".workshopSwiper .swiper-button-prev",
      },

      pagination: {
        el: ".workshopSwiper .swiper-pagination",
        clickable: true,
      },

      keyboard: { enabled: true },

      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });
  }
});

// ===============================
// WORK: LIGHTBOX (click to enlarge)
// + captions + arrows + keyboard
// ===============================
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const lbNext = document.getElementById("lbNext");
const lbPrev = document.getElementById("lbPrev");
const lbCount = document.getElementById("lbCount");
const lbCaption = document.getElementById("lbCaption");

// Grab ONLY work gallery tiles
const tileImgs = document.querySelectorAll(".gallery .tile img");
let currentIndex = 0;

// Build arrays of image sources + captions
const images = [];
const captions = [];

tileImgs.forEach((img) => {
  images.push(img.src);
  const captionEl = img.closest(".tile")?.querySelector(".caption");
  captions.push(captionEl ? captionEl.textContent.trim() : "");
});

// Only wire up if we actually have a lightbox + images
if (lightbox && lbImg && lbClose && lbNext && lbPrev && lbCount && tileImgs.length) {
  // Make tile images feel clickable
  tileImgs.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lbImg.src = images[currentIndex];
    lbImg.alt = captions[currentIndex] || "Expanded gallery image";

    if (lbCaption) lbCaption.textContent = captions[currentIndex] || "";
    lbCount.textContent = `${currentIndex + 1} / ${images.length}`;

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox();
  }

  // Buttons
  lbClose.addEventListener("click", closeLightbox);
  lbNext.addEventListener("click", nextImage);
  lbPrev.addEventListener("click", prevImage);

  // Click outside image closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
}
@media (max-width: 768px){
  .hero-image{
    margin-top: -96px;
    height: 42vh;
    min-height: 220px;
    max-height: 360px;
  }

  .heroSwiper img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
}
