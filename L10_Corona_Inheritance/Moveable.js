"use strict";
var L10_Corona;
(function (L10_Corona) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_Corona.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10_Corona.Vector(0, 0);
        }
        draw() {
            //console.log("Moveable move"); 
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L10_Corona.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10_Corona.crc2.canvas.height;
            if (this.position.x > (L10_Corona.crc2.canvas.width))
                this.position.x -= (L10_Corona.crc2.canvas.width);
            if (this.position.y > L10_Corona.crc2.canvas.height)
                this.position.y -= L10_Corona.crc2.canvas.height;
        }
    }
    L10_Corona.Moveable = Moveable;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=Moveable.js.map