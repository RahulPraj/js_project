let songList = document.querySelector("#song-list");
let progress = document.querySelector("#progress");
let playBtn = document.querySelector("#ply-btn");


let songs = [
    {
        name:"song1",
        id:1
    },
    {
        name:"song2",
        id:2
    },
    {
        name:"song3",
        id:3
    },
    {
        name:"song4",
        id:4
    },
    {
        name:"song5",
        id:5
    }
]

let audio = new Audio('./assets/song1.mp3');

// to show all the songs

for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    songList.appendChild(li);
}


// playand pause

playBtn.addEventListener('click' , function(){
    audio.paused ? audio.play() : audio.pause();

    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }else{
        playBtn.children[0].classList.add('fa-play')
        playBtn.children[0].classList.remove('fa-pause')
    }

})


// progress acc ot current time
audio.addEventListener('timeupdate' , function(){
    let currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;
})

// to change acc to the input range
progress.addEventListener('change' , function(){
    let updatedTime = audio.duration * progress.value / 100;
    audio.currentTime = updatedTime
})

// changing the songs

songList.addEventListener('click' , function(event){
    let songId = event.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play')
    playBtn.children[0].classList.add('fa-pause')
    

})

//song forword
let fwdBtn = document.querySelector('#fwd')
let num = 0
fwdBtn.addEventListener('click', function(){
    let songId = num+1;
    audio.src = `./assets/song${songId}.mp3`;
    num =  (num+1) %  songs .length
    //console.log(num);
    audio.currentTime = 0;
    audio.play();
    btn.children[0].classList.remove('fa-play')
    btn.children[0].classList.add('fa-pause')
})

//song Fackword
// let bckBtn = document.querySelector('#bck');
// let num1 =songs.length;

// bckBtn.addEventListener('click', function(){
//     let songId = num1-1;
//     audio.src = `./assets/song${songId}.mp3`;

   
// })
