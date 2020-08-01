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
            this.radius = 5;
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
            this.color = "black";
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            var centerX = Magical_Image.crc2.canvas.width / 2;
            var centerY = Magical_Image.crc2.canvas.height / 2;
            var radius = 25;
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            Magical_Image.crc2.fillStyle = this.color;
            Magical_Image.crc2.closePath();
            Magical_Image.crc2.fill();
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
        change(_timeslice) {
            this.velocity.x = 40;
            this.velocity.y = 40;
        }
    }
    Magical_Image.Circle = Circle;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=circle.js.map