var europa22:number=750.58;
var europa00:number=727.33;

var deutschland22: number=83.77;
var deutschland00: number=81.39;

var italien22: number=60.61;
var italien00: number=56.67;

var frankreich22: number=65.89;
var frankreich00: number=58.86;

var spanien22: number=46.52;
var spanien00: number=40.64;

var euRelativZurEu: number=europa22/europa22*100;
var deRelativZurEu: number=deutschland22/europa22*100;
var itRelativZurEu: number=italien22/europa22*100;
var frRelativZurEu: number=frankreich22/europa22*100;
var spRelativZurEu: number=spanien22/europa22*100;

var euDifferenz: number=europa22-europa00;
var deDifferenz: number=deutschland22-deutschland00;
var frDifferenz: number=frankreich22-frankreich00;
var itDifferenz: number=italien22-italien00;
var spDifferenz: number=spanien22-spanien00;

var euWachstum: number=euDifferenz/europa00*100;
var deWachstum: number=deDifferenz/deutschland00*100;
var itWachstum: number=itDifferenz/italien00*100;
var frWachstum: number=frDifferenz/frankreich00*100;
var spWachstum: number=spDifferenz/spanien00*100;

window.addEventListener('load',function(){
    document.querySelector(".chartStarWrapper").addEventListener('click',europa);
    document.querySelector(".germany").addEventListener('click',deutschland);
    document.querySelector(".italy").addEventListener('click',italien);
    document.querySelector(".france").addEventListener('click',frankreich);
    document.querySelector(".spain").addEventListener('click',spanien);
});
function europa(){
    document.querySelector(".zahl").innerHTML="Einwohnerzahl in der europäischen Union";
    document.querySelector(".chart").setAttribute("style","height:"+euRelativZurEu+"%");
    document.querySelector(".stars").setAttribute("style","opacity:1");
    document.getElementById("gesamtzahl").innerHTML=europa22+"Mio";
    document.getElementById("land").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Europa in 2022";
    document.getElementById("relativ").innerHTML=euRelativZurEu.toFixed(2)+"%";
    document.getElementById("wachstumsrate").innerHTML=euWachstum.toFixed(2)+"%";
    document.getElementById("wachstumsrateZahl").innerHTML=euDifferenz.toFixed(2)+"Mio";
}
function deutschland(){
    document.querySelector(".zahl").innerHTML="Einwohnerzahl in Deutschland";
    document.querySelector(".chart").setAttribute("style","height:"+deRelativZurEu+"%");
    document.querySelector(".germany").setAttribute("style","opacity:1");
    document.getElementById("gesamtzahl").innerHTML=deutschland22+"Mio";
    document.getElementById("land").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
    document.getElementById("relativ").innerHTML=deRelativZurEu.toFixed(2)+"%";
    document.getElementById("wachstumsrate").innerHTML=deWachstum.toFixed(2)+"%";
    document.getElementById("wachstumsrateZahl").innerHTML=deDifferenz.toFixed(2)+"Mio";
}
function italien(){
    document.querySelector(".zahl").innerHTML="Einwohnerzahl in Italien";
    document.querySelector(".chart").setAttribute("style","height:"+itRelativZurEu+"%");
    document.querySelector(".italy").setAttribute("style","opacity:1");
    document.getElementById("gesamtzahl").innerHTML=italien22+"Mio";
    document.getElementById("land").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
    document.getElementById("relativ").innerHTML=itRelativZurEu.toFixed(2)+"%";
    document.getElementById("wachstumsrate").innerHTML=itWachstum.toFixed(2)+"%";
    document.getElementById("wachstumsrateZahl").innerHTML=itDifferenz.toFixed(2)+"Mio";
}
function frankreich(){
    document.querySelector(".zahl").innerHTML="Einwohnerzahl in Frankreich";
    document.querySelector(".chart").setAttribute("style","height:"+frRelativZurEu+"%");
    document.querySelector(".france").setAttribute("style","opacity:1");
    document.getElementById("gesamtzahl").innerHTML=frankreich22+"Mio";
    document.getElementById("land").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
    document.getElementById("relativ").innerHTML=frRelativZurEu.toFixed(2)+"%";
    document.getElementById("wachstumsrate").innerHTML=frWachstum.toFixed(2)+"%";
    document.getElementById("wachstumsrateZahl").innerHTML=frDifferenz.toFixed(2)+"Mio";
}
function spanien(){
    document.querySelector(".zahl").innerHTML="Einwohnerzahl in Spanien";
    document.querySelector(".chart").setAttribute("style","height:"+spRelativZurEu+"%");
    document.querySelector(".spain").setAttribute("style","opacity:1");
    document.getElementById("gesamtzahl").innerHTML=spanien22+"Mio";
    document.getElementById("land").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022";
    document.getElementById("relativ").innerHTML=spRelativZurEu.toFixed(2)+"%";
    document.getElementById("wachstumsrate").innerHTML=spWachstum.toFixed(2)+"%";
    document.getElementById("wachstumsrateZahl").innerHTML=spDifferenz.toFixed(2)+"Mio";
}