document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".heroSwiper .swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".workshopSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: ".workshopSwiper .swiper-button-next",
      prevEl: ".workshopSwiper .swiper-button-prev",
    },

    pagination: {
      el: ".workshopSwiper .swiper-pagination",
      clickable: true,
    },
  });
});
