class BattleCards {
    constructor(cards) {
        this.cards = cards;
        this.player1 = [];
        this.player2 = [];
        this.cardsOfRound = [];
        this.deckDead = [];
        this.scoreP1 = 0;
        this.scoreP2 = 0;

    }

    shuffleCards() {
        const min = 0;
        const max = this.cards.length - 1;
        let cardsRandom;

        this.cards.forEach(() => {
            cardsRandom = Math.floor(Math.random() * (max - min) + min);

            const selectedCard = this.cards[cardsRandom];

            this.cards.splice(cardsRandom, 1);
            this.cards.push(selectedCard);
        });


    };

    dealCards(player1, player2) {

    }

    checkHealth(cardHealth1, cardHealth2) {
        // Creio que aqui já direciono as cartas para o this.deckDead

        if (cardHealth1.health > cardHealth2.health) {
            this.scoreP1 += 1;

        } else {
            this.scoreP2 += 1;
        }
    }
        

    endGame() {
        this.scoreP1 || this.scoreP2 === 15;
    }




}