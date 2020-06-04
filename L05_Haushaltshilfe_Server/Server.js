"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb"); //Mongo beliebig gewählter Name
var L07_Househelp;
(function (L07_Househelp) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Tata:Amsterdam99@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority"; //Adresse von Datenbankserver
    //mongodb+srv://Tata:<Amsterdam99>@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseUrl); //gibt Adresse weiter an Funktion connectToDatabase
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options); //wir kriegen hier ne Art MongoShell die mit unserer Datenbank kommuniziert
        await mongoClient.connect();
        orders = mongoClient.db("Househelp").collection("Orders"); //Eingreifen und schon mal eine Datenbank (Househelp) und eine Collection darin (Orders) erstellen
        console.log("Database connection ", orders != undefined); //wenn das geklappt hat Konsolenausgabe mit den Daten
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //wandelt query String in Objekt um
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query); //
            _response.write(jsonString);
            storeOrder(url.query); //nehmen den query von der url --> einen Teil vom url (?Drink=Mojito....)
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Househelp = exports.L07_Househelp || (exports.L07_Househelp = {}));
//# sourceMappingURL=Server.js.map