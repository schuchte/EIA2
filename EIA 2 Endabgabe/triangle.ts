namespace Magical_Image {

    export class Triangle extends Symbol { 

        constructor(_position?: Vector) {

            super(_position); 
    
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 5;
    
    
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public draw(): void {

            crc2.resetTransform();
            crc2.save();
            crc2.scale(0.9, 0.9); 

            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.moveTo(50, 50);
            crc2.lineTo(100, 90);
            crc2.lineTo(100, 10);
            crc2.fill();
        }



    }

}