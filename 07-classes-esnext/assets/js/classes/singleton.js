class Singleton {
    static instancia; // undefined
    nombre = '';

    constructor(nombre = '') {

        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);

        if(!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;

        this.nombre = nombre;

        // return this;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blackpanther');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);