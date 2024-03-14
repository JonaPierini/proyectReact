import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('pruebas en 09-promesas', () =>{
    test('GetHeroeByIdAsyn debe de retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            )
            done()
        })
    })
    test('debe de retornar un error si hero no existe', (done) => {
        const id = 1000;
        getHeroeByIdAsync(id)
        .catch(err => {
            console.log(err)
            done()
        })
    })
    
})