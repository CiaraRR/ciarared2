document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  new Swiper(".workshopSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,

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
