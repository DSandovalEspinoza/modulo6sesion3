// pasos 
// npm init
//node index.js
//npm install -D nodemon
//npx nodemon
const {validate,format} = require('rut.js')
const moment = require("moment")

const fechas ={
    creacion: moment().subtract(2,'days').calendar(),
    actualizacion: moment().format("YYYY-MM-DD, hh:mm:ss"),
}
console.log(fechas)

let persona1 = {
    rut:"17898911-1",
    nombre:"Diego",
    apellido:"Sandoval",
    fecha_nacimiento:"1991-07-12",
}

let persona2 = {
    rut:"11.111.111-1",
    nombre:"Maria",
    apellido:"rodriguez",
    fecha_nacimiento:"1995-08-01",
}

let persona3 = {
    rut:"22.222.222-2",
    nombre:"Juan",
    apellido:"Perez",
    fecha_nacimiento:"1975-05-12",
}

let persona4 = {
    rut:"11.222.333-4",
    nombre:"Adriana",
    apellido:"Garrido",
    fecha_nacimiento:"1960-10-22",
}
// console.log(persona1)

let personas = []

personas.push(persona1, persona2, persona3, persona4)
// console.log('11.111.111-1',validate('11.111.111-2'))
// console.log(personas);

const incluirFechas = () =>{
    for (let index = 0; index < personas.length; index++){
        personas[index] = {...personas[index],...fechas};//aquí estoy armando un objeto nuevo
    }
}
incluirFechas() 
console.log(personas);

const listadoPersonas = (listado) => {
    for (const itemPersona of listado) {
        const {rut, nombre, apellido} = itemPersona;
        const mensaje = validate(rut) ? 'si' : 'no'
        console.log(`${format(rut)} |${nombre} |${apellido}| Valido: ${mensaje}`);
    }
}
listadoPersonas(personas)