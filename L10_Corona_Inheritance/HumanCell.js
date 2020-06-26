"use strict";
var L10_Corona;
(function (L10_Corona) {
    class HumanCells extends L10_Corona.Moveable {
        constructor(_position) {
            super(_position); //ruft aus der Subklasse HumanCells den constructor _position der Superklasse Moveable auf 
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10_Corona.Vector(0, 0);
            this.velocity.set(0, 10);
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
            let radiusParticle = 9;
            let particle = new Path2D();
            let gradient = L10_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "red");
            L10_Corona.crc2.resetTransform();
            L10_Corona.crc2.translate(this.position.x, this.position.y);
            L10_Corona.crc2.fillStyle = gradient;
            L10_Corona.crc2.scale(this.size, this.size);
            L10_Corona.crc2.fill(particle);
            L10_Corona.crc2.restore();
        }
    }
    L10_Corona.HumanCells = HumanCells;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=HumanCell.js.map