namespace Magical_Image {

    export class Circle extends Symbol { 

        public color: string;

        public constructor(_position?: Vector) {

            let color: string = "black";
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
            crc2.translate(this.position.x, this.position.y);

            var centerX = crc2.canvas.width / 2;
            var centerY = crc2.canvas.height / 2;
            var radius: number = 30;

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();
            crc2.lineWidth = 0;
            crc2.strokeStyle = "black";
            crc2.stroke();
        }

        public change(_timeslice: number): void {

         if (this.color == "black") {
             this.color = "red";
             crc2.fill();
            //  window.setInterval(this.change, 1000);
             
         } else if (this.color == "red") {
             this.color = "black";
             crc2.fill();
            //  window.setInterval(this.change, 1000)}
         
                 
         }}
        }

    

    }