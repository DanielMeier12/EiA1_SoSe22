var europa22:number=750.83;
var deutschland22: number=83.77;
var deutschland00: number=81.39;
var italien22: number=60.61;
var italien00: number=56.67;
var frankreich22: number=65.89;
var frankreich00: number=58.86;
var spanien22: number=46.52;
var spanien00: number=40.64;

var deRelativZurEu: number=deutschland22/europa22*100;
var itRelativZurEu: number=italien22/europa22*100;
var frRelativZurEu: number=frankreich22/europa22*100;
var spRelativZurEu: number=spanien22/europa22*100;

var deDifferenz: number=deutschland22-deutschland00;
var frDifferenz: number=frankreich22-frankreich00;
var itDifferenz: number=italien22-italien00;
var spDifferenz: number=spanien22-spanien00;

var deWachstum: number=deDifferenz/deutschland00*100;
var itWachstum: number=itDifferenz/italien00*100;
var frWachstum: number=frDifferenz/frankreich00*100;
var spWachstum: number=spDifferenz/spanien00*100;

console.log("Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022: "+deutschland22+"Mio");
console.log("Relativ zur Gesamtzahl in der Eu: "+deRelativZurEu.toFixed(2)+"%");
console.log("Wachstumsrate seit 2000: "+deWachstum.toFixed(2)+"%");
console.log("Wachsumsrate gesamt zwischen 2000 und 2022: "+deDifferenz.toFixed(2)+"Mio");

console.log("Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022: "+italien22+"Mio");
console.log("Relativ zur Gesamtzahl in der Eu: "+itRelativZurEu.toFixed(2)+"%");
console.log("Wachstumsrate seit 2000: "+itWachstum.toFixed(2)+"%");
console.log("Wachsumsrate gesamt zwischen 2000 und 2022: "+itDifferenz.toFixed(2)+"Mio");

console.log("Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022: "+frankreich22+"Mio");
console.log("Relativ zur Gesamtzahl in der Eu: "+frRelativZurEu.toFixed(2)+"%");
console.log("Wachstumsrate seit 2000: "+frWachstum.toFixed(2)+"%");
console.log("Wachsumsrate gesamt zwischen 2000 und 2022: "+frDifferenz.toFixed(2)+"Mio");

console.log("Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022: "+spanien22+"Mio");
console.log("Relativ zur Gesamtzahl in der Eu: "+spRelativZurEu.toFixed(2)+"%");
console.log("Wachstumsrate seit 2000: "+spWachstum.toFixed(2)+"%");
console.log("Wachsumsrate gesamt zwischen 2000 und 2022: "+spDifferenz.toFixed(2)+"Mio");