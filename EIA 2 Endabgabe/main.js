"use strict";
var Magical_Image;
(function (Magical_Image) {
    let forms = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("hello my friend");
        let canvas = document.querySelector("canvas");
        Magical_Image.crc2 = canvas.getContext("2d");
        //let Delete: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#deleteimg"); 
        //let Save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveimg");
        let size = document.querySelector("fieldset#size");
        let color = document.querySelector("fieldset#color");
        let symbol = document.querySelector("fieldset#symbol");
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
    function animation() {
        for (let Symbol of forms) {
            if (Symbol instanceof Magical_Image.Heart)
                Symbol.move(1 / 30);
            Symbol.draw();
            if (Symbol instanceof Magical_Image.Star)
                Symbol.move(1 / 30);
            Symbol.draw();
        }
    }
    function colorchange() {
        for (let Symbol of forms) {
            if (Symbol instanceof Magical_Image.Circle)
                Symbol.change(1 / 50);
        }
    }
    Magical_Image.colorchange = colorchange;
    function chooseSymbol(_event) {
        let target = _event.target;
        let id = target.id;
        Magical_Image.crc2.save();
        switch (id) {
            case "circle":
                let x = 100;
                let y = -40;
                let position = new Magical_Image.Vector(x, y);
                let circle = new Magical_Image.Circle(position);
                circle.draw();
                forms.push(circle);
                window.setInterval(colorchange, 1000);
                break;
            case "heart":
                let x1 = 5;
                let y1 = -10;
                let position1 = new Magical_Image.Vector(x1, y1);
                let heart = new Magical_Image.Heart(position1);
                heart.draw();
                forms.push(heart);
                window.setInterval(animation, 40);
                break;
            case "star":
                let x2 = 20;
                let y2 = 180;
                let position2 = new Magical_Image.Vector(x2, y2);
                let star = new Magical_Image.Star(position2);
                star.draw();
                forms.push(star);
                window.setInterval(animation, 40);
                break;
            case "triangle":
                let x3 = 250;
                let y3 = 330;
                let position3 = new Magical_Image.Vector(x3, y3);
                let triangle = new Magical_Image.Triangle(position3);
                triangle.draw();
                forms.push(triangle);
                break;
        }
    }
    function chooseColor(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "red":
                Magical_Image.crc2.fillStyle = "red";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "yellow":
                Magical_Image.crc2.fillStyle = "yellow";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "blue":
                Magical_Image.crc2.fillStyle = "blue";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "orange":
                Magical_Image.crc2.fillStyle = "rgb(255, 115, 0)";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "green":
                Magical_Image.crc2.fillStyle = "lime";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "pink":
                Magical_Image.crc2.fillStyle = "rgb(255, 56, 89)";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "white":
                Magical_Image.crc2.fillStyle = "white";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
            case "black":
                Magical_Image.crc2.fillStyle = "black";
                Magical_Image.crc2.fill();
                Magical_Image.crc2.fillRect(0, 0, Magical_Image.crc2.canvas.width, Magical_Image.crc2.canvas.height);
                break;
        }
    }
    Magical_Image.chooseColor = chooseColor;
    function chooseSize(_event) {
        console.log("here i am bitch");
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
})(Magical_Image || (Magical_Image = {}));
//# sourceMappingURL=main.js.map