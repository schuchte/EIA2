namespace Magical_Image {

    let forms: Symbol [] = [];

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {

        console.log("hello my friend");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //let Delete: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#deleteimg"); 
        //let Save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveimg");
        let size: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#size");
        let color: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#color");
        let symbol: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#symbol");

        size.addEventListener("click", chooseSize);
        color.addEventListener("click", chooseColor);
        symbol.addEventListener("click", chooseSymbol);
        
 
    }

    // function drawBackground(): void {
    //     crc2.resetTransform();

    //     // let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    //     // gradient.addColorStop(0, "white");
    //     // gradient.addColorStop(0.5, "mistyrose");
    //     // gradient.addColorStop(1, "crimson" );

    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // }

  
    function animation(): void {

        for (let Symbol of forms)  { 

        if (Symbol instanceof Heart)
            Symbol.move(1 / 30);
        Symbol.draw(); 
                
        if (Symbol instanceof Star)
                 Symbol.move(1 / 30); 
        Symbol.draw();
          
        }
    }

    export function colorchange(): void {

        for (let Symbol of forms) {

            if (Symbol instanceof Circle)
            Symbol.change(1/ 50);

        }}


    function chooseSymbol (_event: Event) {
        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        let id: string = target.id;
        crc2.save();
       

        switch (id) {

            case "circle":

                let x: number = 100; 
                let y: number = -40; 
                let position: Vector = new Vector(x, y);

                let circle: Circle = new Circle(position);
                circle.draw();
                forms.push(circle);
                window.setInterval(colorchange, 1000);

                break;

                case "heart":

                let x1: number = 5; 
                let y1: number = -10; 
                let position1: Vector = new Vector(x1, y1);

                let heart: Heart = new Heart(position1);
                heart.draw();
                forms.push(heart);
                window.setInterval(animation, 40);

                break;

                case "star":

                let x2: number = 20; 
                let y2: number = 180; 
                let position2: Vector = new Vector(x2, y2);

                let star: Star = new Star(position2);
                star.draw();
                forms.push(star);
                window.setInterval(animation, 40);
                
                break;

                case "triangle":

                let x3: number = 250; 
                let y3: number = 330; 
                let position3: Vector = new Vector(x3, y3);

                let triangle: Triangle = new Triangle(position3);
                triangle.draw();
                forms.push(triangle);
                
                break;
        
        }
    }


    
    export function chooseColor(_event: Event) {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        let id: string = target.id;

        switch (id) {
            case "red":
                crc2.fillStyle = "red";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                
                break;

            case "yellow":
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                break;
        
            case "blue":
                    crc2.fillStyle = "blue";
                    crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            
                    break;

            case "orange":
                    crc2.fillStyle = "rgb(255, 115, 0)";
                    crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    break;

            case "green":
                    crc2.fillStyle = "lime";
                    crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    break;

            case "pink":
                    crc2.fillStyle = "rgb(255, 56, 89)";
                    crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    break;

            case "white":
                        crc2.fillStyle = "white";
                        crc2.fill();
                        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                        break;

            case "black":
                            crc2.fillStyle = "black";
                            crc2.fill();
                            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                            break;
        }
    }


    function chooseSize(_event: Event): void {
        console.log("here i am bitch");

        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {
            case "small": 
                  crc2.canvas.width = 350;
                  crc2.canvas.height = 400;
                  break;
        
            case "medium":
                 crc2.canvas.width = 450;
                 crc2.canvas.height = 400;
                 break;

            case "big":
                 crc2.canvas.width = 550;
                 crc2.canvas.height = 400;
                 break;

    }
}
}