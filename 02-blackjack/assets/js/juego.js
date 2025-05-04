/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diaminds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spades (Tréboles)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const puntosHTML = document.querySelectorAll('small');
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevo');

// Esta función crea un nuevo deck (baraja)
const crearDeck = () => {
    for (let i = 2; i < 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle(deck);
    return deck;

}

crearDeck();

// Esta función permite tomar una carta
const pedirCarta = () => {

    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : valor * 1; 
}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `../assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos < 21));

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos ) {
            alert('Nadie gana! 😣');
        } else if(puntosMinimos > 21) {
            alert('Computadora gana! 😣');
        } else if(puntosComputadora > 21) {
            alert('GANASTE!!! 😊')
        } else {
            alert('Computadora gana!')
        }
    }, 10)

}

const limpiarMesa = () => {
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosComputadora = 0;
    puntosJugador = 0;
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosComputadora;
    
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `../assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevoJuego.addEventListener('click', () => {
    limpiarMesa();
});