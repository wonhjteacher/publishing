
const menuBtn = document.querySelector('.header_toggle'); // 햄버거버튼
const nav = document.querySelector('.header_nav') ; // 네비 메뉴 

menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('on');
})