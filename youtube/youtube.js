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
}

videoList();