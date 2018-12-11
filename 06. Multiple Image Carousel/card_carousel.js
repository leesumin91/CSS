var cardIndex = 1;
var showCount = 4;

showCard(cardIndex);

function nextCard(){
  showNextCard(cardIndex += 1);
}

function prevCard(){
  showPrevCard(cardIndex -= 1);

}

function showCard(index){
  var i;
  var cards = document.getElementsByClassName("card");

  if(index + showCount - 1 > cards.length) {cardIndex--}
  if(index < 1) {cardIndex = 1}

  for(i=0;i<cards.length;i++){
    cards[i].style.display = "none";
  }

  for(i=cardIndex;i<cardIndex + showCount;i++){
    cards[i-1].style.display = "inline-block";
  }

}

function showNextCard(index){
  var i;
  var cards = document.getElementsByClassName("card");

  if(index + showCount - 1 > cards.length) {cardIndex--}

  for(i=0;i<cards.length;i++){
    cards[i].style.display = "none";
  }

  for(i=cardIndex;i<cardIndex + showCount;i++){
    cards[i-1].style.display = "inline-block";
  }

  cards[cardIndex + showCount - 2].className += " fade";
}

function showPrevCard(index){
  var i;
  var cards = document.getElementsByClassName("card");

  if(index < 1) {cardIndex = 1}

  for(i=0;i<cards.length;i++){
    cards[i].style.display = "none";
  }

  for(i=cardIndex;i<cardIndex + showCount;i++){
    cards[i-1].style.display = "inline-block";
  }

  cards[cardIndex-1].className += " fade";
}