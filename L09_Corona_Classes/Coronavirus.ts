namespace L09_Corona {

    export class CoronaVirus { //Klasse für den CoronaVirus

        position: Vector; //Position
        velocity: Vector; //Geschwindigkeit
        type: number;  //Typ
        size: number; //Größe

        constructor(_size: number, _position?: Vector) {
            
            if (_position)
                this.position = _position; //die _position die mitgegeben wird als Parameter ist this.position, also die position des Coronavirus
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 50); //eine zufällige Geschwindigkeit
            this.size = _size;  //die _size die mitgegeben wird als Parameter ist this.size, also die Größe des Coronavirus
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