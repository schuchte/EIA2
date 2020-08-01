namespace Magical_Image {

    export class Heart extends Symbol { 

        public color: string;

        constructor(_position?: Vector) {

            super(_position); 
    
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 25;
            this.color = "black";
    
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public draw(): void {

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(75, 40);
            crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
            crc2.fill();
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

        public change(_timeslice: number): void {

            this.velocity.x = 40;
            this.velocity.y = 40;
          
        
           }
   



    }}

