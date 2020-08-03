"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Star extends Magical_Image.Symbol {
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
            // crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.scale(0.3, 0.3);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.rotate(this.rotation * Math.PI / 70);
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(108, 0.0);
            Magical_Image.crc2.lineTo(141, 70);
            Magical_Image.crc2.lineTo(218, 78.3);
            Magical_Image.crc2.lineTo(162, 131);
            Magical_Image.crc2.lineTo(175, 205);
            Magical_Image.crc2.lineTo(108, 170);
            Magical_Image.crc2.lineTo(41.2, 205);
            Magical_Image.crc2.lineTo(55, 131);
            Magical_Image.crc2.lineTo(1, 78);
            Magical_Image.crc2.lineTo(75, 68);
            Magical_Image.crc2.lineTo(108, 0);
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
            this.rotate();
            Magical_Image.crc2.restore();
        }
    }
    Magical_Image.Star = Star;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=star.js.map