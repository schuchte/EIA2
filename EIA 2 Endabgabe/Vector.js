"use strict";
var Magical_Image;
(function (Magical_Image) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        static getRandom(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        scale(_scale) {
            this.x *= _scale;
            this.y *= _scale;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Magical_Image.Vector = Vector;
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=Vector.js.map