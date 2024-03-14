import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba 06-deses.obje.test.js', () =>{
    test('debe de retornar un objeto', ()=>{
       
        const clave = 123
        const edad = 123
        const valoresRetorno = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const ussContext = usContext({clave, edad}) 
       
        
        console.log(ussContext)

        expect(ussContext).toEqual(valoresRetorno)
    })
})