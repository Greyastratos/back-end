import express from 'express'
import ejercicio from './prueba'
const app = express();

const PORT = 8080;
const server = app.listen(PORT,()=>{
   console.log('listening on PORT ${PORT}');
})

    let llamar= async ()=>{
    try {
         let contenido = await fs.promises.readFile({ejercicio},'utf-8')
         console.log(contenido)
         return JSON.stringify(contenido);
     }
  catch(err){
      console.log(`no se pudo leer` + err)
     }
 }

 let random = async ()=>{
    try {
         let contenido = await fs.promises.readFile({ejercicio},'utf-8')
         let num = contenido.length;
         console.log(contenido)

         return JSON.stringify(contenido[Math.floor(Math.random()*{num}+0)]);
     }
  catch(err){
      console.log(`no se pudo leer` + err)
     }
 }


app.get('/item', (req, res)=>{
    res.send(`<h2 style='color:blue'> los items son ${llamar}</h2>`)
    } )
    

app.get('/item-random', (req, res)=>{
        res.send(`<h2 style='color:blue'> los items son ${random}</h2>`)
        } )

let contador =0;
app.get(':item/visitas'), (req, res)=>{
    res.send(`visitaste esta ruta${++contador}veces`)
 }

 /*mientras el servidor siga activo va a guardar el contador en
 la memoria interna, ahora si este se reinicia el contador volvera a 0*/
 
 