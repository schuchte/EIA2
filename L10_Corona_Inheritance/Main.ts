namespace L10_Corona {

    window.addEventListener("load", handleLoad);

    // let viruss: CoronaVirus[] = []; //Array für CoronaVirus
    // let cells: HumanCells[] = []; //Array für HumanCells
    // let partis: Particles[] = []; //Array für Particles

    let cells: Moveable [] = []; 

    export let crc2: CanvasRenderingContext2D; //Definieren von crc2


    function handleLoad(_event: Event): void {
     
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground(); //Hintergrund wird kreiert
        // createCorona(26); //Coronaviren werden kreiert (in der Klammer steht die Anzahl als Parameter)
        window.setInterval(update, 25);  //die Funktion update wird alle 25 millisekunden aufgerufen
        // createHuman(40); //Körperzelle wird kreiert (in der Klammer steht die Anzahl als Parameter)
        // createParticle(200); //Partikel wird kreirt (in der Klammer steht die Anzahl als Parameter)
        createCells();
    }

    
    function drawBackground(): void {
       
        crc2.resetTransform();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "peachpuff");
        gradient.addColorStop(1, "seashell" );

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function createCells(): void {

        let x: number;
        let y: number;
        let nParticles: number = 50;
        let nCells: number = 10;

         //Particles
        for (let i: number = 0; i < nParticles; i++) {

            x = (Math.random() * crc2.canvas.width);
            y = (Math.random() * crc2.canvas.height);

            let position: Vector = new Vector(x, y);
            let particle: Particles = new Particles(position);
            particle.draw();
            cells.push(particle);
        }

        //HumanCells
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);
            let position: Vector = new Vector(x, y);
            let humancell: HumanCells = new HumanCells(position);
            humancell.draw();
            cells.push(humancell);
        }

          //coronaVirus
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let corona: CoronaVirus = new CoronaVirus(position);
            corona.draw();
            cells.push(corona);
        }
    }

    function update(): void {

       
            drawBackground();
    
            for (let Moveable of cells) {
                if (Moveable instanceof CoronaVirus)
                    Moveable.move(1 / 20); 
                else if (Moveable instanceof HumanCells)
                    Moveable.move(1 / 20); 
                else if (Moveable instanceof Particles)
                    Moveable.move (1 / 80 ); 
                Moveable.draw(); 
            }
}
}
















    // function createCorona(_nCorona: number): void {

    //     for (let i: number = 0; i < _nCorona; i++) { //solange Coronazellen erzeugen, bis Anzahl in Klammer erreicht ist

    //         let coronii: CoronaVirus = new CoronaVirus(1.0);
    //         viruss.push(coronii);  //push den coronii in den viruss Array
    //     }

    //     console.log(viruss);
    // }

    // function createHuman(_nCorona: number): void {

    //     for (let i: number = 0; i < _nCorona; i++) { //solange Humanzellen erzeugen, bis Anzahl in Klammer erreicht ist

    //         let cell: HumanCells = new HumanCells(1.0);
    //         viruss.push(cell);  //push den cell in den viruss Array
    //     }

    // }

    // function createParticle(_nCorona: number): void {

    //     for (let i: number = 0; i < _nCorona; i++) { //solange Partikel erzeugen, bis Anzahl in Klammer erreicht ist

    //         let parti: Particles = new Particles(1.0);
    //         partis.push(parti); //push die parti in den partis Array
    //     }
    // }


    // function update(): void {

    //     drawBackground(); //Background immer wieder neu erzeugen, sonst sieht man die "Spur" der Zellen 

    //     for (let coronii of viruss) { //weist auf den coronii im Array "viruss" hin
    //         coronii.move(1 / 80);   //weise der Coronazelle Bewegung zu mit "move"
    //         coronii.draw();    //weise der Coronazelle die Selbstzeichnung zu mit "draw"
    //     }

    //     for (let cell of cells) { //weist auf den cell im Array "cells" hin
    //         cell.move(1 / 100);  //weise der Humancell Bewegung zu mit "move"
    //         cell.draw();      //weise der Humancell die Selbstzeichnung zu mit "draw"
    //     }

    //     for (let parti of partis) { //weist auf den parti im Array "partis" hin
    //         parti.move(1 / 50);   //weise dem Partikel Bewegung zu mit "move"
    //         parti.draw();  //weise dem Partikel die Selbstzeichnung zu mit "draw"
    //     }
    // }
