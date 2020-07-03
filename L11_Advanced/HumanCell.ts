namespace L11_Corona   {


    export class HumanCells extends Moveable { //extends erweitert die Superklasse Moveable um die Subklasse HumanCells

        public infected: boolean = false;

        public constructor( _position?: Vector) {
    
        super(_position);  //ruft aus der Subklasse HumanCells den constructor _position der Superklasse Moveable auf 

        if (_position)
        this.position = _position.copy();
        else 
        this.velocity = new Vector(0, 0);

        this.radius = 5;


        this.velocity = new Vector(0, 0);
        this.velocity.set(0, 10);
        }

        public move(_timeslice: number): void {

            if (this.infected == true) {
                super.move(_timeslice * 0);
            } else {
                super.move(_timeslice);
           
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

        }}

            public draw(): void {
            if (this.infected == true) {
                this.drawinfected();
            } else {
                this.drawhealthy();
            }
        } 
        
        public isHit(_posvirus: Vector, _radiusvirus: number): boolean {

            let distX: number = this.position.x - _posvirus.x;
            let distY: number = this.position.y - _posvirus.y;
            let rSum: number = _radiusvirus + this.radius + 10;
            let distance: number = (distX * distX) + (distY * distY);

            if (distance <= rSum * rSum) {
                return true;
            } else {
                return false;
            }

    }

        private drawinfected(): void {

            let radiusParticle: number = 9;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "hsl(360,0%,0%, 0.5)");

            crc2.resetTransform();

            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = gradient;
            crc2.strokeStyle = "hsl(360,0%,0%, 0.5)";

            crc2.scale(this.size, this.size);
                 
            
            crc2.fill(particle);
            crc2.stroke(particle);
            crc2.restore();

        }


        private drawhealthy(): void {

            let radiusParticle: number = 9;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "red");

            crc2.resetTransform();

            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = gradient;
            crc2.strokeStyle = "red";

            crc2.scale(this.size, this.size);
                
            
            crc2.fill(particle);
            crc2.stroke(particle);
            crc2.restore();

        }

      }}
