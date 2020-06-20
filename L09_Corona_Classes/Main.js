"use strict";
var L09_Corona;
(function (L09_Corona) {
    window.addEventListener("load", handleLoad);
    let viruss = []; //Array für CoronaVirus
    let cells = []; //Array für HumanCells
    let partis = []; //Array für Particles
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Corona.crc2 = canvas.getContext("2d");
        drawBackground(); //Hintergrund wird kreiert
        createCorona(26); //Coronaviren werden kreiert (in der Klammer steht die Anzahl als Parameter)
        window.setInterval(update, 25); //die Funktion update wird alle 25 millisekunden aufgerufen
        createHuman(40); //Körperzelle wird kreiert (in der Klammer steht die Anzahl als Parameter)
        createParticle(200); //Partikel wird kreirt (in der Klammer steht die Anzahl als Parameter)
    }
    function drawBackground() {
        L09_Corona.crc2.resetTransform();
        let gradient = L09_Corona.crc2.createLinearGradient(0, 0, 0, L09_Corona.crc2.canvas.height);
        gradient.addColorStop(0, "peachpuff");
        gradient.addColorStop(1, "seashell");
        L09_Corona.crc2.fillStyle = gradient;
        L09_Corona.crc2.fillRect(0, 0, L09_Corona.crc2.canvas.width, L09_Corona.crc2.canvas.height);
    }
    function createCorona(_nCorona) {
        for (let i = 0; i < _nCorona; i++) { //solange Coronazellen erzeugen, bis Anzahl in Klammer erreicht ist
            let coronii = new L09_Corona.CoronaVirus(1.0);
            viruss.push(coronii); //push den coronii in den viruss Array
        }
        console.log(viruss);
    }
    function createHuman(_nCorona) {
        for (let i = 0; i < _nCorona; i++) { //solange Humanzellen erzeugen, bis Anzahl in Klammer erreicht ist
            let cell = new L09_Corona.HumanCells(1.0);
            viruss.push(cell); //push den cell in den viruss Array
        }
    }
    function createParticle(_nCorona) {
        for (let i = 0; i < _nCorona; i++) { //solange Partikel erzeugen, bis Anzahl in Klammer erreicht ist
            let parti = new L09_Corona.Particles(1.0);
            partis.push(parti); //push die parti in den partis Array
        }
    }
    function update() {
        drawBackground(); //Background immer wieder neu erzeugen, sonst sieht man die "Spur" der Zellen 
        for (let coronii of viruss) { //weist auf den coronii im Array "viruss" hin
            coronii.move(1 / 80); //weise der Coronazelle Bewegung zu mit "move"
            coronii.draw(); //weise der Coronazelle die Selbstzeichnung zu mit "draw"
        }
        for (let cell of cells) { //weist auf den cell im Array "cells" hin
            cell.move(1 / 100); //weise der Humancell Bewegung zu mit "move"
            cell.draw(); //weise der Humancell die Selbstzeichnung zu mit "draw"
        }
        for (let parti of partis) { //weist auf den parti im Array "partis" hin
            parti.move(1 / 50); //weise dem Partikel Bewegung zu mit "move"
            parti.draw(); //weise dem Partikel die Selbstzeichnung zu mit "draw"
        }
    }
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=Main.js.map