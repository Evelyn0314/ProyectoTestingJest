import { sumar, restar, multiplicar, dividir, isFalse, isNull, isTrue, isUndefined, arrDias, arrProvincias, objExpReg } from '../index.js';

describe('Operaciones matemáticas', () => {
    //.toBe: Usado para comparar valores primitivos
    test('Realizamos la suma', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('Realizamos la resta', () => {
        expect(restar(1,1)).toBe(0);
    });
    test('Realizamos la multiplicacion', () => {
        expect(multiplicar(1,1)).toBe(1);
    });
    test('Realizamos la division', () => {
        expect(dividir(1,1)).toBe(1);
    });
});

//Matchers para probar los diferentes valores que puede tener nuestro código
describe('Common matchers', () => {
    const datos = {
        nombre: 'Persona 1',
        edad: 10
    }
    const datos2 = {
        nombre: 'Persona 1',
        edad: 10
    }
    //.toEqual: Usado para comparar recursívamente todas las propiedades de un objetos,
    //también conocido como igualdad profunda.
    test('Comprobamos que los objectos son iguales', () => {
        expect(datos).toEqual(datos2);
    });
});

describe('Matchers numéricos', () => {
    test('Resultado menor que...', () => {
        //toBeLessThan: El valor es menor que.
        expect(restar(5,3)).toBeLessThan(3);
    });
    test('Resultado menor o igual que...', () => {
        //toBeLessThanOrEqual: El valor es menor o igual que.
        expect(restar(5,3)).toBeLessThanOrEqual(2);
    });
    test('Resultado mayor o igual que...', () => {
        //toBeGreaterThanOrEqual: El valor es mayor o igual que.
        expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
    });
    test('Resultado mayor que...', () => {
        //toBeGreaterThan: El valor es mayor que.
        expect(sumar(5,5)).toBeGreaterThan(9);
    });
});

describe('Matchers Boolean, Undefined o Null', () => {
    test('Resultado true', () => {
        //toBeTruthy: El valor es verdadero.
        expect(isTrue()).toBeTruthy();
    });
    test('Resultado false', () => {
        //toBeFalsy: El valor es falso.
        expect(isFalse()).toBeFalsy();
    });
    test('Resultado undefined', () => {
        //toBeUndefined: El valor es ‘undefined’
        expect(isUndefined()).toBeUndefined();
    });
    test('Resultado null', () => {
        //toBeNull: El valor es ‘null’
        expect(isNull()).toBeNull();
    });
});

describe('Matchers Arrays', () => { 
    test('Madrid existe en el array', () => {
        //.toContain: Contiene el elemento dentro del array
        expect(arrProvincias()).toContain('Madrid');
    });
    test('Guadalajara no existe en el array', () => {
        expect(arrProvincias()).not.toContain('Guadalajara');
    })
    test('El array semana tiene 9 elementos', () => {
        //.toHaveLength: El array tiene la longitud
        expect(arrProvincias()).toHaveLength(9);
    })
    test('Existe Lunes en el array semana', () => {
        expect(arrDias()).toContain('Lunes');
    });
});

describe('Matchers Strings', () => {
    const exp = objExpReg();
    test('Comprobamos si la respuesta es correcta', () => {
        //toMatch: Comprueba que un texto coincide con una expresión regular
        expect(exp.responseOK).toMatch(/OK/);
    });
    test('Comprobamos si la respuesta es incorrecta', () => {
        expect(exp.responseFAIL).toMatch(/FAIL/);
    });
    test('Comprobamos si la respuesta tiene una longitud', () => {
        //toHaveLength: Comprueba la longitud.
        expect(exp.responseFAIL).toHaveLength(13);
    });
    test('Comprobamos dirección de email', () => {
        expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
    })
    test('Comprobamos número de teléfono', () => {
        expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
    });
});