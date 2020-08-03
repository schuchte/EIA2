"use strict";
var Magical_Image;
(function (Magical_Image) {
    let url = "https://fliegendesmonster.herokuapp.com";
    let mainCanvas;
    let saveButton;
    let okayButton;
    let deleteButton;
    let backgroundColor;
    let form;
    let symbols;
    let figures = [];
    let SafeMagicalImage = [];
    let SafeBackgroundColor;
    let backgroundImage;
    let deleteTitle;
    let dragDrop = false;
    let objectDragDrop;
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        form = document.querySelector("fieldset#size");
        backgroundColor = document.querySelector("fieldset#color");
        symbols = document.querySelector("fieldset#symbol");
        mainCanvas = document.querySelector("canvas");
        Magical_Image.crc2 = mainCanvas.getContext("2d");
        deleteButton = document.querySelector("button#deleteimg");
        saveButton = document.querySelector("button#saveimg");
        okayButton = document.querySelector("button#OK");
        deleteTitle = document.querySelector("button#deletetitle");
        form.addEventListener("click", chooseCanvas);
        backgroundColor.addEventListener("click", chooseBackground);
        deleteButton.addEventListener("click", clearCanvas);
        okayButton.addEventListener("click", pushTitle);
        saveButton.addEventListener("click", saveImage);
        deleteTitle.addEventListener("click", cancelTitle);
        document.addEventListener("click", drawSymbol);
        mainCanvas.addEventListener("dblclick", deleteSymbol);
        chooseBackground(_event);
        setInterval(animate, 100);
        mainCanvas.addEventListener("mousedown", pickSymbol);
        mainCanvas.addEventListener("mousemove", dragSymbol);
        mainCanvas.addEventListener("mouseup", placeSymbol);
    }
    function pickSymbol(_event) {
        console.log("I was picked");
        let mousePosY = _event.clientY; //Mouseposition 
        let mousePosX = _event.clientX;
        let canvasRect = mainCanvas.getBoundingClientRect(); //
        //Client ist die Maus
        let offsetX = mousePosX - canvasRect.left; //Symbolposition (x,y)
        let offsetY = mousePosY - canvasRect.top;
        //ist da ein Objekt an der Stelle
        for (let figur of figures) { //wenn für die Variavle Symbol von figures  was gefunden wurde
            if (figur.position.x - figur.radius < offsetX && //
                figur.position.x + figur.radius > offsetX &&
                figur.position.y - figur.radius < offsetY &&
                figur.position.y + figur.radius > offsetY) {
                console.log(figur);
                dragDrop = true;
                let index = figures.indexOf(figur);
                figures.splice(index, 1); //Symbol soll aus Array gelöscht werden durch splice
                objectDragDrop = figur; //das Symbol wird als objectDragDrop gespeichert
                return;
            }
        }
    }
    function placeSymbol(_event) {
        console.log("I was placed");
        if (dragDrop == true) { //Dragdrop true -->Dragdrop passiert noch  
            dragDrop = false; //dragdrop auf false setzen weil Dragdrop enden soll 
            figures.push(objectDragDrop); //dragdropobjekt soll wieder in das ursprüngliche Array gepusht werden
        }
    }
    function dragSymbol(_event) {
        console.log("I was dragged");
        if (dragDrop == true) {
            objectDragDrop.position.x = _event.clientX - mainCanvas.getBoundingClientRect().left; //ObjectDragdrop mit der position x und y soll dem ClientCursor folgen, solange er im Canvas ist -->get BoundinClientRect left und top
            objectDragDrop.position.y = _event.clientY - mainCanvas.getBoundingClientRect().top;
        }
    }
    function cancelTitle() {
        let note = document.querySelector("div#showtitle");
        note.innerText = "";
    }
    async function saveImage(_event) {
        let titles = document.querySelector("div#savedimages");
        let note = document.querySelector("div#showtitle");
        titles.innerHTML = "  " + note.innerText;
        console.log(note.innerText);
        let Picturedata = note.innerText;
        console.log(Picturedata);
        if (Picturedata != null) {
            SafeMagicalImage.push(mainCanvas.width.toString(), mainCanvas.height.toString());
            SafeMagicalImage.push(SafeBackgroundColor);
            for (let figur of figures) {
                SafeMagicalImage.push(Math.floor(figur.position.x).toString(), Math.floor(figur.position.y).toString());
                if (figur instanceof Magical_Image.Triangle) {
                    SafeMagicalImage.push("triangle");
                }
                if (figur instanceof Magical_Image.Star) {
                    SafeMagicalImage.push("star");
                }
                if (figur instanceof Magical_Image.Circle) {
                    SafeMagicalImage.push("circle");
                }
                if (figur instanceof Magical_Image.Heart) {
                    SafeMagicalImage.push("heart");
                }
            }
        }
        let dataServer = JSON.stringify(SafeMagicalImage); //wandelt Array in einen JSON string um, damit der Server es lesen kann 
        let query = new URLSearchParams(dataServer);
        let response = await fetch(url + "?safeImage&name=" + Picturedata + "&" + query.toString()); //(await) warten bis fetch die Daten von HouseData.json hat
        let texte = await response.text(); //text() liefert mir nicht direkt einen string, sondern nur die Promise einen string zu liefern, wenn sie die Daten hat (solage warten ->await)
        console.log(texte);
        console.log(Picturedata);
        alert("Your Image with the " + Picturedata + "  " + "has been saved!");
    }
    function pushTitle(_event) {
        let input = document.querySelector("input#title1");
        console.log(input.value);
        let note = document.querySelector("div#showtitle");
        note.innerHTML = "<p><strong> Title " + "  :  " + input.value;
        input.value = "";
        SafeMagicalImage.push(input.value);
    }
    function Symbolcolor() {
        let choosenSymbol = figures[figures.length - 1]; //das letzte Symbol das gepusht wurde in Array
        var Color = prompt("Enter the color of your Symbol");
        for (let Symbol of figures) {
            if (Color != null && Symbol instanceof Magical_Image.Heart)
                choosenSymbol.color = Color;
            //Symbol.color = Color
            else if (Color != null && Symbol instanceof Magical_Image.Triangle)
                choosenSymbol.color = Color;
            else if (Color != null && Symbol instanceof Magical_Image.Circle)
                choosenSymbol.color = Color;
            else if (Color != null && Symbol instanceof Magical_Image.Star)
                choosenSymbol.color = Color;
        }
    }
    function deleteSymbol(_event) {
        let mousePosY = _event.clientY;
        let mousePosX = _event.clientX;
        let canvasRect = mainCanvas.getBoundingClientRect();
        let offsetX = mousePosX - canvasRect.left;
        let offsetY = mousePosY - canvasRect.top;
        console.log(offsetX, offsetY);
        for (let figure of figures) {
            //symbol.position.x = mousePosX;
            //symbol.position.y = mousePosY;
            if (figure.position.x - figure.radius < offsetX &&
                figure.position.x + figure.radius > offsetX &&
                figure.position.y - figure.radius < offsetY &&
                figure.position.y + figure.radius > offsetY) {
                console.log(figure);
                let index = figures.indexOf(figure);
                figures.splice(index, 1);
                console.log("huii");
                console.log(index);
                return;
            }
        }
    }
    // function deleteSymbol(_event: MouseEvent): void {
    //     for (let Symbol of figures) {
    //     let mousePosY: number = _event.clientY;
    //     let mousePosX: number = _event.clientX;
    //     let canvasRect: ClientRect | DOMRect = mainCanvas.getBoundingClientRect();
    //     let offsetX: number = mousePosX - canvasRect.left;
    //     let offsetY: number = mousePosY - canvasRect.top;
    //     for (let figur of figures) { 
    //         if (figur.position.x - figur.radius < offsetX &&
    //             figur.position.x + figur.radius > offsetX &&
    //             figur.position.y - figur.radius < offsetY &&
    //             figur.position.y + figur.radius > offsetY) {
    //             let index: number = figures.indexOf(figur);
    //             figures.splice(index, 1);
    //             console.log("Es funktioniert");
    //         }
    //     }
    // }}
    function chooseCanvas(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "small":
                Magical_Image.crc2.canvas.width = 350;
                Magical_Image.crc2.canvas.height = 400;
                break;
            case "medium":
                Magical_Image.crc2.canvas.width = 450;
                Magical_Image.crc2.canvas.height = 400;
                break;
            case "big":
                Magical_Image.crc2.canvas.width = 550;
                Magical_Image.crc2.canvas.height = 400;
                break;
        }
    }
    function chooseBackground(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "red":
                Magical_Image.crc2.fillStyle = "red";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "red";
                break;
            case "yellow":
                Magical_Image.crc2.fillStyle = "yellow";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "yellow";
                break;
            case "blue":
                Magical_Image.crc2.fillStyle = "blue";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "blue";
                break;
            case "orange":
                Magical_Image.crc2.fillStyle = "orange";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "orange";
                break;
            case "green":
                Magical_Image.crc2.fillStyle = "green";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "green";
                break;
            case "pink":
                Magical_Image.crc2.fillStyle = "pink";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "pink";
                break;
            case "white":
                Magical_Image.crc2.fillStyle = "white";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "white";
                break;
            case "black":
                Magical_Image.crc2.fillStyle = "black";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                SafeBackgroundColor = "black";
                break;
        }
        backgroundImage = Magical_Image.crc2.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
    }
    function drawSymbol(_event) {
        let target = _event.target;
        let id = target.id;
        // let position : Vector = new Vector(x,y);
        switch (id) {
            case "star":
                let x = 0;
                let y = 0;
                let positionStar = new Magical_Image.Vector(x, y);
                let star = new Magical_Image.Star(positionStar);
                star.draw();
                figures.push(star);
                Symbolcolor();
                break;
            case "circle":
                let x1 = 0;
                let y1 = 0;
                let positionCircle = new Magical_Image.Vector(x1, y1);
                let circle = new Magical_Image.Circle(positionCircle);
                circle.draw();
                figures.push(circle);
                Symbolcolor();
                break;
            case "heart":
                let x2 = 0;
                let y2 = 0;
                let positionHeart = new Magical_Image.Vector(x2, y2);
                let heart = new Magical_Image.Heart(positionHeart);
                heart.draw();
                figures.push(heart);
                Symbolcolor();
                break;
            case "triangle":
                let x3 = 0;
                let y3 = 0;
                let position = new Magical_Image.Vector(x3, y3);
                let triangle = new Magical_Image.Triangle(position);
                triangle.draw();
                figures.push(triangle);
                Symbolcolor();
                break;
        }
    }
    Magical_Image.drawSymbol = drawSymbol;
    function animate(_event) {
        Magical_Image.crc2.putImageData(backgroundImage, 0, 0);
        for (let Symbol of figures) {
            if (Symbol instanceof Magical_Image.Heart)
                Symbol.move(1 / 10);
            else if (Symbol instanceof Magical_Image.Triangle)
                Symbol.move(1 / 10);
            else if (Symbol instanceof Magical_Image.Circle)
                Symbol.move(1 / 10);
            else if (Symbol instanceof Magical_Image.Star)
                Symbol.move(1 / 10);
            Symbol.draw(Magical_Image.crc2);
        }
        if (dragDrop == true) {
            objectDragDrop.draw(Magical_Image.crc2);
        }
    }
    function clearCanvas() {
        Magical_Image.crc2.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        figures = [];
        Magical_Image.crc2.save();
        let clearBackground = false;
        if (clearBackground == false) {
            backgroundImage = Magical_Image.crc2.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
            Magical_Image.crc2.fillStyle = "white";
            Magical_Image.crc2.fill();
            Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
            Magical_Image.crc2.restore();
        }
        Magical_Image.crc2.save();
    }
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=main.js.map