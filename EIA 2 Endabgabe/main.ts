namespace Magical_Image {
    
    export let crc2: CanvasRenderingContext2D; 

    let url: string = "https://fliegendesmonster.herokuapp.com";

    let mainCanvas: HTMLCanvasElement; 
    let saveButton: HTMLButtonElement; 
    let okayButton: HTMLButtonElement;
    let deleteButton: HTMLButtonElement;
    let backgroundColor: HTMLFieldSetElement;
    let velocity: HTMLButtonElement;
    let form: HTMLFieldSetElement;
    let symbols: HTMLFieldSetElement;
    let figures: Symbol[] = [];
    let SafeMagicalImage: string[] = []; 
    let SafeBackgroundColor: string;
    let backgroundImage: ImageData; 
    let deleteTitle: HTMLButtonElement;

    let dragDrop: boolean = false;
    let objectDragDrop: Symbol;
   
    
    window.addEventListener("load", handleLoad);

    async function handleLoad(_event: Event): Promise<void> {

        //let response: Response = await fetch("HouseData.json"); //(await) warten bis fetch die Daten von HouseData.json hat
        //let offer: string = await response.text(); //text() liefert mir nicht direkt einen string, sondern nur die Promise einen string zu liefern, wenn sie die Daten hat (solage warten ->await)
        //let data: Data = JSON.parse(offer); //JSON.prse wandelt den offer- string in ein Objekt um

        form = <HTMLFieldSetElement>document.querySelector("fieldset#size");
        backgroundColor = <HTMLFieldSetElement>document.querySelector("fieldset#color");
        symbols = <HTMLFieldSetElement>document.querySelector("fieldset#symbol");
        velocity = <HTMLButtonElement>document.querySelector("button#velocity");
        mainCanvas = <HTMLCanvasElement> document.querySelector("canvas"); 
        crc2 = <CanvasRenderingContext2D>mainCanvas.getContext("2d"); 
        deleteButton = <HTMLButtonElement>document.querySelector("button#deleteimg");
        saveButton = <HTMLButtonElement>document.querySelector("button#saveimg"); 
        okayButton = <HTMLButtonElement>document.querySelector("button#OK");
        deleteTitle = <HTMLButtonElement>document.querySelector("button#deletetitle");

        form.addEventListener("click", chooseCanvas); 
        velocity.addEventListener("click", Colorchange);
        backgroundColor.addEventListener("click", chooseBackground);
        deleteButton.addEventListener("click", clearCanvas); 
        okayButton.addEventListener("click", pushTitle);
        saveButton.addEventListener("click", saveImage); 
        deleteTitle.addEventListener("click", cancelTitle);
        chooseBackground(_event);
        setInterval(animate, 100); 
        mainCanvas.addEventListener("dblclick", deleteSymbol);
        document.addEventListener("click", drawSymbol);

        mainCanvas.addEventListener("mousedown", pickSymbol);
        mainCanvas.addEventListener("mouseup", placeSymbol);
        mainCanvas.addEventListener("mousemove", dragSymbol);

    }


    function pickSymbol(_event: MouseEvent): void {
        console.log("I was picked")

        dragDrop = true;

        let mousePosY: number = _event.clientY; //Mouseposition 
        let mousePosX: number = _event.clientX;
        let canvasRect: ClientRect | DOMRect = mainCanvas.getBoundingClientRect(); //

        //Client ist die Maus

        let offsetX: number = mousePosX - canvasRect.left; //Symbolposition (x,y)
        let offsetY: number = mousePosY - canvasRect.top;

        //ist da ein Objekt an der Stelle

        for (let figur of figures) { //wenn für die Variavle Symbol von figures  was gefunden wurde

            if (figur.position.x - figur.radius < offsetX && //
                figur.position.x + figur.radius > offsetX &&
                figur.position.y - figur.radius < offsetY &&
                figur.position.y + figur.radius > offsetY) {
                console.log(figur);

                let index: number = figures.indexOf(figur);
                figures.splice(index, 1); //Symbol soll aus Array gelöscht werden durch splice
                objectDragDrop = figur; //das Symbol wird als objectDragDrop gespeichert
            }
        }
    }

    function placeSymbol(_event: MouseEvent): void {
        console.log("I was placed");

        if (dragDrop == true) { //Dragdrop true -->Dragdrop passiert noch  
            dragDrop = false; //dragdrop auf false setzen weil Dragdrop enden soll 
            figures.push(objectDragDrop); //dragdropobjekt soll wieder in das ursprüngliche Array gepusht werden
        }

    }

    function dragSymbol(_event: MouseEvent): void {
        console.log("I was dragged");

         //let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        if (dragDrop == true) {
         objectDragDrop.position.x = _event.clientX - mainCanvas.getBoundingClientRect().left; //ObjectDragdrop mit der position x und y soll dem ClientCursor folgen, solange er im Canvas ist -->get BoundinClientRect left und top
         objectDragDrop.position.y = _event.clientY - mainCanvas.getBoundingClientRect().top;
        }
    }


    function cancelTitle(): void {
    let note: HTMLDivElement = <HTMLDivElement>document.querySelector("div#showtitle");

    note.innerText = "";


    }

    async function saveImage(_event: MouseEvent): Promise<void> {

        let titles: HTMLDivElement = <HTMLDivElement>document.querySelector("div#savedimages");
        let note: HTMLDivElement = <HTMLDivElement>document.querySelector("div#showtitle");
        titles.innerHTML = "  " + note.innerText;
    
        console.log(note.innerText);

        let Picturedata: string = note.innerText;
        console.log(Picturedata);

        if (Picturedata != null) {
  
                SafeMagicalImage.push(mainCanvas.width.toString(), mainCanvas.height.toString());
                SafeMagicalImage.push(SafeBackgroundColor);
            
                for (let figur of figures) {
                    SafeMagicalImage.push(Math.floor(figur.position.x).toString(), Math.floor(figur.position.y).toString());
    
                    if (figur instanceof Triangle) {
                        SafeMagicalImage.push("triangle");
                    }
    
                    if (figur instanceof Star) {
                        SafeMagicalImage.push("star");
                    }
    
                    if (figur instanceof Circle) {
                        SafeMagicalImage.push("circle");
                    }
    
                    if (figur instanceof Heart) {
                        SafeMagicalImage.push("heart");
 
                    }
                }
    
            }
    
        let dataServer: string = JSON.stringify(SafeMagicalImage); //wandelt Array um, damit der Server es lesen kann 
        let query: URLSearchParams = new URLSearchParams(dataServer);
        let response: Response = await fetch(url + "?safeImage&name=" + Picturedata + "&" + query.toString()); 
        let texte: string = await response.text();
        console.log(texte);
        console.log(Picturedata);
        alert("Your Image with the " +  Picturedata +  "  "   +  "has been saved!");
    
        }
    

    function pushTitle(_event: MouseEvent): void {
        
        let input: HTMLInputElement = <HTMLInputElement>document.querySelector("input#title1");
        console.log(input.value);
        let note: HTMLDivElement = <HTMLDivElement>document.querySelector("div#showtitle");
        note.innerHTML = "<p><strong> Title " +  "  :  " + input.value;
        input.value = "";

        SafeMagicalImage.push(input.value);
        
         

    }


    function Symbolcolor(): void {

        var Color = prompt("Enter the color of your Symbol");

        for (let Symbol of figures) {

            if (Color != null && Symbol instanceof Heart) 
            Symbol.color = Color;

            else if (Color != null && Symbol instanceof Triangle)
            Symbol.color = Color;

            else if (Color != null && Symbol instanceof Circle)
            Symbol.color = Color;

            else if (Color != null && Symbol instanceof Star)
            Symbol.color = Color;
        
        }               
    }

    function Colorchange(_event: Event): void  {

        for (let Symbol of figures) {

            if (Symbol instanceof Star)
            Symbol.change(2);

            else if (Symbol instanceof Heart)
            Symbol.change(3)
            
        }               
    }

        

    function deleteSymbol(_event: MouseEvent): void {

        for (let Symbol of figures){ 

        let index: number = figures.indexOf(Symbol);
        figures.splice(index, 1);
        console.log("gelöscht");
                
            }
       
    }



    function chooseCanvas(_event: Event): void {
 
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

    function chooseBackground (_event: Event): void {

        let target: HTMLFieldSetElement = <HTMLFieldSetElement>_event.target; 
        let id: string = target.id;
        

        switch (id) {
            
            case "red":
                crc2.fillStyle = "red"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "red";

         

                break;
            case "yellow":
                crc2.fillStyle = "yellow"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "yellow";
              
                    
                break; 
            case "blue":
                crc2.fillStyle = "blue"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                SafeBackgroundColor = "blue"; 
              
                        
                
                break; 
            case "orange":
           
                crc2.fillStyle = "orange"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "orange";
      
                                                
                break; 

            case "green":
           
                crc2.fillStyle = "green"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "green";
             
                                                        
                break; 

                case "pink":
           
                crc2.fillStyle = "pink"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "pink";
               
                                                        
                break; 
                case "white":
           
                crc2.fillStyle = "white"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "white";
             
                                                        
                break; 

                case "black":
           
                crc2.fillStyle = "black"; 
                crc2.fill(); 
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
                SafeBackgroundColor = "black";
    
                                                        
                break; 

        }

        backgroundImage = crc2.getImageData(0, 0, mainCanvas.width, mainCanvas.height);

    }


    export function drawSymbol(_event: MouseEvent): void {

        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        let id: string = target.id;
        let x: number = 50; 
        let y: number = 50; 


        switch (id) {
            case "star":
        
                let positionStar: Vector = new Vector(x, y);
                let star:  Star = new Star(positionStar); 
                
                star.draw();
                figures.push(star);
                Symbolcolor();
                        

                break;
            case "circle":

               
                let positionCircle: Vector = new Vector(x, y);
                let circle:  Circle = new Circle(positionCircle);
                circle.draw();
                figures.push(circle);
                Symbolcolor();
                
              
                
                break; 
            case "heart":
            
                let positionHeart: Vector = new Vector(x, y);
                let heart:  Heart = new Heart(positionHeart);
                heart.draw();
                figures.push(heart);
                Symbolcolor();
                
                
                break; 
            case "triangle":
                    
                let position: Vector = new Vector(x, y);
                let triangle:  Triangle = new Triangle(position);
                triangle.draw();
                figures.push(triangle); 
                Symbolcolor();  
                break; 

        }
    }



    function animate(_event: MouseEvent): void {

        crc2.putImageData(backgroundImage, 0, 0);

        for (let Symbol of figures) {
            if (Symbol instanceof Heart) 
            Symbol.move(1 / 10); 
            else if (Symbol instanceof Triangle)
            Symbol.move(1 / 10); 
            else if (Symbol instanceof Circle)
            Symbol.move(1 / 10);
            else if (Symbol instanceof Star)
            Symbol.move (1 / 10);
            Symbol.draw(crc2); 
        }

        if (dragDrop == true) {
            objectDragDrop.draw(crc2);
        }
    }

    function clearCanvas(): void {

       crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);   
       figures = []; 
       crc2.save(); 

       let clearBackground: boolean = false;
       if (clearBackground == false) {

       crc2.fillStyle = "white"; 
       crc2.fill(); 
       crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
       crc2.restore();
     }
       crc2.save();
    }


    
 
    

}