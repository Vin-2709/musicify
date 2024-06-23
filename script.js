console.log("hiiiii");
// let pausebtn=document.querySelector('.fa-solid fa-pause');
let audioElement1=new Audio('1.mp3');
let audioElement2=new Audio('2.mp3');
let audioElement3=new Audio('3.mp3');
let audioElement4=new Audio('4.mp3');
let audioElement5=new Audio('5.mp3');
let audioElement6=new Audio('6.mp3');
let audioElement7=new Audio('7.mp3');
let masterplay=document.querySelector("#play");
let range=document.querySelector('#rangebar');
let song1=document.querySelector('.name1');
let song2=document.querySelector('.name2');
let song3=document.querySelector('.name3');
let song4=document.querySelector('.name4');
let song5=document.querySelector('.name5');
let song6=document.querySelector('.name6');
let song7=document.querySelector('.name7');
// let songItem=Array.from(document.querySelector(".songItems"));
// pausebtn.style.fontSize="2rem";
// masterplay.addEventListener('click',()=>{
//     if(audioElement1.paused &&  audioElement2.paused && audioElement3.paused && audioElement4.paused && audioElement5.paused ){
//         audioElement1.play();
//         masterplay.classList.remove('fa-play');
//         masterplay.classList.add('fa-pause');
//     }
    
//     else if(audioElement1.played &&  audioElement2.paused && audioElement3.paused && audioElement4.paused && audioElement5.paused ){
//         audioElement1.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
//     else if(audioElement1.paused &&  audioElement2.played && audioElement3.paused && audioElement4.paused && audioElement5.paused ){
//         audioElement1.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
//     else if(audioElement1.paused &&  audioElement2.paused && audioElement3.played && audioElement4.paused && audioElement5.paused ){
//         audioElement1.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
//     else if(audioElement1.played &&  audioElement2.paused && audioElement3.paused && audioElement4.played && audioElement5.paused ){ 
//         audioElement1.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
//     else if(audioElement1.played &&  audioElement2.paused && audioElement3.paused && audioElement4.paused && audioElement5.played ){  
//         audioElement1.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
// })
// masterplay.addEventListener('click',()=>{
//     if(audioElement2.paused ){
//         audioElement2.play();
//         masterplay.classList.remove('fa-play');
//         masterplay.classList.add('fa-pause');
//     }
//     else{
//         audioElement2.pause();
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
//     }
// })

audioElement1.addEventListener('timeupdate',()=>{
    progress=(audioElement1.currentTime/audioElement1.duration)*100;
    range.value=progress;
})
audioElement2.addEventListener('timeupdate',()=>{
    progress=(audioElement2.currentTime/audioElement2.duration)*100;
    range.value=progress;
})

range.addEventListener('change',()=>{
         audioElement1.currentTime=range.value*audioElement1.duration/100;
})

song1.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused){
        audioElement1.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement1.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song2.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused){
        audioElement2.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement2.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song3.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused ){
        audioElement3.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement3.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song4.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused ){
        audioElement4.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement4.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song5.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused ){
        audioElement5.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement5.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song6.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused ){
        audioElement6.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement6.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
song7.addEventListener('click',()=>{
    if(audioElement1.paused && audioElement2.paused  && audioElement3.paused  && audioElement4.paused  && audioElement5.paused  && audioElement6.paused   && audioElement7.paused ){
        audioElement7.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement7.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})


// let songs=[
//     { songName:"Winning Speech",filepath:"1.mp3",imgsrc:""},
//     { songName:"God Damn",filepath:"2.mp3",imgsrc:"2.webp"},
//     { songName:"White Brown Black",filepath:"3.mp3",imgsrc:"3.jpg"},
//     { songName:"Same Beef",filepath:"4.mp3",imgsrc:"4.jpg"},
//     { songName:"Sajni re",filepath:"5.mp3",imgsrc:"5.jpg"},
//     { songName:"Chahun Me Ya Na",filepath:"6.mp3",imgsrc:"6.jpg"},
//     { songName:"Sun Raha Hai Na TU",filepath:"7.mp3",imgsrc:"7.jpeg"},
// ]

// songItem.forEach((element,i)=>{
//     console.log(element,i);
//     element.querySelector("img")[0].src=songs[i].imgsrc;
//     element.querySelector(".name")[0].innerText=songs[i].songName;
// })