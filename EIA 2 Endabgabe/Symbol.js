"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Symbol {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Magical_Image.Vector(0, 0);
            this.radius = 0;
            this.rotation = 0;
            this.velocity = new Magical_Image.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new Magical_Image.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Magical_Image.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Magical_Image.crc2.canvas.height;
            if (this.position.x > Magical_Image.crc2.canvas.width)
                this.position.x -= Magical_Image.crc2.canvas.width;
            if (this.position.y > Magical_Image.crc2.canvas.height)
                this.position.y -= Magical_Image.crc2.canvas.height;
        }
    }
    Magical_Image.Symbol = Symbol;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=Symbol.js.map