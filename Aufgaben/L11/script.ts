window.addEventListener("load", function (): void {
//Deklaration von globalen variablen 
let buttonStart: HTMLButtonElement = document.querySelector("#start");
const boxModus: HTMLElement = document.getElementById("wrapper");
let scorepoints: number = 0; //Punkterechner gesamt
let singleScore: number = 0; //Punkte für die einzelnen Wörter
let singleScoreMax: number = 0; // max. erreichbare Anzahl an Wörter 
let curTask: number = 0; //aktuelle Aufgabe 
let taskMax: number = 0; // maximale Aufgabe 
let sentenceList: number[] = []; //Anzahl der zufälligen Sätze 

interface TaskSentence { // Vorgabe für Array
    german: string[];
    spanish: string[];
    ukrainian: string[];
}
const saetze: TaskSentence[] = [ //Beispielsätze 
    {
    german: ["Ich", "heiße", "Daniel"],
    spanish: ["Me", "llamo", "Daniel"],
    ukrainian: ["Мене", "звуть", "Даніель"]
    },
    {
    german: ["Schön", "dich", "kennenzulernen!"],
    spanish: ["Encantada!"],
    ukrainian: ["приємно", "познайомитись"]
    },
    {
    german: ["Wie", "heißt", "du?"],
    spanish: ["Cómo", "te", "llamas?"],
    ukrainian: ["приємно", "познайомитись"]
    },
    {
    german: ["Wie", "geht", "es", "dir?"],
    spanish: ["Cómo", "estás?"],
    ukrainian: ["Як", "ти?"]
    },
    {
    german: ["Wie", "läufts?"],
    spanish: ["Qué", "pasa?"],
    ukrainian: ["Як", "поживаєш?"]
    },
    {
    german: ["Bis", "später"],
    spanish: ["Hasta", "luego"],
    ukrainian: ["побачимося", "пізніше"]
    },
    {
    german: ["Woher", "kommst", "du?"],
    spanish: ["De", "donde", "eres"],
    ukrainian: ["Звідки", "ти", "родом?"]
    },
    {
    german: ["Ich", "mag", "es", "nicht"],
    spanish: ["No", "me", "gusta"],
    ukrainian: ["мені", "це", "не", "подобається"]
    },
    {
    german: ["Schönen", "Tag", "noch"],
    spanish: ["Que", "tengas", "un", "bien", "dia"],
    ukrainian: ["Бажаю", "добре", "провести", "час"]
    },
    {
    german: ["Können", "sie", "etwas", "langsamer", "sprechen"],
    spanish: ["Por", "favor,", "hable", "más", "despacio"],
    ukrainian: ["не", "могли", "б ви", "говорити", "повільніше"]
    },
    {
    german: ["Ich", "habe", "sehr", "viel", "spaß"],
    spanish: ["tengo", "mucha", "diversion"],
    ukrainian: ["Мені", "дуже", "весело"]
    },
    {
    german: ["Gern", "geschehen"],
    spanish: ["De", "nada"],
    ukrainian: ["Ласкаво", "просимо"]
    },
    {
    german: ["Machen", "sie", "sich", "keine", "sorgen"],
    spanish: ["No", "te", "preocupes"],
    ukrainian: ["Не", "хвилюйся"]
    },
    {
    german: ["Wie", "spät", "ist", "es?"],
    spanish: ["¿Que", "hora", "tienes?"],
    ukrainian: ["Котра", "година?"]
    },
    {
    german: ["Woher", "kommen", "sie?"],
    spanish: ["¿De", "dónde", "vives?"],
    ukrainian: ["Звідки", "ти", "родом?"]
    }
];

function shuffleArray(num: number): number[] { //Erstellt ein Array mit einer zufälligen Reihenfolge 
    let array: number[] = [];
    for (let index: number = 0; index < num; index++) {
        array.push(index);
    }
    let curId: number = array.length;
    //aktuelle Id wird die vom geshuffeltem zugewiesen
    while (0 !== curId) {
      let randId: number = Math.floor(Math.random() * curId);
      curId -= 1;
      //zwischenspeicher der Id
      let tmp: number = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }
//Funktion zur Ausgabe von zuvor zufällig generierten Sätzen
function generatorTask(): void {
    console.log(curTask);
    console.log(taskMax);
    if (curTask < taskMax) {
        for (let index: number = 0; index < saetze[sentenceList[curTask]].german.length; index++) { 
            document.querySelector(".task").innerHTML += saetze[sentenceList[curTask]].german[index] + " "; //deutsche zufälliger Satz wird geneneriert
        }
        document.getElementById("progressText").innerHTML = `Übungssatz ${curTask + 1} von ${taskMax}`; //curTask + taskMax wird durch $ der aktuelle Wert zugewiesen 
        document.getElementById("progressbar").setAttribute("value", `${curTask + 1 }` ); //
        document.getElementById("progressbar").setAttribute("max", `${taskMax}`); //
        document.getElementById("progressbar").hidden = false;
        let shuffledArray: number[] = shuffleArray(saetze[sentenceList[curTask]][document.getElementById("country").value].length); //greift auf die ausgewählte Sprache zu, um die länger des Array wiederzugeben
        for (let index of shuffledArray) {
            let button: HTMLButtonElement = document.createElement("button"); //erstellt button für array 
            button.id = `button${index}`; //$ - generiert automatisch index Zahl für Array  
            button.textContent = saetze[sentenceList[curTask]][document.getElementById("country").value][index]; //Button wird befüllt
            button.addEventListener("click", checkListe);
            document.getElementById("buttons").appendChild(button);
            button.className = "wordButton";
        }
        singleScoreMax = shuffledArray.length; // wird bei neuer Aufgabe zurückgesetzt
        singleScore = 0; // wird bei neuer Aufgabe zurückgesetzt
    }
    document.getElementById("points").innerHTML = `Punktestand: ${scorepoints}`;
} 
function checkListe(): void { //wird bei Button klick ausgeführt 
 
    if (this.id === `button${singleScore}`) {
        this.disabled = true; //wenn richtiger geklickt wurde, kann er nicht mehr betätigt werden 
        singleScore ++; //wertezuwachs
        scorepoints ++; 
        document.getElementById("solution").innerHTML = `${document.getElementById("solution").innerHTML} ${this.textContent}`;
    }
    
    else {
        alert("falsch");
        if (scorepoints > 0 ) {
            scorepoints --; // punkt wird abgezogen + alert "Falsch!"
        }
    }
    if (singleScore == singleScoreMax) { //Ende der Aufgabe, wird gecleared
        document.getElementById("solution").innerHTML = "";
        document.querySelector(".task").innerHTML = "";
        document.getElementById("buttons").innerHTML = "";
        alert("Sehr gut!");
        curTask ++;
        generatorTask();
    }
    if (curTask == taskMax) { //Abschluss: wird endgültig gecleared
        document.getElementById("solution").innerHTML = "";
        document.querySelector(".task").innerHTML = `Dein Punktestand: ${scorepoints}` ;
        document.getElementById("buttons").innerHTML = "";
        document.querySelector(".header").removeChild(document.getElementById("points"));
        document.getElementById("back").hidden = false;
        document.getElementById("progressText").hidden = true;
        document.getElementById("progressbar").hidden = true;
    }
}


buttonStart.addEventListener("click", function startClicked(event: MouseEvent): void { //Start des Programmes
    document.getElementById("start").hidden = true; // Startknopf verschwindet 
    document.getElementById("country").hidden = true;

    console.log("Wähle eine Option");
    console.log("Easy");
    console.log("Medium");
    console.log("Hard");

    const easyButton: HTMLDivElement = document.createElement("div"); //erstelle div für den Button Easy
    easyButton.id = "easy"; //Zuweisung des ID - style  
    const easyText: HTMLParagraphElement = document.createElement("p"); //erstelle p für den Text
    easyText.textContent = "Easy"; //Zuweisung was im Text stehen soll

    const mediumButton: HTMLDivElement = document.createElement("div");
    mediumButton.id = "medium";
    const mediumText: HTMLParagraphElement = document.createElement("p");
    mediumText.textContent = "Medium";

    const hardButton: HTMLDivElement = document.createElement("div");
    hardButton.id = "hard";
    const hardText: HTMLParagraphElement = document.createElement("p");
    hardText.textContent = "Hard";

    //Boxfeld für Erscheinung der Auswahlmöglichkeiten
    boxModus?.appendChild(easyButton);
    easyButton?.appendChild(easyText);

    boxModus?.appendChild(mediumButton);
    mediumButton?.appendChild(mediumText);

    boxModus?.appendChild(hardButton);
    hardButton?.appendChild(hardText); //Box  wird zunächst mit Button befüllt. Anschließend der Button mit dem Text


    easyButton.addEventListener("click", function easyClicked(event: MouseEvent): void { //Start für den jeweilgen Modus
        document.getElementById("easy").hidden = true;
        document.getElementById("medium").hidden = true;
        document.getElementById("hard").hidden = true;

        console.log("Easy wurde gedrückt");

        curTask = 0; 
        taskMax = 5;
        sentenceList = shuffleArray(taskMax); //Liste erstellt zufällige Sätze für den ausgewählter Modus
        generatorTask();

    });
    mediumButton.addEventListener("click", function easyClicked(event: MouseEvent): void { //Start für den jeweilgen Modus
        document.getElementById("easy").hidden = true;
        document.getElementById("medium").hidden = true;
        document.getElementById("hard").hidden = true;

        console.log("Medium wurde gedrückt");

        curTask = 0;
        taskMax = 10;
        sentenceList = shuffleArray(taskMax);
        generatorTask();

    });


    hardButton.addEventListener("click", function easyClicked(event: MouseEvent): void { //Start für den jeweilgen Modus
        document.getElementById("easy").hidden = true;
        document.getElementById("medium").hidden = true;
        document.getElementById("hard").hidden = true;

        console.log("Hard wurde gedrückt");

        curTask = 0;
        taskMax = 15;
        sentenceList = shuffleArray(taskMax);
        generatorTask();

    });

    
}); 
});
