namespace L10_Corona {


    export class KillerCell extends Moveable {

        type: number;
        size: number;

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

            let radiusParticle: number = 10;
            let KillerParticle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            KillerParticle.ellipse(0, 0, 15, 5, 0, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "navy");

            crc2.resetTransform();
    
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            crc2.scale(this.size, this.size);

            crc2.fill(KillerParticle);

            crc2.restore();
    


    }}
}