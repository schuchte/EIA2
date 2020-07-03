namespace L11_Corona  {

    export class AntiCell extends Moveable {

        public constructor(_position?: Vector) {
            super(_position); 

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.radius = 5;


            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        public move(_timeslice: number): void {
        
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }


        public draw(): void {

            let AntiParticle: Path2D = new Path2D();
           
    
            AntiParticle.moveTo(30, 200);
            AntiParticle.lineTo(30, 180);
            AntiParticle.lineTo(20, 165);
            AntiParticle.moveTo(30, 180);
            AntiParticle.lineTo(40, 165);
            
            AntiParticle.closePath();
            crc2.resetTransform();
            crc2.lineWidth = 3;
            crc2.strokeStyle = "black";
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
         
            crc2.stroke(AntiParticle);  
            
            crc2.restore();

    
    }
    }
}