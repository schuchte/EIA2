namespace Magical_Image {

    export class Circle extends Symbol { 

        public constructor(_position?: Vector) {

            super(_position); 
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 25;
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
            this.color = "black";
        }

        public draw(): void {
            
            crc2.resetTransform();
            crc2.save();
            crc2.scale(1, 1); 
            crc2.translate(this.position.x, this.position.y);

            var centerX = crc2.canvas.width / 2;
            var centerY = crc2.canvas.height / 2;
            var radius: number = 25;

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();

            
            crc2.restore(); 
            
        }

    
        }
    }