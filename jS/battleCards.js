class BattleCards {
    constructor(cards) {
        this.cards = cards;
        this.player1 = [];
        this.player2 = [];
        this.cardsOfRound = [];
        this.tableCards = [];
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
        
        if (monsterHealth1 === monsterHealth2) {
            this.scoreP2 += 0;
            this.scoreP2 += 0;

        } else if(monsterHealth1 > monsterHealth2) {
            this.scoreP1 += 1;
        } else {
            this.scoreP2 += 1;
        }
    }
        
    endGame(scoreP1, scoreP2) {

    
        if(scoreP1 >  scoreP2 && scoreP1 > 3 && scoreP2 < 2) {
            setTimeout(() => {
                document.querySelector('#tableCards').innerHTML = "<button onclick='restartGame()'>PLAY AGAIN</button>"
            },1200)
            document.querySelector('#scoreP1').innerHTML = 'WIN';
            document.querySelector('#scoreP2').innerHTML = 'LOSE';
        

        } else if(scoreP2 > scoreP1 && scoreP2 > 3 && scoreP1 < 2) {
            setTimeout(() => {
                document.querySelector('#tableCards').innerHTML = "<button onclick='restartGame()'>PLAY AGAIN</button>"
            },1200)
            document.querySelector('#scoreP1').innerHTML = 'LOSE';
            document.querySelector('#scoreP2').innerHTML = 'WIN';
            

        }
    

    }
}