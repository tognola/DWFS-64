class Deck{
    cards_left;
    size;
    id;

    constructor(size, id){
        this.size = size;
        this.id = id;
        this.cards_left = size;
    }
}

class Player {
    name;
    cards;
    points;
    selectedCard;

    constructor(name, cards){
        this.name = name;
        this.cards = cards;
        this.poins = 0;
    }

    takeCard(){

    }

    playCard(){

    }

    addPoints(){

    }
}