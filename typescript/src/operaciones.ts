import { sumar } from './operacion.js';

//trabajamos con tscpt
const operacion = async(num1:number,num2:number,tipoDeOperacion:string)=>{
    let metodoOperacion = await import('./operacion.js')
    if(tipoDeOperacion==='sumar'){
        let result = metodoOperacion.sumar(num1,num2,tipoDeOperacion);
        return result;
    }if(tipoDeOperacion==='restar'){
        let result = metodoOperacion.restar(num1,num2,tipoDeOperacion);
        return result;
    }else{
        return `Error: Escribe "sumar" para ejecutar suma y "restar" para la resta`;
    }
}

const ejecucion= async(num1:number, num2:number,tipoDeOperacion:string)=>{
    let modifTipoDeOperacion = tipoDeOperacion.toLocaleLowerCase();
    let resultado = await operacion(num1,num2,modifTipoDeOperacion);
    console.log(resultado);
}

ejecucion(3,2,'restar');