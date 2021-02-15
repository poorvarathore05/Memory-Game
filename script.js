const gameContainer = document.getElementById("game");

let card1 = null;
let card2 = null;
let filpCards = false;
let clickCards = 0;
var cardArray = [];

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let location  = 1;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute("isSelected","false");
    newDiv.setAttribute("name","Card_" + location++);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
 var visibleColor = {
      red:0,
      blue:0,
      green:0,
      orange:0,
      purple:0
 }
 var clrArray = [];
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let color = event.target.classList[0];
  //cardArray = [];
 // let card = event.target;
  //card1 = card2;
  //card2 = event.target;
  // currentCard.style.backgroundColor = currentCard.classList[0];
  if(cardArray.length == 0){
    //console.log("IF block " , event.target.getAttribute('name'));
    cardArray[0] = event.target;
    cardArray[0].style = `background-color : ${color}`
    clickCards++;
  }else{
    console.log("else block");
    if(cardArray[0].getAttribute('name') !== event.target.getAttribute('name')){
     // console.log("if in else block" , event.target.getAttribute('name')
    
      cardArray[1] = event.target;
      cardArray[1].style = `background-color : ${color}`
      clickCards++;
    }
  }
  
  
  //clickCards++
  //card2.style = `background-color : ${color}`

    if (clickCards === 2 && cardArray.length === 2){
      //filpCards = true;
     // card2 = event.target;
     
     // console.log("Card 1 Color", cardArray[0].classList[0]);
      //console.log("Card 2 Color", cardArray[1].classList[0]);
      if(cardArray[0].classList[0] !== cardArray[1].classList[0]){
      //console.log("Inside If condition");
     // console.log(filpCards);
       var stoptimeOut =  setTimeout(function(){
        cardArray[0].style = `background-color :transparent`
        cardArray[1].style = `background-color :transparent`
        //clickCards = 0;
        //cardArray = [];
        },500)
        
    } 
    clickCards = 0;
    cardArray = [];
  }

    //event.target.style = `background-color : ${color}`
    //     clrArray.push (setTimeout(function(){
    //   event.target.style = `background-color :transparent`
    // }))

}

// when the DOM loads
createDivsForColors(shuffledColors);
