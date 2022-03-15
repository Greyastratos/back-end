const fs = require('fs');


class Archivo  {
    constructor(nombreAarchivo, title, price, tumbnail){
        this.nombreAarchivo = nombreAarchivo; 
        this.title = title;
        this.price = price;
        this.tumbnail= tumbnail;
    }

     leer  = async ()=>{
               try {
                    let contenido = await fs.promises.readFile(this.nombreAarchivo,'utf-8')
                    console.log(contenido)
                }
             catch(err){
                 console.log(`no se pudo leer` + err)
                }
            }

     borrar= ()=>{
         fs.promises.unlink(this.nombreAarchivo).catch(error => console.log('nope'));
     }

     guardar= async(_title, _price, _tumbnail) =>{
         let Objnew = {
             "title":this.title,
             "price":this.price,
             "tumbnail":this.tumbnail,
             "id": 0
         };    
         try{
            let data = await fs.promises.readFile(this.nombreAarchivo,'utf-8')
            let contenido = JSON.parse(data)
            Objnew.id = Objnew.id +1;
            contenido.push(Objnew);
            console.log(JSON.stringify(contenido))
        await fs.promises.writeFile(this.nombreAarchivo,JSON.stringify(contenido))
         }
         catch(err){
             console.log('nope' +err )
         }
        }
}

const pepe = new Archivo('prueba.txt','hola',129,'hola');
pepe.leer();
pepe.guardar();