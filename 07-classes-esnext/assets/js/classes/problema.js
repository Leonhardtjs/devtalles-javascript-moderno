const mike = {
    nombre: 'Mike',
    edad: 24,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - edad: ${this.edad}`)
    }
}

// mike.imprimir();

// Ok esto se debe de crear con la palabra new 
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');   
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre ${ this.nombre } - edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
maria.imprimir();
melissa.imprimir();