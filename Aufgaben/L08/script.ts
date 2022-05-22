var sound:HTMLAudioElement[] =[
    new Audio("./assets/c.mp3"),
    new Audio('./assets/d.mp3'),
    new Audio('./assets/e.mp3'),
    new Audio('./assets/f.mp3'),
    new Audio('./assets/g.mp3'),
    new Audio('./assets/a.mp3'),
    new Audio('./assets/b.mp3'),
    new Audio('./assets/df.mp3'),
    new Audio('./assets/ef.mp3'),
    new Audio('./assets/gf.mp3'),
    new Audio('./assets/af.mp3'),
    new Audio('./assets/bf.mp3'),
];
function playSample(sound:HTMLAudioElement){
    sound.play();
}
window.addEventListener("load", function(){
    document.querySelector("#play").addEventListener('click',playSample);
    });
setInterval(function playSample() { 
 }, 500);