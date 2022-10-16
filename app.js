const cardArray = [
  {
    name:'fries',
    img:'image/fries.png',
  },
  {
    name:'cheeseburger',
    img:'image/cheeseburger.png',
  },
  {
    name:'hotdog',
    img:'image/hotdog.png',
  },
  {
    name:'ice-cream',
    img:'image/ice-cream.png',
  },
  {
    name:'milkshake',
    img:'image/milkshake.png',
  },
  {
    name:'pizza',
    img:'image/pizza.png',
  },
  {
    name:'fries',
    img:'image/fries.png',
  },
  {
    name:'cheeseburger',
    img:'image/cheeseburger.png',
  },
  {
    name:'hotdog',
    img:'image/hotdog.png',
  },
  {
    name:'ice-cream',
    img:'image/ice-cream.png',
  },
  {
    name:'milkshake',
    img:'image/milkshake.png',
  },
  {
    name:'pizza',
    img:'image/pizza.png',
  },
]

let cardChosen = [];
let cardChosenId = [];
let match=0;
let unMatch =0;

cardArray.sort(()=>0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard(){
  for(let i=0;i<cardArray.length;i++)
  {
    const card = document.createElement('img');
    card.setAttribute('src','image/blank.png');
    card.setAttribute('data-id',i);
    gridDisplay.appendChild(card);
    card.addEventListener('click',flipCard);
  }
}

createBoard();

function flipCard(){
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute('src',cardArray[cardId].img);
  if(cardChosen.length===2)
  {
    setTimeout(checkMatch,500);
  }
}

function checkMatch()
{ 
  const cards = document.querySelectorAll('#grid img'); // can do 'img' only
  const scoreDisplay = document.querySelector('#score');
  const matchDisplay = document.querySelector('#matchId');
  const unMatchDisplay = document.querySelector('#unMatchId');
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];

  if(optionOneId==optionTwoId)
  {
    cards[optionOneId].setAttribute('src','image/blank.png');
    cards[optionTwoId].setAttribute('src','image/blank.png');
    cardChosenId=[];
    alert('Please, Restart Game');
  }

  console.log('check for Matching');
  if(cardChosen[0]==cardChosen[1])
  {
    alert('you found a match');
    cards[optionOneId].setAttribute('src','image/white.png');
    cards[optionTwoId].setAttribute('src','image/white.png');
    cards[optionOneId].removeEventListener('click',flipCard);
    cards[optionTwoId].removeEventListener('click',flipCard);
    match = match +1;
    if(match>=6)
    {
      document.querySelector("#Congra").innerHTML="Congralations, You found them all";
    }
    console.log(match);
  } else{
    alert('Sorry try again');
    cards[optionOneId].setAttribute('src','image/blank.png');
    cards[optionTwoId].setAttribute('src','image/blank.png');
    unMatch = unMatch +1;
    console.log(unMatch);
  }
  cardChosen=[];
  cardChosenId=[];
  matchDisplay.innerHTML=match;
  unMatchDisplay.innerHTML=unMatch;
}