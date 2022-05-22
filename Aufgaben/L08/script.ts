var sound: HTMLAudioElement[] =[];
sound['01']=new Audio("./assets/c.mp3");
sound['02']=new Audio('./assets/d.mp3');
sound['03']=new Audio('./assets/e.mp3');
sound['04']=new Audio('./assets/f.mp3');
sound['05']=new Audio('./assets/g.mp3');
sound['06']=new Audio('./assets/a.mp3');
sound['07']=new Audio('./assets/b.mp3');
sound['08']=new Audio('./assets/df.mp3');
sound['09']=new Audio('./assets/ef.mp3');
sound['10']=new Audio('./assets/gf.mp3');
sound['11']=new Audio('./assets/af.mp3');
sound['12']=new Audio('./assets/bf.mp3');

var melodie: HTMLAudioElement[]=[];
sound['01']=new Audio("./assets/c.mp3");
sound['02']=new Audio('./assets/d.mp3');
sound['03']=new Audio('./assets/e.mp3');
sound['04']=new Audio('./assets/f.mp3');
sound['05']=new Audio('./assets/g.mp3');
sound['06']=new Audio('./assets/a.mp3');
sound['07']=new Audio('./assets/b.mp3');

window.addEventListener("load", function() {

    document.getElementById("play").addEventListener("click",function() {playSample (sound[''])});//große Baustelel bei der Wiedergabe vom Playbutton

    document.querySelector("#c").addEventListener("click",function() {playSound (sound['01'])});
    document.querySelector("#d").addEventListener("click",function() {playSound (sound['02'])});
    document.querySelector("#e").addEventListener("click",function() {playSound (sound['03'])});
    document.querySelector("#f").addEventListener("click",function() {playSound (sound['04'])});
    document.querySelector("#g").addEventListener("click",function() {playSound (sound['05'])});
    document.querySelector("#a").addEventListener("click",function() {playSound (sound['06'])});
    document.querySelector("#b").addEventListener("click",function() {playSound (sound['07'])});
    document.querySelector("#df").addEventListener("click",function() {playSound (sound['08'])});
    document.querySelector("#ef").addEventListener("click",function() {playSound (sound['09'])});
    document.querySelector("#gf").addEventListener("click",function() {playSound (sound['10'])});
    document.querySelector("#af").addEventListener("click",function() {playSound (sound['11'])});
    document.querySelector("#bf").addEventListener("click",function() {playSound (sound['12'])});


function playSound(sound:HTMLAudioElement){
    sound.play();}
function playSample(melodie:HTMLAudioElement){//Probleme beim Intervall
    setInterval(playSample,100);
    melodie.play();}
});
