class Persona {

    static  _conteo = 0;

    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); //undefined no deja acceder a las propiedades en un método estático
        console.log('Hola a todos, soy un método estático')
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy ironman');

// Persona._conteo = 2;

spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende verde';

// console.log(spiderman.getComidaFavorita)

// console.log(spiderman)

console.log('Conteo estático', Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona)