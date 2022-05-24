var sound: string[]=[("./assets/c.mp3"),("./assets/d.mp3"),("./assets/e.mp3"),("./assets/f.mp3"),("./assets/g.mp3"),("./assets/a.mp3"),("./assets/b.mp3"),("./assets/df.mp3"),("./assets/ef.mp3"),("./assets/gf.mp3"),("./assets/af.mp3"),("./assets/bf.mp3")];
var melodie: string[]=[sound[1],sound[2],sound[3],sound[4],sound[5],sound[4],sound[3],sound[2]]
var zaehler: number= 0;

function playSample(soundQuelle: string): void{
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}
function playMelodie(): void{
    setInterval(function(): void{
        playSample(melodie[zaehler]);
        zaehler ++;
        if (zaehler === 8) {
            zaehler = 0;
        }
    }, 500);
}
window.addEventListener('load',function keyboard(): void {
    document.querySelector("#c").addEventListener("click",function(): void{playSample(sound[1]);});
    document.querySelector("#d").addEventListener("click",function(): void{playSample(sound[2]);});
    document.querySelector("#e").addEventListener("click",function(): void{playSample(sound[3]);});
    document.querySelector("#f").addEventListener("click",function(): void{playSample(sound[4]);});
    document.querySelector("#g").addEventListener("click",function(): void{playSample(sound[5]);});
    document.querySelector("#a").addEventListener("click",function(): void{playSample(sound[6]);});
    document.querySelector("#b").addEventListener("click",function(): void{playSample(sound[7]);});
    document.querySelector("#df").addEventListener("click",function(): void{playSample(sound[8]);});
    document.querySelector("#ef").addEventListener("click",function(): void{playSample(sound[9]);});
    document.querySelector("#gf").addEventListener("click",function(): void{playSample(sound[10]);});
    document.querySelector("#af").addEventListener("click",function(): void{playSample(sound[11]);});
    document.querySelector("#bf").addEventListener("click",function(): void{playSample(sound[12]);});
    document.querySelector("#play").addEventListener("click",function(): void{playMelodie();});
});