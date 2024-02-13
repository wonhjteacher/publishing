
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

/* 공지모달 처리 */ 

const noticeOpen = document.querySelector('.btn-open-notice');
const noticeClose = document.querySelector('.close-btn-box');
const noticeWindow= document.querySelector('#noticeModalBg');

noticeOpen.addEventListener('click',()=>{
  noticeWindow.style.display='block';
})
noticeClose.addEventListener('click',()=>{
  noticeWindow.style.display='none';
})

/* gnb 처리 */
const depth1Li =  document.querySelectorAll('.gnb>li');
const depth2Bg = document.querySelectorAll('.dep2-bg-box');