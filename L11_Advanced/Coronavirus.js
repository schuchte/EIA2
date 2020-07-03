"use strict";
var L11_Corona;
(function (L11_Corona) {
    class CoronaVirus extends L11_Corona.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L11_Corona.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        infect(_Cellposition) {
            this.Cellposition = new L11_Corona.Vector(0, 0);
            if (this.position == this.Cellposition) {
                let infected = true;
            }
            console.log("I am gonna infect this HumanCell");
        }
        move(_timeslice) {
            let offset = new L11_Corona.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Corona.crc2.canvas.height;
            if (this.position.x > L11_Corona.crc2.canvas.width)
                this.position.x -= L11_Corona.crc2.canvas.width;
            if (this.position.y > L11_Corona.crc2.canvas.height)
                this.position.y -= L11_Corona.crc2.canvas.height;
        }
        draw() {
            L11_Corona.crc2.resetTransform();
            L11_Corona.crc2.save();
            L11_Corona.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 8; i++) {
                L11_Corona.crc2.beginPath();
                L11_Corona.crc2.moveTo(50, 50);
                L11_Corona.crc2.lineTo(55, 30);
                L11_Corona.crc2.lineTo(60, 50);
                L11_Corona.crc2.lineTo(80, 55);
                L11_Corona.crc2.lineTo(60, 60);
                L11_Corona.crc2.lineTo(55, 80);
                L11_Corona.crc2.lineTo(50, 60);
                L11_Corona.crc2.lineTo(30, 55);
                L11_Corona.crc2.lineTo(50, 50);
                L11_Corona.crc2.fillStyle = "lime";
                L11_Corona.crc2.strokeStyle = "black";
                L11_Corona.crc2.lineWidth = 0.5;
                L11_Corona.crc2.fill();
                L11_Corona.crc2.stroke();
                L11_Corona.crc2.closePath();
            }
        }
    }
    L11_Corona.CoronaVirus = CoronaVirus;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Coronavirus.js.map