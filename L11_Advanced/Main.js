"use strict";
var L11_Corona;
(function (L11_Corona) {
    window.addEventListener("load", handleLoad);
    // let viruss: CoronaVirus[] = []; //Array für CoronaVirus
    // let cells: HumanCells[] = []; //Array für HumanCells
    // let partis: Particles[] = []; //Array für Particles
    let cells = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Corona.crc2 = canvas.getContext("2d");
        drawBackground(); //Hintergrund wird kreiert
        // createCorona(26); //Coronaviren werden kreiert (in der Klammer steht die Anzahl als Parameter)
        window.setInterval(update, 40); //die Funktion update wird alle 40 millisekunden aufgerufen
        // createHuman(40); //Körperzelle wird kreiert (in der Klammer steht die Anzahl als Parameter)
        // createParticle(200); //Partikel wird kreirt (in der Klammer steht die Anzahl als Parameter)
        createCells();
    }
    function drawBackground() {
        L11_Corona.crc2.resetTransform();
        let gradient = L11_Corona.crc2.createLinearGradient(0, 0, 0, L11_Corona.crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "mistyrose");
        gradient.addColorStop(1, "crimson");
        L11_Corona.crc2.fillStyle = gradient;
        L11_Corona.crc2.fillRect(0, 0, L11_Corona.crc2.canvas.width, L11_Corona.crc2.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let nParticles = 600;
        let nCells = 60;
        let nCorona = 15;
        let nAnti = 30;
        let nKiller = 20;
        //KillerCells
        for (let i = 0; i < nKiller; i++) {
            x = (Math.random() * L11_Corona.crc2.canvas.width);
            y = (Math.random() * L11_Corona.crc2.canvas.height);
            let position = new L11_Corona.Vector(x, y);
            let killer = new L11_Corona.KillerCell(position);
            killer.draw();
            cells.push(killer);
        }
        //AntiCells
        for (let i = 0; i < nAnti; i++) {
            x = (Math.random() * L11_Corona.crc2.canvas.width);
            y = (Math.random() * L11_Corona.crc2.canvas.height);
            let position = new L11_Corona.Vector(x, y);
            let anti = new L11_Corona.AntiCell(position);
            anti.draw();
            cells.push(anti);
        }
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * L11_Corona.crc2.canvas.width);
            y = (Math.random() * L11_Corona.crc2.canvas.height);
            let position = new L11_Corona.Vector(x, y);
            let particle = new L11_Corona.Particles(position);
            particle.draw();
            cells.push(particle);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L11_Corona.crc2.canvas.width); //x Abstand der Zellen
            y = (100 + Math.random() * L11_Corona.crc2.canvas.height); //y Abstand der Zellen
            let position = new L11_Corona.Vector(x, y);
            let humancell = new L11_Corona.HumanCells(position);
            humancell.draw();
            cells.push(humancell);
        }
        //coronaVirus
        for (let i = 0; i < nCorona; i++) {
            x = (Math.random() * L11_Corona.crc2.canvas.width);
            y = (100 + Math.random() * L11_Corona.crc2.canvas.height);
            let position = new L11_Corona.Vector(x, y);
            let corona = new L11_Corona.CoronaVirus(position);
            corona.draw();
            cells.push(corona);
        }
    }
    function update() {
        drawBackground();
        for (let Moveable of cells) {
            if (Moveable instanceof L11_Corona.CoronaVirus)
                Moveable.move(1 / 30);
            else if (Moveable instanceof L11_Corona.HumanCells)
                Moveable.move(1 / 15);
            else if (Moveable instanceof L11_Corona.Particles)
                Moveable.move(1 / 80); //Schnelligkeit --> timeslice, also 1 mal in 80 millisek.
            else if (Moveable instanceof L11_Corona.AntiCell)
                Moveable.move(1 / 30);
            else if (Moveable instanceof L11_Corona.KillerCell)
                Moveable.move(1 / 40);
            Moveable.draw();
        }
        Infection();
    }
    function Infection() {
        for (let Moveable of cells) {
            if (Moveable instanceof L11_Corona.CoronaVirus) {
                let radiusvirus = Moveable.radius;
                let positionvirus = Moveable.position;
                let cellHit = getcellHit(positionvirus, radiusvirus);
                if (cellHit) {
                    cellHit.infected = true;
                }
            }
        }
    }
    function getcellHit(_positionvirus, _radiusvirus) {
        for (let Moveable of cells) {
            if (Moveable instanceof L11_Corona.HumanCells && Moveable.isHit(_positionvirus, _radiusvirus))
                return Moveable;
        }
        return null;
    }
})(L11_Corona || (L11_Corona = {}));
// function createCorona(_nCorona: number): void {
//     for (let i: number = 0; i < _nCorona; i++) { //solange Coronazellen erzeugen, bis Anzahl in Klammer erreicht ist
//         let coronii: CoronaVirus = new CoronaVirus(1.0);
//         viruss.push(coronii);  //push den coronii in den viruss Array
//     }
//     console.log(viruss);
// }
// function createHuman(_nCorona: number): void {
//     for (let i: number = 0; i < _nCorona; i++) { //solange Humanzellen erzeugen, bis Anzahl in Klammer erreicht ist
//         let cell: HumanCells = new HumanCells(1.0);
//         viruss.push(cell);  //push den cell in den viruss Array
//     }
// }
// function createParticle(_nCorona: number): void {
//     for (let i: number = 0; i < _nCorona; i++) { //solange Partikel erzeugen, bis Anzahl in Klammer erreicht ist
//         let parti: Particles = new Particles(1.0);
//         partis.push(parti); //push die parti in den partis Array
//     }
// }
// function update(): void {
//     drawBackground(); //Background immer wieder neu erzeugen, sonst sieht man die "Spur" der Zellen 
//     for (let coronii of viruss) { //weist auf den coronii im Array "viruss" hin
//         coronii.move(1 / 80);   //weise der Coronazelle Bewegung zu mit "move"
//         coronii.draw();    //weise der Coronazelle die Selbstzeichnung zu mit "draw"
//     }
//     for (let cell of cells) { //weist auf den cell im Array "cells" hin
//         cell.move(1 / 100);  //weise der Humancell Bewegung zu mit "move"
//         cell.draw();      //weise der Humancell die Selbstzeichnung zu mit "draw"
//     }
//     for (let parti of partis) { //weist auf den parti im Array "partis" hin
//         parti.move(1 / 50);   //weise dem Partikel Bewegung zu mit "move"
//         parti.draw();  //weise dem Partikel die Selbstzeichnung zu mit "draw"
//     }
// }
//# sourceMappingURL=Main.js.map