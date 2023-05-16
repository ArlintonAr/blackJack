
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
const cardHtmlPlayer = (card) => {
    const playerCards = document.querySelector('#playerCards')
    let img = document.createElement('img')
    img.classList.add('size-cart')
    img.src= `assets/cartas/${card}.png`
    playerCards.appendChild(img)
}

const cardHtmlComputer = (card) => {
    const computerCards = document.querySelector('#computerCards')
    let img = document.createElement('img')
    img.classList.add('size-cart')
    img.src= `assets/cartas/${card}.png`
    computerCards.appendChild(img)
}

const valueCard = (card) => {
    const valor = card.substring(0, card.length - 1) //extraer el valor de la carta pero obviando el ultimo digito
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1
}



const reqquestCard = document.querySelector('#reqquestCard')
const punctuacionCount=document.querySelectorAll('#punctuacionCount')
const puntuacionCountPc=document.querySelectorAll('#puntuacionCountPc')
const stop=document.querySelector('#stop')

let punctuacionPlayer=0
let puntuacionPc=0

//TURNO PC
const computerShift=(punctuactionMin)=>{

    do {
        const card=getCards()
        puntuacionPc=puntuacionPc+ valueCard(card)
        puntuacionCountPc[0].textContent=puntuacionPc
        cardHtmlComputer(card)
        if(punctuactionMin>21){
            break
        }
    } while ((puntuacionPc<punctuactionMin) && (punctuactionMin<=21));

    setTimeout(() => {     
        if(puntuacionPc===punctuactionMin){
            alert("No ganó ninguno")
        }else if(punctuactionMin>21){
            alert("La computadora gana")
        }else if(puntuacionPc>21){
            alert("Ud ha ganado")
        }else{
            alert("gana computadora")
        }
    }, 100);
    

}

//EVENTOS
reqquestCard.addEventListener('click', () => {
    const card=getCards()
    punctuacionPlayer=punctuacionPlayer + valueCard(card)
    punctuacionCount[0].textContent=punctuacionPlayer
    cardHtmlPlayer(card)
    if(punctuacionPlayer>21){
        console.log('Haz perdido el juego')
        reqquestCard.disabled=true
        computerShift(punctuacionPlayer)
    }else if(punctuacionPlayer===21){
        console.log("Haz ganado el juego")
        reqquestCard.disabled=true
        computerShift(punctuacionPlayer)
    }

    
})


stop.addEventListener('click',()=>{
    reqquestCard.disabled=true
    stop.disabled=true
    computerShift(punctuacionPlayer)
})

createDeck()
