import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () =>{
    test('getUser debe de retornar un objeto', () =>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        console.log(user);

        //para comparar objetos
        expect(user).toEqual(testUser)
    })

    //TAREA
    test('getusuarioActivo debe de retorna un objeto', () =>{
        const name = 'Fernando'
        const userDos = getUsuarioActivo(name)
        console.log(userDos)

        expect(userDos).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})