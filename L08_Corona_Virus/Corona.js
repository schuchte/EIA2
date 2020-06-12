"use strict";
var L08_Corona_Virus;
(function (L08_Corona_Virus) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //positionen definieren von jedem Element
        //Funktionen um Elemente zu zeichnen MIT direkter Position 
        drawBackground();
        drawBlood();
        drawCell({ x: 200, y: 650 }, { x: 600, y: 650 });
        drawParticle({ x: 220, y: 650 }, { x: 500, y: 650 });
        drawCorona({ x: 440, y: 320 }, { x: 600, y: 500 });
        drawAnti({ x: 220, y: 400 }, { x: 250, y: 400 });
        drawKiller({ x: 100, y: 650 }, { x: 200, y: 300 });
    }
    function drawCell(_position, _size) {
        let nParticles = 40;
        let radiusParticle = 8;
        let CellParticle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        CellParticle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "orange");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(CellParticle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "peachpuff");
        gradient.addColorStop(1, "seashell");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawBlood() {
        crc2.beginPath();
        crc2.moveTo(200, 0);
        crc2.lineTo(200, crc2.canvas.height);
        crc2.lineTo(260, crc2.canvas.height);
        crc2.lineTo(260, 0);
        crc2.closePath();
        crc2.save();
        crc2.fillStyle = "HSLA(0, 100%, 50%, 0.7)";
        crc2.fill();
        crc2.strokeStyle = "darkred";
        crc2.stroke();
        crc2.restore();
    }
    function drawParticle(_position, _size) {
        let nParticles = 200;
        let radiusParticle = 2;
        let Particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        Particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 100%, 30%, 0.3)");
        gradient.addColorStop(1, "HSL(0, 100%, 30%, 0.3)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(Particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCorona(_position, _size) {
        let nParticles = 26;
        let radiusParticle = 10;
        let CoronaParticle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "lime");
        CoronaParticle.moveTo(50, 50);
        CoronaParticle.lineTo(55, 30);
        CoronaParticle.lineTo(60, 50);
        CoronaParticle.lineTo(80, 55);
        CoronaParticle.lineTo(60, 60);
        CoronaParticle.lineTo(55, 80);
        CoronaParticle.lineTo(50, 60);
        CoronaParticle.lineTo(30, 55);
        CoronaParticle.lineTo(50, 50);
        CoronaParticle.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(CoronaParticle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawKiller(_position, _size) {
        let nParticles = 15;
        let radiusParticle = 17;
        let KillerParticle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        KillerParticle.ellipse(0, 0, 15, 5, 0, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "purple");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(KillerParticle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawAnti(_position, _size) {
        let nParticles = 45;
        let radiusParticle = 9;
        let AntiParticle = new Path2D();
        AntiParticle.moveTo(30, 200);
        AntiParticle.lineTo(30, 180);
        AntiParticle.lineTo(20, 165);
        AntiParticle.moveTo(30, 180);
        AntiParticle.lineTo(40, 165);
        AntiParticle.closePath();
        crc2.stroke(AntiParticle);
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.stroke(AntiParticle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Corona_Virus || (L08_Corona_Virus = {}));
//# sourceMappingURL=Corona.js.map