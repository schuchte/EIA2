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
            this.radius = 55;
            this.rotation = 0;
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
            this.color = "black";
        }
        rotate() {
            this.rotation += 0.5;
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.scale(0.7, 0.7);
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.rotate(this.rotation * Math.PI / 70);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(50, 50);
            Magical_Image.crc2.lineTo(100, 90);
            Magical_Image.crc2.lineTo(100, 10);
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
            this.rotate();
            Magical_Image.crc2.restore();
        }
    }
    Magical_Image.Triangle = Triangle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=triangle.js.map