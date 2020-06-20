"use strict";
var L09_Corona;
(function (L09_Corona) {
    class CoronaVirus {
        constructor(_size, _position) {
            if (_position)
                this.position = _position; //die _position die mitgegeben wird als Parameter ist this.position, also die position des Coronavirus
            else
                this.position = new L09_Corona.Vector(0, 0);
            this.velocity = new L09_Corona.Vector(0, 0);
            this.velocity.random(20, 50); //eine zufällige Geschwindigkeit
            this.size = _size; //die _size die mitgegeben wird als Parameter ist this.size, also die Größe des Coronavirus
        }
        move(_timeslice) {
            let offset = new L09_Corona.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Corona.crc2.canvas.height;
            if (this.position.x > L09_Corona.crc2.canvas.width)
                this.position.x -= L09_Corona.crc2.canvas.width;
            if (this.position.y > L09_Corona.crc2.canvas.height)
                this.position.y -= L09_Corona.crc2.canvas.height;
        }
        draw() {
            L09_Corona.crc2.resetTransform();
            L09_Corona.crc2.save();
            L09_Corona.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 8; i++) {
                L09_Corona.crc2.beginPath();
                L09_Corona.crc2.moveTo(50, 50);
                L09_Corona.crc2.lineTo(55, 30);
                L09_Corona.crc2.lineTo(60, 50);
                L09_Corona.crc2.lineTo(80, 55);
                L09_Corona.crc2.lineTo(60, 60);
                L09_Corona.crc2.lineTo(55, 80);
                L09_Corona.crc2.lineTo(50, 60);
                L09_Corona.crc2.lineTo(30, 55);
                L09_Corona.crc2.lineTo(50, 50);
                L09_Corona.crc2.fillStyle = "lime";
                L09_Corona.crc2.strokeStyle = "black";
                L09_Corona.crc2.lineWidth = 0.4;
                L09_Corona.crc2.fill();
                L09_Corona.crc2.stroke();
                L09_Corona.crc2.closePath();
            }
        }
    }
    L09_Corona.CoronaVirus = CoronaVirus;
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=Coronavirus.js.map