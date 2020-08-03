namespace Magical_Image { 

        export abstract class Symbol {
    
            public position: Vector;
            public radius: number; 
            public velocity: Vector;
            public color: string;
            public rotation: number; 
         
    
            constructor(_position?: Vector) {
    
                // console.log("Moveable");
                if (_position)
                this.position = _position.copy();
                else 
                this.velocity = new Vector(0, 0);
    
                this.radius = 0;
                this.rotation = 0; 
                this.velocity = new Vector(0, 0);
                
            }
    
            public  abstract draw(_crc: CanvasRenderingContext2D): void;

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
    

       
    }}


