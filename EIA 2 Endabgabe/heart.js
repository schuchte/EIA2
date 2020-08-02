"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Heart extends Magical_Image.Symbol {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Magical_Image.Vector(0, 0);
            this.radius = 25;
            this.rotation = 0;
            this.color = "black";
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
        }
        rotate() {
            this.rotation += 0.5;
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.scale(0.5, 0.5);
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.rotate(this.rotation * Math.PI / 70);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(75, 40);
            Magical_Image.crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            Magical_Image.crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            Magical_Image.crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            Magical_Image.crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            Magical_Image.crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            Magical_Image.crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
            this.rotate();
            Magical_Image.crc2.restore();
        }
    }
    Magical_Image.Heart = Heart;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=heart.js.map