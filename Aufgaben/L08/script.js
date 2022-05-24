var sound = [("./assets/c.mp3"), ("./assets/d.mp3"), ("./assets/e.mp3"), ("./assets/f.mp3"), ("./assets/g.mp3"), ("./assets/a.mp3"), ("./assets/b.mp3"), ("./assets/df.mp3"), ("./assets/ef.mp3"), ("./assets/gf.mp3"), ("./assets/af.mp3"), ("./assets/bf.mp3")];
var melodie = [sound['01'], sound['02'], sound['03'], sound['04'], sound['05'], sound['04'], sound['03'], sound['02'], sound['01']];
var zaehler = 0;
window.addEventListener("load", keyboard);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function playBeat() {
    setInterval(function () {
        playSample(melodie[zaehler]);
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
function keyboard() {
    document.querySelector("#c").addEventListener("click", function () { playSample(sound[1]); });
    document.querySelector("#d").addEventListener("click", function () { playSample(sound[2]); });
    document.querySelector("#e").addEventListener("click", function () { playSample(sound[3]); });
    document.querySelector("#f").addEventListener("click", function () { playSample(sound[4]); });
    document.querySelector("#g").addEventListener("click", function () { playSample(sound[5]); });
    document.querySelector("#a").addEventListener("click", function () { playSample(sound[6]); });
    document.querySelector("#b").addEventListener("click", function () { playSample(sound[7]); });
    document.querySelector("#df").addEventListener("click", function () { playSample(sound[8]); });
    document.querySelector("#ef").addEventListener("click", function () { playSample(sound[9]); });
    document.querySelector("#gf").addEventListener("click", function () { playSample(sound[10]); });
    document.querySelector("#af").addEventListener("click", function () { playSample(sound[11]); });
    document.querySelector("#bf").addEventListener("click", function () { playSample(sound[12]); });
    document.querySelector("#play").addEventListener("click", function () { playBeat(); });
}
//# sourceMappingURL=script.js.map