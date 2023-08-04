
/* header_nav show hide */
const menuBtn = document.querySelector('.header_toggle'); // 햄버거버튼
const nav = document.querySelector('.header_nav') ; // 네비 메뉴 

menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('on');
})

/* header_menu_item */

const menuBox = document.querySelector('.header_menu');
const menu = document.querySelectorAll('.header_menu_item');

const meneUpdate = (selectA) => {
    menu.forEach((a)=>{
        a.classList.remove('active')
    })
    selectA.classList.add('active')
}

menuBox.addEventListener('click',(e)=>{
    console.log(e);
    const selectMenu = e.target; 
    console.log(selectMenu);
    meneUpdate(selectMenu);

})
