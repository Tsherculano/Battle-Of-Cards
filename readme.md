# The lines below were used for logical elaboration od the game step by step:
1. Composition of cards: 
    * 28 cards => All have only the health property that randomly varies their value.
    * First, we will shuffle.
        > How? Reply: Math.floor -> Math.random following pattern HM of code.
    * Deal the cards to player 1 and deal the cards to player 2.
        > How? Reply: splice to remove and push to add to the new array(player1, player2)
    * Each player will CLICK on the card for the current move.
        > How? Reply: event onclick? I need work my logical for this topic.
    * After selecting hte. cards with the mouse pointer, the values will be compared.
        > How? Reply: Take the properties "health" with card.name.health and compare with if and else, remembering that all cards in this comparison will be transferred to this.deckDead and add a point for the winning player. This point will be added to this.score (number of player)
    * Finally, a random card from this.cards will be addd for each player.
        > How? Reply: 
    * Now, start new roud  until one of the players to do x pointer
        > How? Reply: thi.deckDead === this.cards.length / 2
    _______________________________________________________________________________
    ## Implement this properties for the game!
    * this.cards -> array with cards necessary to player;
    * this.player1 -> array with cards randomly distributed from this.cards;
    * this.player2 -> array with cards randomly distributed from this.cards;
    * this.tableCards -> array with cards selected by the players;DEPRECATED
    * this.deckDead -> array with cards used in the round;
    * this.scoreP1 -> number with count of pointers based in condicitional the line 10;
    * this.scoreP2 -> number with count of pointers based in condicitional the line 10;
    ________________________________________________________________________________
    ## Implement the methods for the game to work!
    * shuffleCards()
        > How? Reply: Use method mentioned in line 5;
    * healthComp()
        > How? Reply: Use method mentioned in line 11;
    * FinishGame()
        > How? Reply: In ppreparation process;

    ### Organizational structure of the application (GAME):
        ├── project-one
            ├── index.
            └── readme.md 
                ├── CSS
                │    └── style.css
                ├── images
                │    └── card01.png
                ├── jS
                        ├── battleCards.js
                        └── index.js
