const API_KEY=`AIzaSyA6GmOmT9kTmrJd2FJ64o-gzgbodjtItpU`;
let videoDataBox=[];
const videoListBox = document.querySelector('.video-list');
const searchInput = document.querySelector('#search');
const searchBtn =  document.querySelector('#searchBtn') ; 

const videoList  = async() => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json();
    videoDataBox=videoData.items;
    console.log(videoDataBox);
    render();
}

const render = () => {
    let videoResult = '' ; 
    videoResult=videoDataBox.map((item)=>{
        return `<div class="video-item">
            <div class="thum-img"> 
                <img src=${item.snippet.thumbnails.medium.url} alt="">
            </div>
            <div class="video-txt">
                <h2>${item.snippet.title}</h2>
                <p>${item.snippet.channelTitle}</p>
            </div>
        </div>`
    }).join("")
    videoListBox.innerHTML =  videoResult;

}
videoList();

