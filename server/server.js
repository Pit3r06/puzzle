var http = require("http"); 
var dispatcher = require("./dispatcher");

var server = http.createServer(gestisciRichieste);

var disp = new dispatcher();
disp.aggiungiServizio("/image",image);

function image(richiesta, risposta){
    risposta.url = "/images/puzzle.jpg";
    disp.smista(richiesta, risposta);};

function gestisciRichieste(richiesta, risposta){
    let metodo = richiesta.method;
    let risorsa = richiesta.url;
    console.log("Nuova richiesta arrivata");
    console.log(`${metodo} - ${risorsa}`);
    console.log(richiesta.headers.host);

    disp.smista(richiesta, risposta);
}

server.listen(1337);
console.log("Il server è stato avviato sulla porta 1337");