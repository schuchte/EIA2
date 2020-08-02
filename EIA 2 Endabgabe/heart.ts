namespace Magical_Image {

    export class Heart extends Symbol { 

        constructor(_position?: Vector) {

            super(_position); 

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 25;
            this.rotation = 0;
            this.color = "black";
    
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public rotate(): void {
            
            this.rotation += 0.5; 
        }

        public draw(): void {

            crc2.resetTransform();
            crc2.save();
            crc2.scale(0.5, 0.5); 
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 70); 
            crc2.fillStyle = this.color;
          
            crc2.beginPath();
            crc2.moveTo(75, 40);
            crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
            crc2.closePath();
            crc2.fill();
            this.rotate();
            
            crc2.restore(); 
        }

    }}

