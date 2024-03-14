// EL método map() crea un nuevo array. 
// NO modifica el array original
let numbers = [1, 5, 10, 15];

//RECORRIDO CON FOR
// for(let i = 0; i < numbers.length; i++){
   // console.log("Numeros " + numbers[i])
// }

//RECORRIDO CON FOREACH
// numbers.forEach(element => {
    // console.log(element)
//});

//RECORRIDO CON MAP
let pruebaMap = numbers.map((elem) => {
    return elem
})
// console.log(pruebaMap)

let doubles = numbers.map((elem) => {
    return elem * 2
});
// console.log(doubles)

// AGREGANDO INDEX COMO PARAMETRO
// let index = numbers.map((elem, i) => {
//     console.log('NUMERO ELEMENTO ' + elem)
//     console.log('NUMERO INDICE ' + i)
// })

let students = [
    {
        name:  'Maria',
        lastname: 'Orzo',
        age:  22,
        course: 'Primero',
    },
    {
        name:  'Patricia',
        lastname: 'Beade',
        age:  42,
        course: 'Segundo',
    },
    {
        name:  'Meliza',
        lastname: 'Lobay',
        age:  38,
        course: 'Tercero',
    },
    {
        name:  'Jose',
        lastname: 'Abud',
        age:  35,
        course: 'Cuarto',
    },
];

// EJEMPLO CON FOR
// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }

//EJEMPLO CON FOREACH - no me retorna nada, por ende debería generar un arreglo afuera y pushearlo

// const student = []
// students.forEach((element, index) => {
//         student.push(element)
//     console.log(element)
//     console.log(index)
//});

//console.log(student)

//EJEMPLO CON MAP => lo importante es que si devuelve un valor y no necesito genera un array aparte. 
//PORQUE YA NOS RETORNA UN ARRAY. ES DECIR QUE SI YO LO GUARDO EN UNA VARIABLE y lo consoleo me va a retornar un array
//let mapStudents = students.map((elem) => elem)
//console.log(mapStudents)

//CAMBIAR EL ARRAY Y GENERAR UN NUEVO ARRAY
//  const names = students.map((elem) =>{
//      return{
//          fullname: elem.name + ' ' + elem.lastname,
//          age: elem.age,
//          title: elem.name + '-' + elem.course 
//TITLE es una nueva propiedad  
//      }
//  })

//console.log(names)



