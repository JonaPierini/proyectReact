
//El método find() devuelve el valor del PRIMER elemento del array que cumple la función de proporcionada.
// BUSCA EL PRIMER ELEMENTO DEL ARRAY
// NO nos devuelve un nuevo array
// Se dice que son metodos de busqueda
// VA a devolver TRUE o FALSE
// Se puede hacer con includes 
const numeros = [0, 5, 8, 40, 1]

const prueba = numeros.find((e) => (e))
// console.log(prueba)

const pruebaUno = numeros.find((e) => (e > 30))
//console.log(pruebaUno)

const ciudades = ['Madrid', 'Barcelona', 'Valencia']
const pruebaTres = ciudades.find((e, index) => {
    if(e === 'Valencia'){
        // console.log(index)
    }
})

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];


const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

//console.log(resultado)
