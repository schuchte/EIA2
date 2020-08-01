"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Triangle extends Magical_Image.Symbol {
        constructor(_position) {
            super(_position);
            this.rotation = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Magical_Image.Vector(0, 0);
            this.radius = 25;
            this.color = "black";
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
        }
        rotate() {
            this.rotation += 0.5;
        }
        draw() {
            this.rotate();
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.scale(0.9, 0.9);
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.rotate(this.rotation * Math.PI / 70);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(50, 50);
            Magical_Image.crc2.lineTo(100, 90);
            Magical_Image.crc2.lineTo(100, 10);
            Magical_Image.crc2.fill();
        }
        change(_timeslice) {
            this.velocity.x = 60;
            this.velocity.y = 40;
            this.rotation += 0.5;
        }
    }
    Magical_Image.Triangle = Triangle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=triangle.js.map