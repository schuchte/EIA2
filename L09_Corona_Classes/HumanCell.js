"use strict";
var L09_Corona;
(function (L09_Corona) {
    class HumanCells {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Corona.Vector(0, 0);
            this.velocity = new L09_Corona.Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
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
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L09_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "orange");
            L09_Corona.crc2.resetTransform();
            L09_Corona.crc2.translate(this.position.x, this.position.y);
            L09_Corona.crc2.fillStyle = gradient;
            L09_Corona.crc2.scale(this.size, this.size);
            L09_Corona.crc2.fill(particle);
            L09_Corona.crc2.restore();
        }
    }
    L09_Corona.HumanCells = HumanCells;
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=HumanCell.js.map