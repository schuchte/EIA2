import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb"; //Mongo beliebig gewählter Name

export namespace L07_Househelp {
    interface Order {
        [type: string]: string | undefined | string[];
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb+srv://Tata:Amsterdam99@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority"; //Adresse von Datenbankserver

    //mongodb+srv://Tata:<Amsterdam99>@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority

    startServer(port);
    connectToDatabase(databaseUrl); //gibt Adresse weiter an Funktion connectToDatabase

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> { //die url ist der Link an den Datenbankserver
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options); //wir kriegen hier ne Art MongoShell die mit unserer Datenbank kommuniziert
        await mongoClient.connect();
        orders = mongoClient.db("Househelp").collection("Orders"); //Eingreifen und schon mal eine Datenbank (Househelp) und eine Collection darin (Orders) erstellen
        console.log("Database connection ", orders != undefined); //wenn das geklappt hat Konsolenausgabe mit den Daten
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //wandelt query String in Objekt um
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }

            let jsonString: string = JSON.stringify(url.query); //
            _response.write(jsonString);

            storeOrder(url.query); //nehmen den query von der url --> einen Teil vom url (?Drink=Mojito....)
        }

        _response.end();
    }


    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }
}