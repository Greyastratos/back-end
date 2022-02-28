var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//trabajamos con tscpt
const operacion = (num1, num2, tipoDeOperacion) => __awaiter(void 0, void 0, void 0, function* () {
    let metodoOperacion = yield import('./operacion.js');
    if (tipoDeOperacion === 'sumar') {
        let result = metodoOperacion.sumar(num1, num2, tipoDeOperacion);
        return result;
    }
    if (tipoDeOperacion === 'restar') {
        let result = metodoOperacion.restar(num1, num2, tipoDeOperacion);
        return result;
    }
    else {
        return `Error: Escribe "sumar" para ejecutar suma y "restar" para la resta`;
    }
});
const ejecucion = (num1, num2, tipoDeOperacion) => __awaiter(void 0, void 0, void 0, function* () {
    let modifTipoDeOperacion = tipoDeOperacion.toLocaleLowerCase();
    let resultado = yield operacion(num1, num2, modifTipoDeOperacion);
    console.log(resultado);
});
ejecucion(3, 2, 'sumar');
export {};
