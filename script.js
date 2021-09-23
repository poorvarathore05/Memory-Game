const gameContainer = document.getElementById("game");

let card1 = null;
let card2 = null;
let clickCards = 0;

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

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
 var clrArray = [];

    function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let color = event.target.classList[0];
    card1 = card2;
    card2 = event.target;
  
    clickCards++
    card2.style = `background-color : ${color}`
    
    if(clickCards == 2){
     
      clickCards = 0;
       if(card1.classList[0] !== card2.classList[0]){
        clrArray.push(setTimeout(function(){
        card1.style = `background-color :transparent`
        card2.style = `background-color :transparent`
        },500));
        
       }
  }
    
}

// when the DOM loads
createDivsForColors(shuffledColors);


function randomColor(){

   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
    
   return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter')
const interValidColor = setInterval(function(){
  for(let letter of letters){
    letter.style.color = randomColor();
  }
},500)

