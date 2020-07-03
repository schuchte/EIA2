namespace L11_Corona  {

    export class Vector {
      public  x: number; 
      public y: number; 

        public constructor(_x: number, _y: number) {
            this.x = _x; 
            this.y = _y; 
        }

        public set(_x: number, _y: number): void {
            this.x = _x; 
            this.y = _y; 
        }

        public add(_addend: Vector): void {

            this.x += _addend.x; 
            this.y += _addend.y; 
        }

        public scale(_scale: number): void {
            this.x *= _scale; 
            this.y *= _scale; 
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        
        }

        public copy(): Vector {
            return new Vector(this.x, this.y); 
        }
    }



}