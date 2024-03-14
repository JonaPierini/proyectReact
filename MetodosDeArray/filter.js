// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// ES MUY SIMILAR AL MAP PERO FILTRA POR CONDICION
// TAMBIEN TIENE EL INDEX COMO PARAMETRO
//VALOR DEVUELTO Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6);

// console.log(result)

let students = [
    {
        name:  'Maria',
        lastname: 'Orzo',
        age:  22,
        course: 'Web Development',
    },
    {
        name:  'Patricia',
        lastname: 'Beade',
        age:  42,
        course: 'Accounting',
    },
    {
        name:  'Meliza',
        lastname: 'Lobay',
        age:  38,
        course: 'Web Development',
    },
    {
        name:  'Jose',
        lastname: 'Abud',
        age:  35,
        course: 'Management',
    },
];

//EJEMPLO CON FOR => COMO NO RETORNA NADA. TENGO QUE GENERAR UN NUEVO ARRAY
// let newStudents = []
// for(let i = 0; i < students.length; i++){
//     if(students[i].course === 'Web Development'){
//         newStudents.push(students[i])
//     }
// }
// console.log(newStudents)


// EJEMPLO CON FILTER => MUCHO MAS SENCILLO. SIN TANTA LOGICA. RETORNA UN NUEVO ARREGLO

const resultado = students.filter((elem) => elem.course === 'Web Development')
console.log(resultado)