"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Circle extends Magical_Image.Symbol {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Magical_Image.Vector(0, 0);
            this.radius = 25;
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
            this.color = "black";
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.scale(1, 1);
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            var centerX = Magical_Image.crc2.canvas.width / 2;
            var centerY = Magical_Image.crc2.canvas.height / 2;
            var radius = 25;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
            Magical_Image.crc2.restore();
        }
    }
    Magical_Image.Circle = Circle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=circle.js.map