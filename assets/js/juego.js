
let deck = []
const types = ['C', 'D', 'H', 'S']
const specialType = ['A', 'J', 'Q', 'K']

function randomSort() {
    return Math.random() - 0.5
}

const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const type of types) {
            deck.push(i + type)
        }
    }
    for (const type of types) {
        for (const special of specialType) {
            deck.push(special + type)
        }
    }
    deck = deck.sort(randomSort)
    console.log(deck)

}

const getCards = () => {
    if (deck.length === 0) {
        throw 'Ya no hay mas cartas';
    }
    const card = deck.pop()
    console.log(card)
    return card
}
const cardHtml = (card) => {
    const playerCards = document.querySelector('#playerCards')
    let img = document.createElement('img')
    img.classList.add('size-cart')
    img.src= `assets/cartas/${card}.png`
    playerCards.appendChild(img)
}


const valueCard = (card) => {
    const valor = card.substring(0, card.length - 1) //extraer el valor de la carta pero obviando el ultimo digito
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1
    
}
//TURNO PC
const computerShift=(punctuacionMin)=>{
    const 
}

//EVENTOS
const reqquestCard = document.querySelector('#reqquestCard')
const punctuacionCount=document.querySelectorAll('#punctuacionCount')
let punctuacionPlayer=0;

reqquestCard.addEventListener('click', () => {
    const card=getCards()
    punctuacionPlayer=punctuacionPlayer + valueCard(card)
    punctuacionCount[0].textContent=punctuacionPlayer
    cardHtml(card)
    if(punctuacionPlayer>21){
        console.log('Haz perdido el juego')
        reqquestCard.disabled=true
    }else if(punctuacionPlayer===21){
        console.log("Haz ganado el juego")
        reqquestCard.disabled=true
    }

})

const punctuation=(value)=>{
    if(valor){}
}


createDeck()
