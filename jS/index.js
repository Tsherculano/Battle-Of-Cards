const cards = [{
        name: 'monster1',
        img: 'monster1.png',
        health: 80
    },
    {
        name: 'monster2',
        img: 'monster2.png',
        health: 60
    },
    {
        name: 'monster3',
        img: 'monster3.png',
        health: 120
    },
    {
        name: 'monster4',
        img: 'monster4.png',
        health: 70
    },
    {
        name: 'monster5',
        img: 'monster5.png',
        health: 55
    },
    {
        name: 'monster6',
        img: 'monster6.png',
        health: 65
    },
    {
        name: 'monster7',
        img: 'monster7.png',
        health: 90
    },
    {
        name: 'monster8',
        img: 'monster8.png',
        health: 50
    },
    {
        name: 'monster9',
        img: 'monster9.png',
        health: 120
    },
    {
        name: 'monster10',
        img: 'monster10.png',
        health: 90
    },

];

const battleCards = new BattleCards(cards);
battleCards.shuffleCards();

function restartGame () {
    window.location.reload();
}

window.addEventListener('load', event => {
    let player1 = '';
    let player2 = '';
    battleCards.cards.forEach((card, index) => {

        if (index < battleCards.cards.length / 2) {
            player1 += `<div class="card" data-card-name="${card.name}" data-card-health="${card.health}" player="1">`;
            player1 += `<div class="imgOfCard" img-name="${card.img}" style="background: url(./images/${card.img}) no-repeat; background-size: cover;">
            <span class="pic-name">${card.name}</span>
            <span class="pic-health">${card.health}</span>
            </div>`;
            player1 += `</div>`;
        } else {
            player2 += `<div class="card" data-card-name="${card.name}" data-card-health="${card.health}" player="2">`;
            player2 += `<div class="imgOfCard" img-name="${card.img}" style="background: url(./images/${card.img}) no-repeat; background-size: cover;">
            <span class="pic-name">${card.name}</span>
            <span class="pic-health">${card.health}</span>
            </div>`;
            player2 += `</div>`;
        }
    });



    document.querySelector('#display-card-p1').innerHTML = player1;
    document.querySelector('#display-card-p2').innerHTML = player2;

    document.querySelectorAll('.card').forEach(card => {

        card.addEventListener('click', () => {



            if (battleCards.cardsOfRound.length < 2) {

                battleCards.cardsOfRound.push(card);
                
                
                card.classList.add('cardselected');
                

                if (battleCards.cardsOfRound.length === 2) {

                    let htmlOfTable = '';
                    battleCards.cardsOfRound.forEach(card => {

                        htmlOfTable += `<div class="card" data-card-name="${card.getAttribute('data-card-name')}">`;
                        htmlOfTable += `<div class="imgOfCard" style="background: url(./images/${card.children[0].getAttribute('img-name')}) no-repeat; background-size: cover;">
                        <span class="pic-name">${card.getAttribute('data-card-name')}</span>
                        <span class="pic-health">${card.getAttribute('data-card-health')}</span>
                        </div>`;
                        htmlOfTable += `</div>`;
                        console.log(card.getAttribute('data-card-name'));
                    })
    
                    document.querySelector('#tableCards').innerHTML = htmlOfTable;
 
                    const monsterHealth1 = +battleCards.cardsOfRound[0].children[0].children[1].innerText;
                    const monsterHealth2 = +battleCards.cardsOfRound[1].children[0].children[1].innerText;
                    battleCards.player1 = monsterHealth1;
                    battleCards.player2 = monsterHealth2;

                    battleCards.checkHealth(monsterHealth1, monsterHealth2);


                    document.querySelector('#scoreP1').innerHTML = battleCards.scoreP1;
                    document.querySelector('#scoreP2').innerHTML = battleCards.scoreP2;
                    const scoreP1 = battleCards.scoreP1;
                    const scoreP2 = battleCards.scoreP2;
                    battleCards.cardsOfRound[0].classList.remove('cardselected')
                    battleCards.cardsOfRound[1].classList.remove('cardselected')

                    if(battleCards.cardsOfRound[0].getAttribute('player') === "1") {
                        document.querySelector('#display-card-p1').removeChild(battleCards.cardsOfRound[0]);
                        document.querySelector('#display-card-p2').removeChild(battleCards.cardsOfRound[1]); 
                    } else {
                        document.querySelector('#display-card-p1').removeChild(battleCards.cardsOfRound[1]);
                        document.querySelector('#display-card-p2').removeChild(battleCards.cardsOfRound[0]); 
                    }

                    setTimeout(function(){
                        document.querySelector('#tableCards').innerHTML = '';
                    }, 1000)

                    battleCards.endGame(scoreP1, scoreP2);

                    battleCards.cardsOfRound = [];
                   


                }


            }

        })

    })

});