$(function(){
  /* 공지팝업 */
 $('#today_close').on('click',function(){
   $('#pop_notice').slideUp();
 })
 $('.btn_popup').on('click',function(){
      $('#pop_notice').slideToggle();
      $(this).toggleClass('on')
 })

/*섹션1 의 슬라이더  bxslider*/
$('.slider1').bxSlider({
  auto:true,
  mode:'fade',
  pager:false,
  autoControls:true,
  autoControlsCombine:true,
  onSlideBefore:function($slideElement,oldIndex,newIndex){
    $slideElement.children('img').removeClass('on');
  },
  onSlideAfter:function($slideElement,oldIndex,newIndex){
    $slideElement.children('img').addClass('on');
    $('.count').text(newIndex+1)
  },
});
  
/*섹션1 슬라이더 이미지 사이즈 */ 
let winWidth=$(window).innerWidth();
let winHeight=$(window).innerHeight();
$('.slider1 img').width(winWidth+(winWidth*0.3));
$('.slider1 img').height(winHeight+(winHeight*0.3));

  /*fullpage*/
  $('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    afterRender: function(){
      $('.slogon_title').delay(200).animate({top:'50px',opacity:1},800)
      $('.slogon_txt').delay(800).animate({top:'50px',opacity:1},800)
    }
  });
})//jQ