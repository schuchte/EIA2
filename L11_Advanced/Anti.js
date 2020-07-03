"use strict";
var L11_Corona;
(function (L11_Corona) {
    class AntiCell extends L11_Corona.Moveable {
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
            let AntiParticle = new Path2D();
            AntiParticle.moveTo(30, 200);
            AntiParticle.lineTo(30, 180);
            AntiParticle.lineTo(20, 165);
            AntiParticle.moveTo(30, 180);
            AntiParticle.lineTo(40, 165);
            AntiParticle.closePath();
            L11_Corona.crc2.resetTransform();
            L11_Corona.crc2.lineWidth = 3;
            L11_Corona.crc2.strokeStyle = "black";
            L11_Corona.crc2.translate(this.position.x, this.position.y);
            L11_Corona.crc2.scale(this.size, this.size);
            L11_Corona.crc2.stroke(AntiParticle);
            L11_Corona.crc2.restore();
        }
    }
    L11_Corona.AntiCell = AntiCell;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Anti.js.map