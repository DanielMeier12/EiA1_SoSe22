var sound = [("./assets/c.mp3"), ("./assets/d.mp3"), ("./assets/e.mp3"), ("./assets/f.mp3"), ("./assets/g.mp3"), ("./assets/a.mp3"), ("./assets/b.mp3"), ("./assets/df.mp3"), ("./assets/ef.mp3"), ("./assets/gf.mp3"), ("./assets/af.mp3"), ("./assets/bf.mp3")];
var melodie = [sound[1], sound[2], sound[3], sound[4], sound[5], sound[4], sound[3], sound[2]];
var counter = 0;
//zentrale funktion
function playSample(ausgabe) {
    var sound = new Audio(ausgabe);
    if (document.getElementById("play").classList.contains("fa-stop")) {
        sound.play();
    }
    else {
        clearInterval();
        sound.pause();
    }
}
//loop
function playMelodie() {
    setInterval(function () {
        playSample(melodie[counter]);
        counter++;
        if (counter == 8) {
            counter = 0;
        }
    }, 500);
}
//remix  
function playRemix() {
    setInterval(function () {
        var value = Math.random() * 10;
        playSample(sound[Math.floor(value)]);
    }, 500);
}
//veränderung des buttons
function startStop() {
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
    }
}
//wiedergabe der toene/melodie/remix
window.addEventListener("load", function keyboard() {
    document.getElementById("c").addEventListener("click", function () { playSample(sound[1]); });
    document.getElementById("d").addEventListener("click", function () { playSample(sound[2]); });
    document.getElementById("e").addEventListener("click", function () { playSample(sound[3]); });
    document.getElementById("f").addEventListener("click", function () { playSample(sound[4]); });
    document.getElementById("g").addEventListener("click", function () { playSample(sound[5]); });
    document.getElementById("a").addEventListener("click", function () { playSample(sound[6]); });
    document.getElementById("b").addEventListener("click", function () { playSample(sound[7]); });
    document.getElementById("df").addEventListener("click", function () { playSample(sound[8]); });
    document.getElementById("ef").addEventListener("click", function () { playSample(sound[9]); });
    document.getElementById("gf").addEventListener("click", function () { playSample(sound[10]); });
    document.getElementById("af").addEventListener("click", function () { playSample(sound[11]); });
    document.getElementById("bf").addEventListener("click", function () { playSample(sound[12]); });
    document.getElementById("play").addEventListener("click", function () { startStop(); });
    document.getElementById("play").addEventListener("click", function () { playMelodie(); });
    document.querySelector("#remix").addEventListener("click", function () { playRemix(); });
});
//# sourceMappingURL=script.js.map