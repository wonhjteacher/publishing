$(function(){
  $('.main').on({
    /*over*/
    'mouseenter':function(){
       $(this).children('ul').slideDown(600);
    },
    /*out*/
    'mouseleave':function(){
      $(this).children('ul').slideUp(600);
    },
  })
  
})//jQ



/*
효과메서드 
show() => display:block
hide() => display:none
toggle() => show 와 hide 가 토글 

fadeIn(1000)=> 대상의 opacity 값을 올리다가 display:block
1000=>1초 
fadeOut()=> 대상의 opacity 값을 낮추다가 display:none
fadeToggle()=> fadeIn()<=>fadeOut()

slideUp() height 값을 0 으로 만들면서 display : none 
slideDown() 자기고 있는  height 값으로 만들면서 display : block
slideToggle()  slideUp <=> slideDown 토글 

DOM 탐색 메서드 
children() 자식 
children().children() 자식의 자식 
find() 후손  
parent() 부모  
parents() 조상 
siblings() 형제 
next() 나 바로 뒤 에 오는 객체 (형제)
prev() 나 바로 앞에 오는 객체 (형제)
eq() 인덱스 번째 
*/