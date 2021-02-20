const cards = [
    {
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
    
];

const battleCards = new BattleCards(cards);
battleCards.shuffleCards();

window.addEventListener('load', event => {
    let html = '';
    battleCards.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="card-img" style="background: url(./images/${pic.img}) no-repeat; background-size: cover; ">
      <span>${pic.name}</span>
      <span>${pic.health}</span>
      </div>`;
      html += `</div>`;
    });

    document.querySelector('#display-card-p1').innerHTML = html;
    document.querySelector('#display-card-p2').innerHTML = html;


  });






