import * as Http from "http"; 
import * as Url from "url"; 
import * as Mongo from "mongodb"; 


export namespace Magical_Image {

    interface Order {
        [type: string]: string | string[] | undefined; 
    }
    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT; 
    if (port == undefined )
    port = 5001; 

    let databaseUrl: string = "mongodb+srv://Tata:Amsterdam99@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority"; //Adresse von Datenbankserver

     //mongodb+srv://Tata:<Amsterdam99>@eia2-9msb9.mongodb.net/test?retryWrites=true&w=majority

    startServer(port);
    connectToDatabase(databaseUrl); //gibt Adresse weiter an Funktion connectToDatabase

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); // Für Server wird Port erstellt
        console.log(server); 


        console.log("Server starting on port:" + _port);   

        server.listen(_port); //Server hört auf Port und der Port wird geöffnet
        server.addListener("request", handleRequest); // Ein Event Request wird auf den Server gesetzt, der dann die Funktion HandleRequest aufruft
    }

    async function connectToDatabase(_url: string): Promise<void> { //die url ist der Link an den Datenbankserver

        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);  //wir kriegen hier ne Art MongoShell die mit unserer Datenbank kommuniziert
        await mongoClient.connect(); //MongoDB soll verbunden werden
        orders = mongoClient.db("Zauberbild").collection("magicPicture"); //Eingreifen und schon mal eine Datenbank (Househelp) und eine Collection darin (Orders) erstellen//Daten die in Ordern gespeichert wurden werden in der collection abgelegt. 
        console.log("Database connection", orders != undefined); //wenn das geklappt hat Konsolenausgabe mit den Daten
    }

    let anyOrder: string[] = []; 
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void>  {
        console.log("what's up?"); 
        console.log(_request.url);  //Wie mit der Request umgegangen wird 

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); 
            //for (let key in url.query) {
               // _response.write(key + ":" + url.query[key]); 
            //}

            if (_request.url == "/?getmagicPicture=yes") { //Wenn ein url angefraht wird, dann..
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
                await mongoClient.connect(); // Mongo client wird verbindet. 
                let orders: Mongo.Collection = mongoClient.db("Zauberbild").collection("magicPicture"); //Hier wird der CLient Household und in dieser die collection Orders erstellt. 
                let mongoCursor: Mongo.Cursor<any> = orders.find();
                await mongoCursor.forEach(retrieveOrder); //Es soll gewartet werden und die Funktion retrieveOrder wird dann für jeden Aufruf von Cursor aufgerufen.  
                let jsonString: string = JSON.stringify(anyOrder);
                let answer: string = jsonString.toString();
                _response.write(answer);
                anyOrder = [];
            } else { // wenn nicht, dann soll eine Variable gebildet werden,
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString); //und diese als Antwort zurück geliefert werden
                storeOrder(url.query); //Der url Query soll dann an die collection der Database geschickt/eingetragen werden
            }
            //let jsonString: string = JSON.stringify(url.query); 
            //_response.write(jsonString); 

            storeOrder(url.query);  //nehmen den query von der url --> einen Teil vom url (?Drink=Mojito....)


        }

        _response.end(); //Antwort wird verschickt

    }

    function retrieveOrder(_order: Order): void {
        let jsonString: string = JSON.stringify(_order); 
        anyOrder.push(jsonString); // In das Array soll dann der jsonString gepusht werden 
    
    }

    function storeOrder(_order: Order): void {
        orders.insert(_order); 
    }
 
}

