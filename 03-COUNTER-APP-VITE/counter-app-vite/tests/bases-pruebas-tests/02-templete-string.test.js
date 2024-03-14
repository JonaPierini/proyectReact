import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe ('Prueba en 02-temple-string.js', () => {
    test('debe de retornar "Hola Fernando"', () => { 
        const name = 'Fernando';
        const saludo = getSaludo(name);
        expect(saludo).toBe(`Hola ${name}`)
     })
})