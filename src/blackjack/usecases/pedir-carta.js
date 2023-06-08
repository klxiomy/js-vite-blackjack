/**
 * Esta funcion reparte una carta
 * @param {array<string>} deck es un array de string
 * @returns {string} retorna una carta del deck
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}