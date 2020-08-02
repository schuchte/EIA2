"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Magical_Image;
(function (Magical_Image) {
    let images;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Tata:Amsterdam99@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority"; //Adresse von Datenbankserver
    //mongodb+srv://Tata:<Amsterdam99>@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseUrl); //gibt Adresse weiter an Funktion connectToDatabase
    function startServer(_port) {
        let server = Http.createServer(); // Für Server wird Port erstellt
        console.log("Server starting on port:" + _port);
        server.listen(_port); //Server hört auf Port und der Port wird geöffnet
        server.addListener("request", handleRequest); // Ein Event Request wird auf den Server gesetzt, der dann die Funktion HandleRequest aufruft
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options); //wir kriegen hier ne Art MongoShell die mit unserer Datenbank kommuniziert
        await mongoClient.connect(); //MongoDB soll verbunden werden
        images = mongoClient.db("MagicImage").collection("images"); //Eingreifen und schon mal eine Datenbank (Househelp) und eine Collection darin (Orders) erstellen//Daten die in Ordern gespeichert wurden werden in der collection abgelegt. 
        console.log("Database connection", images != undefined); //wenn das geklappt hat Konsolenausgabe mit den Daten
    }
    let anyOrder = [];
    async function handleRequest(_request, _response) {
        // console.log("what's up?"); 
        console.log(_request.url); //Wie mit der Request umgegangen wird 
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            //for (let key in url.query) {
            // _response.write(key + ":" + url.query[key]); 
            //}
            if (_request.url == "/?getmagicPicture=yes") { //Wenn ein url angefraht wird, dann..
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(databaseUrl, options);
                await mongoClient.connect(); // Mongo client wird verbindet. 
                let orders = mongoClient.db("Zauberbild").collection("magicPicture"); //Hier wird der CLient Household und in dieser die collection Orders erstellt. 
                let mongoCursor = orders.find();
                await mongoCursor.forEach(retrieveOrder); //Es soll gewartet werden und die Funktion retrieveOrder wird dann für jeden Aufruf von Cursor aufgerufen.  
                let jsonString = JSON.stringify(anyOrder);
                let answer = jsonString.toString();
                _response.write(answer);
                anyOrder = [];
            }
            else { // wenn nicht, dann soll eine Variable gebildet werden,
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString); //und diese als Antwort zurück geliefert werden
                storePicture(url.query); //Der url Query soll dann an die collection der Database geschickt/eingetragen werden
            }
            //let jsonString: string = JSON.stringify(url.query); 
            //_response.write(jsonString); 
            storePicture(url.query); //nehmen den query von der url --> einen Teil vom url (?Drink=Mojito....)
        }
        _response.end(); //Antwort wird verschickt
    }
    function retrieveOrder(_image) {
        let jsonString = JSON.stringify(_image);
        anyOrder.push(jsonString); // In das Array soll dann der jsonString gepusht werden 
    }
    function storePicture(_image) {
        images.insert(_image);
    }
})(Magical_Image = exports.Magical_Image || (exports.Magical_Image = {}));
//# sourceMappingURL=Server.js.map