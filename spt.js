// const audios = document.querySelectorAll('audio');

// audios.forEach((audio )=> {
//     audio.addEventListener('play', () => {
//         audios.forEach((otherAudi) => {
//             if (otherAudi !== audio) {
//                 otherAudi.pause();
//                  otherAudi.currentTime = 0; // Optional: Reset the audio to start
//             }
//         });
//     });
// });
const Audios=document.querySelectorAll('audio')
const pausefun=()=>{
    Audios.forEach((otheraudio)=>{
        if(audio!==otheraudio){
          otheraudio.pause();
          otheraudio.currentTime=0
    }
})
}

Audios.forEach((audio)=>{
    audio.addEventListener('play',pausefun())
})
