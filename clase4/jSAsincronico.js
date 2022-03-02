const mostrarPalabras = (palabra, cb)=>{
    let i = 0;

    const timer = setInterval( ( ) => {
        if(i < palabra.length){
            console.log(palabra[i]);
            i++;
        }else{
            clearInterval(timer);
            cb();
            console.log(i);
        }

    },400)
}

const fFinalizado = ()=> console.log(`Proceso Completo!`);
setTimeout(()=>{
    setTimeout(()=>{
        mostrarPalabras('Text1',fFinalizado);
     },0);

},0)
setTimeout(()=>{
    setTimeout(()=>{
        mostrarPalabras('Text02',fFinalizado);
     },1500);

},1000)
setTimeout(()=>{
    setTimeout(()=>{
        mostrarPalabras('Texto03',fFinalizado);
     },3000);

},2000)
