const API_KEY=`AIzaSyBuBKfs4MHbSdcrnL0F249dZOs5gvSuVHo`;
let videoDataBox=[];
const videoListBox =  document.querySelector('.video-list');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn')
//검색창에서 검색 시 검색 결과 불러오는 함수 
const getSearchVideo  = () => {


}

//비디오 리스트를 불러오는 함수 
const videoList = async () => {
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`
  let reponse = await fetch(url);
  let videoData  = await reponse.json(); // axios 플러그인 
  console.log(videoData)
  videoDataBox = videoData.items;
  render();
}

//화면에 그리는 render 함수 
const render  = () =>{
  let videoResult = '';
  videoResult = videoDataBox.map((ele)=>{
    return `<div class="video-item">
    <div class="thum-img">
      <img src=${ele.snippet.thumbnails.medium.url} alt=${ele.snippet.title}>
    </div>
    <div class="video-txt">
        <h3>${ele.snippet.title}</h3>
        <p>${ele.snippet.description}</p>
    </div>
  </div>`
  }).join('')
  videoListBox.innerHTML =  videoResult;

}

videoList(); // 비디오리스트 호출 

