const http = require('http');


const server = http.createServer((req, res) =>{
    const obj = {
      id:"", title:"", price:"", thumbnail:""
    }
  const random10 = ()=>{
      let random = Math.floor(Math.random()*10+1)
       console.log(random);
       return random;
    }
  const randomGrande = ()=>{
      let random = Math.floor(Math.random()*9999+0)
      let lrandom = Math.floor(Math.random()*100+0)/100
      random = lrandom + random
      console.log(random);
      return random;
    }
  
  random10();
  randomGrande();
  obj.id = `${random10()}`
  obj.title = `Producto ${random10()}`
  obj.price = `${randomGrande()}`
  obj.thumbnail = `Foto: ${random10()}`
  
  console.log(obj)
   let objeto = JSON.stringify(obj);
  console.log(objeto);
  
  res.end(objeto);
/*  let hora = new Date().getHours();
  if(hora>=6 && hora<=12)res.end("Buenos Días");// finaliza la pregunta y devuelve
  if(hora>= 12&& hora<=19)res.end("Buenas Tardes");
  if(hora<=5 || hora >=20)res.end("Buenas Noches");*/
}) //peticion y respuesta 

/*ponemos a escuchar al servidor */

server.listen(8080,()=>{
    console.log("Listening on port 8080")
})//el servidor esta escuchando(8080 es el puerto, lo que quiero que haga en respuest)
//acabo de levantar el servidor loal houste 8080
