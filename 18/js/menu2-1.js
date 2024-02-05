const body =  document.querySelector('body');
const moon = document.querySelector('#moon');
const star = document.querySelectorAll('.star') ;
const contentList = document.querySelector('.content_list');//ul
const content = document.querySelectorAll('.content');//li
const contentBody = document.querySelectorAll('.acco-body') //ul>li>p
content.forEach((ele,index)=>ele.setAttribute('data-index',index));//li에 data-index속성부여 
//  시간에 따라 테마바꾸기 
const upDateThema = () =>{
  const now = new Date();
  let h = now.getHours();// 시간
  console.log(h)
  if(h>18){ //pm 6 시 이후 밤 
    body.classList.add('night');
    moon.classList.add('on')
  }else{
    body.classList.remove('night');
    moon.classList.remove('on')
  }
}
upDateThema(); // 호출 

// 아코디언 메뉴 
contentList.addEventListener('click',e=>{
  let selectedLi=e.target;
  let isOn = selectedLi.classList.contains('on');
  if(isOn){ // 현재 열린상태 => 닫힘으로 만든다
    selectedLi.classList.remove('on');
    selectedLi.childNodes.forEach(ele=>{
      if(ele.tagName === "P") ele.classList.remove('active')
    })
  }else{ // 현재 닫힘 상태 => 열림으로 만든다
    content.forEach(ele=>ele.classList.remove('on'))
    selectedLi.classList.add('on');
    contentBody.forEach(ele=>ele.classList.remove('active'));
    let index = selectedLi.dataset.index;
    contentBody[index].classList.add('active');
  }
})

 