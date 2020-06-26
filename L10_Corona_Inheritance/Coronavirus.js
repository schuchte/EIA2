"use strict";
var L10_Corona;
(function (L10_Corona) {
    class CoronaVirus extends L10_Corona.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10_Corona.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        move(_timeslice) {
            let offset = new L10_Corona.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Corona.crc2.canvas.height;
            if (this.position.x > L10_Corona.crc2.canvas.width)
                this.position.x -= L10_Corona.crc2.canvas.width;
            if (this.position.y > L10_Corona.crc2.canvas.height)
                this.position.y -= L10_Corona.crc2.canvas.height;
        }
        draw() {
            L10_Corona.crc2.resetTransform();
            L10_Corona.crc2.save();
            L10_Corona.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 8; i++) {
                L10_Corona.crc2.beginPath();
                L10_Corona.crc2.moveTo(50, 50);
                L10_Corona.crc2.lineTo(55, 30);
                L10_Corona.crc2.lineTo(60, 50);
                L10_Corona.crc2.lineTo(80, 55);
                L10_Corona.crc2.lineTo(60, 60);
                L10_Corona.crc2.lineTo(55, 80);
                L10_Corona.crc2.lineTo(50, 60);
                L10_Corona.crc2.lineTo(30, 55);
                L10_Corona.crc2.lineTo(50, 50);
                L10_Corona.crc2.fillStyle = "lime";
                L10_Corona.crc2.strokeStyle = "black";
                L10_Corona.crc2.lineWidth = 0.4;
                L10_Corona.crc2.fill();
                L10_Corona.crc2.stroke();
                L10_Corona.crc2.closePath();
            }
        }
    }
    L10_Corona.CoronaVirus = CoronaVirus;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=Coronavirus.js.map