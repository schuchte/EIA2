namespace Magical_Image {

    export class Circle extends Symbol { 

        public color: string;

        public constructor(_position?: Vector) {

            super(_position); 
    
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
    
            this.radius = 5;
            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
            this.color = "black";
        }

        public draw(): void {
            

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            var centerX = crc2.canvas.width / 2;
            var centerY = crc2.canvas.height / 2;
            var radius: number = 25;

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = this.color;
            crc2.closePath();
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

         
        

    
        }
    }