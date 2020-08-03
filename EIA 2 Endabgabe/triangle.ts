namespace Magical_Image {

    export class Triangle extends Symbol { 

        constructor(_position?: Vector) {

            super(_position); 
         
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
            this.radius = 55;
            this.rotation = 0; 

            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
            this.color = "black";
        }

        public rotate(): void {
            
            this.rotation += 0.5; 
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y); 
            crc2.rotate(this.rotation * Math.PI / 70); 
            crc2.scale(1.5, 1.5); 
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(0, 20);
            crc2.lineTo(-10, 20);
            crc2.lineTo(0, -20);
            crc2.lineTo(10, 20);
            crc2.lineTo(0, 20);
            crc2.fill();
            this.rotate(); 
            crc2.restore(); 
            
        }
    

}}