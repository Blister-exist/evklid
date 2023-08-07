/*
let card_1 = document.getElementsByClassName('fragment-1')[0];
let card_2 = document.getElementsByClassName('fragment-2')[0];
let card_3 = document.getElementsByClassName('fragment-3')[0];
let card_4 = document.getElementsByClassName('fragment-4')[0];

let butt_1 = document.getElementById('fragment-1');
let butt_2 = document.getElementById('fragment-2');
let butt_3 = document.getElementById('fragment-3');
let butt_4 = document.getElementById('fragment-4');

function changeCard(button)
{
    obj = button.srcElement;
    switch(obj)
    {
        case butt_1:
            card_1.style.display = 'flex';
            card_2.style.display = 'none';
            card_3.style.display = 'none';
            card_4.style.display = 'none';
            break;
        case butt_2:
            card_1.style.display = 'none';
            card_2.style.display = 'flex';
            card_3.style.display = 'none';
            card_4.style.display = 'none';
            break;
        case butt_3:
            card_1.style.display = 'none';
            card_2.style.display = 'none';
            card_3.style.display = 'flex';
            card_4.style.display = 'none';
            break;
        case butt_4:
            card_1.style.display = 'none';
            card_2.style.display = 'none';
            card_3.style.display = 'none';
            card_4.style.display = 'flex';
            break;
    }
}

butt_1.addEventListener('click', changeCard);
butt_2.addEventListener('click', changeCard);
butt_3.addEventListener('click', changeCard);
butt_4.addEventListener('click', changeCard);
*/
let how = {
    cards: [
        {
        card: document.getElementsByClassName('fragment-1')[0],
        button: document.getElementById('fragment-1')
        },
        {
        card: document.getElementsByClassName('fragment-2')[0],
        button: document.getElementById('fragment-2')
        },
        {
        card: document.getElementsByClassName('fragment-3')[0],
        button: document.getElementById('fragment-3')
        },
        {
        card: document.getElementsByClassName('fragment-4')[0],
        button: document.getElementById('fragment-4')
        }
    ],

    cardVisible: function(target) {
        for (elem in this.cards){
            let obj = this.cards[elem];
            if (this.cards[elem].button === target.button){
                this.cards[elem].card.style.display = 'flex';
            }
            else{
                this.cards[elem].card.style.display = 'none';
            }
        }
    }
}

how.cards.forEach((item) => {item.button.addEventListener('click', () => {how.cardVisible(item)})})