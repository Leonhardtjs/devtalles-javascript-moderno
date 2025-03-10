// function crearPersona( nombre, apellido ) {
//     return {  nombre, apellido }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido })
    
const persona = crearPersona('Fernando', 'Herrrera');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments)
}

imprimeArgumentos(10, true, false, 'Fernando', 'Hola');

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo })

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrrera');
console.log({ nuevoApellido })

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log('nombre', personaje.nombre)
//     console.log('codeName', personaje.codeName)
//     console.log('vivo', personaje.vivo)
//     console.log('edad', personaje.edad)
//     console.log('trajes', personaje.trajes)
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, personajes}) => {
    console.log({nombre}), 
    console.log({codeName}), 
    console.log({vivo}), 
    console.log({edad}), 
    console.log({personajes})
}

imprimePropiedades(tony)