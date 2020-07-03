"use strict";
var L11_Corona;
(function (L11_Corona) {
    class Particles extends L11_Corona.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L11_Corona.Vector(0, 0);
            this.velocity.set(0, -20);
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
            let radiusParticle = 1.8;
            let particle = new Path2D();
            let gradient = L11_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSL(0, 100%, 30%, 0.2)");
            gradient.addColorStop(1, "HSL(0, 100%, 30%, 0.3)");
            L11_Corona.crc2.resetTransform();
            L11_Corona.crc2.translate(this.position.x, this.position.y);
            L11_Corona.crc2.fillStyle = gradient;
            L11_Corona.crc2.scale(this.size, this.size);
            L11_Corona.crc2.fill(particle);
            L11_Corona.crc2.restore();
        }
    }
    L11_Corona.Particles = Particles;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Particle.js.map