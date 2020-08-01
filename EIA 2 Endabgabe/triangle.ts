namespace Magical_Image {

    export class Triangle extends Symbol { 

        public rotation: number; 
        public color: string;

        constructor(_position?: Vector) {

            super(_position); 
            this.rotation = 0; 

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 25;
            this.color = "black";
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public rotate(): void {
            
            this.rotation += 0.5; 
        }

        public draw(): void {

            this.rotate(); 
            crc2.resetTransform();
            crc2.save();
            crc2.scale(0.9, 0.9); 

            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 70); 

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(50, 50);
            crc2.lineTo(100, 90);
            crc2.lineTo(100, 10);
            crc2.fill();
        }

        
        public change(_timeslice: number): void {

            this.velocity.x = 60;
            this.velocity.y = 40;
            this.rotation += 0.5; 
        
           }
   

    }

}