let deck;
let player1;
let player2;

async function initialize(){
    let resp = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let deck = await resp.json();
    return deck;
}

async function getCards(id, n){
    let resp = await fetch("https://deckofcardsapi.com/api/deck/"+id+"/draw/?count="+n)
    let cards = await resp.json()
    return cards
}

initialize().then(
    resp => {
        console.log(resp)
        deck = new Deck(resp.remaining, resp.deck_id);
        return getCards(deck.id, 5)
    }
).then( cards => {
    player1 = new Player("P1", cards)
    return getCards(deck.id, 5)
}).then ( cards => {
    player2 = new Player("P2", cards)

    console.log(player1, player2)
    drawCards(player1, player2)
})

function drawCards(player1, player2){
    let hand1 = document.getElementById("hand-1");
    let hand2 = document.getElementById("hand-2");

    player1.cards.cards.forEach(card => {
        //card.image
        let img = document.createElement("img");
        img.src = card.image;

        img.addEventListener("click", () => {selectCardPlayer1(img, card)});
        hand1.appendChild(img)
    });

    player2.cards.cards.forEach(card => {
        //card.image
        let img = document.createElement("img");
        img.src = card.image;
        img.addEventListener("click", () => {selectCardPlayer2(img, card)});
        hand2.appendChild(img)
    });
}

function selectCardPlayer1(img, card){
    console.log(card.value)
    img.classList.toggle("selected-p1")
    player1.selectedCard = card.value;
}

function selectCardPlayer2(img, card){
    console.log(card.value)
    img.classList.toggle("selected-p2")
    player2.selectedCard = card.value;
}

let playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
    console.log(parseInt(player1.selectedCard) > parseInt(player2.selectedCard))

    if(player1.selectedCard > player2.selectedCard){
        alert("Ganador Jugador 1")
    }else{
        alert("Ganador Jugador 2")
    }
    
    
})





