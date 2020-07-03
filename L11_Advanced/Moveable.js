"use strict";
var L11_Corona;
(function (L11_Corona) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L11_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L11_Corona.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L11_Corona.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L11_Corona.crc2.canvas.height;
            if (this.position.x > (L11_Corona.crc2.canvas.width))
                this.position.x -= (L11_Corona.crc2.canvas.width);
            if (this.position.y > L11_Corona.crc2.canvas.height)
                this.position.y -= L11_Corona.crc2.canvas.height; //damit Zellen im Canvas Element bleiben und links/ rechts sowie oben/unten immer wieder aufploppen
        }
    }
    L11_Corona.Moveable = Moveable;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Moveable.js.map