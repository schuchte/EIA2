namespace L002_Sequenzmemory {

let chosenSequence: string = "";
let Sequencearray: string [] = [];
let gametime: number;
let claritytime: number;
let joker: boolean = false;

window.addEventListener("load", handleLoad);

function handleLoad (_event: Event): void {
document.querySelector("#chosensequence").addEventListener("keydown", helper);
let help: HTMLInputElement =<HTMLInputElement> document.createElement("p"); 
function helper() {                                                                     //Funktion die die Sequenz vollständig anzeigen sollte
document.querySelector("#help").innerHTML= help.textContent;

}

document.querySelector("#gametime").addEventListener("keydown", Gtime); 
function Gtime(){ 
let timeg: HTMLInputElement =<HTMLInputElement> document.createElement("p"); 
function Gtime(){                                                                     //Funktion die die vom User eingestellte Zeit für das Spiel anzeigt
document.querySelector("#gtime").innerHTML= timeg.textContent;


let myLet = setInterval(myTimer, 1000);

function myTimer() {
 
}

document.querySelector("#claritytime").addEventListener("keydown", Ctime); 

function Ctime(){
let timec: HTMLInputElement =<HTMLInputElement> document.createElement("p"); 
function Ctime(){                                                                 //Funktion die die vom User eingestellte Zeit für die Kartenklarheit anzeigt
document.querySelector("#ctime").innerHTML= timec.textContent;

let myLet = setInterval(myTimer, 1000);

function myTimer() {
 
}

document.querySelector("#start").addEventListener("click", Startgame); 

function Startgame(): void{                                                        //Funktion, die beim klicken des Start Buttons die ausgesuchte Wortsequenz speichert und dessen Buchstaben vermischt
    chosenSequence = help.value 
    Sequencearray = chosenSequence.split("");
    Sequencearray.sort();

    let letter: HTMLSpanElement = <HTMLSpanElement> document.createElement("#card");  //Buchstaben sollen als span Elemente angezeigt werden
    document.querySelector("#chosenSequence").innerHTML= letter.textContent

}



}
}
}
}
}
}