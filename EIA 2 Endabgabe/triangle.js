"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Triangle extends Magical_Image.Symbol {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Magical_Image.Vector(0, 0);
            this.radius = 5;
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.scale(0.9, 0.9);
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.fillStyle = "black";
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(50, 50);
            Magical_Image.crc2.lineTo(100, 90);
            Magical_Image.crc2.lineTo(100, 10);
            Magical_Image.crc2.fill();
        }
    }
    Magical_Image.Triangle = Triangle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=triangle.js.map