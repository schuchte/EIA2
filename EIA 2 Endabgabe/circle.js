"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Circle extends Magical_Image.Symbol {
        constructor(_position) {
            let color = "black";
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
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            var centerX = Magical_Image.crc2.canvas.width / 2;
            var centerY = Magical_Image.crc2.canvas.height / 2;
            var radius = 30;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
            Magical_Image.crc2.lineWidth = 0;
            Magical_Image.crc2.strokeStyle = "black";
            Magical_Image.crc2.stroke();
        }
        change(_timeslice) {
            if (this.color == "black") {
                this.color = "red";
                Magical_Image.crc2.fill();
                //  window.setInterval(this.change, 1000);
            }
            else if (this.color == "red") {
                this.color = "black";
                Magical_Image.crc2.fill();
                //  window.setInterval(this.change, 1000)}
            }
        }
    }
    Magical_Image.Circle = Circle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=circle.js.map