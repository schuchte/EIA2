
namespace L10_Corona  {

        export class CoronaVirus extends Moveable { //die Superklasse Moveable wird um die Subklasse CoronaVirus erweitert
    
        
            type: number;  //Typ
            size: number; //Größe
    
            constructor(_position?: Vector) {
                super(_position); 


                if (_position)
                this.position = _position.copy();
                else 
                this.velocity = new Vector(0, 0);
    
                this.radius = 5;
    
    
                this.velocity = new Vector(0, 0);
                this.velocity.random(5, 10);
            }
    
            move(_timeslice: number): void {
               
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
    
            draw(): void {
    
                crc2.resetTransform();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                
                for (let i: number = 0; i < 8; i++) {
                    
                    crc2.beginPath();
                    crc2.moveTo(50, 50);
                    crc2.lineTo(55, 30);
                    crc2.lineTo(60, 50);
    
                    crc2.lineTo(80, 55);
                    crc2.lineTo(60, 60);
    
                    crc2.lineTo(55, 80);
                    crc2.lineTo(50, 60);
    
                    crc2.lineTo(30, 55);
                    crc2.lineTo(50, 50);
            
                    crc2.fillStyle = "lime";
                    crc2.strokeStyle = "black";
                    crc2.lineWidth = 0.4;
                
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                }
    
            }
        }
    
    }

