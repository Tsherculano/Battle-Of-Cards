const cards = [{
        name: 'monster01',
        img: 'monster01.png',
        health: 25
    },
    {
        name: 'monster02',
        img: 'monster02.png',
        health: 40
    },
    {
        name: 'monster03',
        img: 'monster03.png',
        health: 40
    },
    {
        name: 'monster04',
        img: 'monster04.png',
        health: 30
    },
    {
        name: 'monster05',
        img: 'monster05.png',
        health: 25
    },
    {
        name: 'monster06',
        img: 'monster06.png',
        health: 40
    },
    {
        name: 'monster07',
        img: 'monster07.png',
        health: 40
    },
    {
        name: 'monster08',
        img: 'monster08.png',
        health: 30
    },

];

const battleCards = new BattleCards(cards);
battleCards.shuffleCards();

window.addEventListener('load', event => {
    let player1 = '';
    let player2 = '';
    battleCards.cards.forEach((pic, index) => {

        if (index < battleCards.cards.length / 2) {
            player1 += `<div class="card" data-card-name="${pic.name}">`;
            player1 += `<div class="imgOfCard" style="background: url(./images/${pic.img}) no-repeat; background-size: cover;">
            <span>${pic.name}</span>
            <span id="health-p1">${pic.health}</span>
            </div>`;
            player1 += `</div>`;
        } else {
            player2 += `<div class="card" data-card-name2="${pic.name}">`;
            player2 += `<div class="imgOfCard" style="background: url(./images/${pic.img}) no-repeat; background-size: cover;">
            <span>${pic.name}</span>
            <span id="health-p2">${pic.health}</span>
            </div>`;
            player2 += `</div>`;
        }
    });

    document.querySelector('#display-card-p1').innerHTML = player1;
    document.querySelector('#display-card-p2').innerHTML = player2;

    document.querySelectorAll('.card').forEach(card =>{
        
        card.addEventListener('click', () => {
            console.log(`A CARTA FOI CLICADA`)
            
            if(battleCards.cardsOfRound.length < 2){
                
                battleCards.cardsOfRound.push(card);
                console.log(battleCards)

                if(battleCards.cardsOfRound.length === 2) {
                    
                    const monsterHealth1 = +battleCards.cardsOfRound[0].children[0].children[1].innerText;
                    const monsterHealth2 = +battleCards.cardsOfRound[1].children[0].children[1].innerText;
                    battleCards.player1 = monsterHealth1;
                    battleCards.player2 = monsterHealth2;
                   
                    console.log(battleCards);
                    console.log(monsterHealth1, monsterHealth2);


                    const checkHealth = battleCards.checkHealth(monsterHealth1, monsterHealth2);

                    document.querySelector('#scoreP1').innerHTML = battleCards.scoreP1;
                    document.querySelector('#scoreP2').innerHTML = battleCards.scoreP2;
                }
            }
            
    
            
      
           
        
        
        })
        
    })
    
});


