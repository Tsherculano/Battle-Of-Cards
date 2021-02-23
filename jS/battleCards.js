class BattleCards {
    constructor(cards) {
        this.cards = cards;
        this.player1 = [];
        this.player2 = [];
        this.cardsOfRound = [];
        this.scoreP1 = 0;
        this.scoreP2 = 0;

    }

    shuffleCards() {
        const min = 0;
        const max = this.cards.length;
        let cardsRandom;

        this.cards.forEach(() => {
            cardsRandom = Math.floor(Math.random() * (max - min) + min);

            const selectedCard = this.cards[cardsRandom];

            this.cards.splice(cardsRandom, 1);
            this.cards.push(selectedCard);
        });
    };

    checkHealth(monsterHealth1, monsterHealth2) {
        
        if (monsterHealth1 > monsterHealth2) {
            this.scoreP1 += 1;

        } else {
            this.scoreP2 += 1;
        }
    }
        
    endGame() {
        this.scoreP1 || this.scoreP2 === 15;
    }
}