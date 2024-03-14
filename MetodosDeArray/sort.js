//Metodo sort() => El método sort() ordena los elementos de un arreglo (array) y devuelve el arreglo ordenado. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
// MUY IMPORTANTE => modifica el array original. En nuestro caso no lo va a modificar porque estamos declarandolo 
// en otra variable
let frutas = ['guindas', 'zaza', 'manzanas', 'bananas', 'sandia', 'pera'];
let frutasOrdenadas = frutas.sort(); 
//console.log(frutasOrdenadas)

let numeros = [9,8,4,1,3]
let numerosOrdenados = numeros.sort()
// console.log(numerosOrdenados)


// EJEMPLO con una función de comparación. Porque se hace con una función de comparacion? Porque tiene que comparar dos elementos. y esa comparacion se hace con valores de unicode. 
// UNICODE Cada caracter como podría ser a, b, o c tiene una representación unicode, que se basa en un código. 

let numbers = [7, 3, 44, 101, 55, 60, 82, 1, 57, 6];
// Si nosotros le aplicamos numbers.sort()
// console.log(numbers)
// numbers.sort((a, b) => {
//     if(a == b) {
//       return 0; 
//     }
//     if(a < b) {
//       return -1;
//     }
//     return 1;
//   });

// ** Si a y b eran iguales, devolvemos 0.
// ** Si a es menor que b, devolvemos -1, que es un valor por debajo de cero.
// ** Al final devolvemos 1, porque querrá decir que no eran ni iguales ni a era menor que b.

//SI queremos hacer un orden descedente
// numbers.sort((a, b) => {
//     if(a == b) {
//       return 0; 
//     }
//     if(a > b) {
//       return -1;
//     }
//     return 1;
//   });

// SI tenemos mayusuculas o minusculas podemos usar toLowerCase()
//let wordsMayusculas = ["hola", "Adiós", "gusta", "Quiero", "ordenar", "arrays"];
// wordsMayusuculas.sort((a, b) => {
//     a = a.toLowerCase(),
//     b = a.toLowerCase()
//     if(a == b) {
//       return 0; 
//     }
//     if(a > b) {
//       return -1;
//     }
//     return 1;
//   });

// EJEMPLO CON OBJETO DE ARRAY

// let usuarios = [
//      {
//          id: 2333,
//          nombre: 'Jona',
//          apellido: 'Pierini'
//      },
//      {
//          id: 11,
//          nombre: 'Miguel',
//          apellido: 'Aarasa'
//      },
//      {
//          id: 33,
//          nombre: 'Alvaro',
//          apellido: 'Zepito'
//      }
//  ]

//  usuarios.sort( (a, b) => {
//      if(a.id < b.id) {
//        return -1;
//      }
//      if(a.id > b.id) {
//        return 1;
//      }
//      return 0;
//    });

// console.log(usuarios)

// EJEMPLO CON OBJETO DE ARRAY QUE TIENEN EL MISMO ID POR ERROR

let usuarios = [
    {
        id: 2333,
        nombre: 'Jona',
        apellido: 'Pierini'
    },
    {
        id: 11,
        nombre: 'Miguel',
        apellido: 'Aarasa'
    },
    {
        id: 11,
        nombre: 'Alvaro',
        apellido: 'Zepito'
    }
]

usuarios.sort( (a, b) => {
    if(a.id < b.id) {
      return -1;
    }
    if(a.id > b.id) {
      return 1;
    }

    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
      }
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
      }
    return 0;
  });

// console.log(usuarios)
