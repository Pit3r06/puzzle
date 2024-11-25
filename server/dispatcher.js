var fs = require("fs");

class Dispatcher{
    #servizi = {}
    #tipi = {
        "html":"text/html",
        "css":"text/css",
        "js":"text/javascript",
        "png":"image/png",
    }

    set tipi(value){
        if(typeof value == "object")
        this.#tipi[value.key] = value.tipo;
    }

    get tipi(){
        return this.#tipi;
    }

    aggiungiServizio(nomeServizio, callback){
        this.#servizi[nomeServizio] = callback;
    }

    smista(richiesta, risposta){
   
        let risorsa = richiesta.url.split("?")[0];
        if(risorsa.includes(".") || risorsa=="/"){
       
            risorsa = risorsa=="/"?"index.html":risorsa;
            let estensione = risorsa.split(".")[1];
            this.ritornaFile(risorsa, estensione, risposta);
        }else{
        
            let func = this.#servizi[risorsa];
            func(richiesta, risposta);
        }
    }

    ritornaFile(nome, estensione, risposta){
        if(estensione=="png")
            nome = "img/"+nome;
        fs.readFile("public/"+nome, (err, file)=>{
            if(err){
                risposta.writeHead(404, {"Content-Type":"text/plain"});
                risposta.write("Risorsa non trovata");
            }else{
                risposta.writeHead(200, {"Content-Type":this.#tipi[estensione]});
                risposta.write(file);
            }
            risposta.end();
        });
    }

}




module.exports = Dispatcher;