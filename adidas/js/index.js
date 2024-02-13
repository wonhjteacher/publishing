
var swiper = new Swiper(".product-tab-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


var swiper2 = new Swiper(".product-popular-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerGroup:4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
