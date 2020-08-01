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
            this.radius = 5;
            this.velocity = new Magical_Image.Vector(0, 0);
            this.velocity = Magical_Image.Vector.getRandom(5, 10);
        }
        draw() {
            Magical_Image.crc2.resetTransform();
            Magical_Image.crc2.save();
            Magical_Image.crc2.translate(this.position.x, this.position.y);
            Magical_Image.crc2.fillStyle = "black";
            Magical_Image.crc2.beginPath();
            Magical_Image.crc2.moveTo(75, 40);
            Magical_Image.crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            Magical_Image.crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            Magical_Image.crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            Magical_Image.crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            Magical_Image.crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            Magical_Image.crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
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
    }
    Magical_Image.Heart = Heart;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=heart.js.map