namespace L11_Corona   {

    export abstract class Moveable { //Moveable wird als Superklasse erstellt

        public position: Vector; //wird auf alles andere übertragen (Partikel, Körperzelle etc.)
        public radius: number; 
        public velocity: Vector; //wird auf alles andere übertragen (Partikel, Körperzelle etc.)
        public size: number;


        public constructor(_position?: Vector) {

            // console.log("Moveable");
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.radius = 5;
            this.velocity = new Vector(0, 0);
            
        }

        public abstract draw (): void;

        public move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height; //damit Zellen im Canvas Element bleiben und links/ rechts sowie oben/unten immer wieder aufploppen

        }

    }
}