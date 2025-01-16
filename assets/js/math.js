document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "submit") {
              alert("You clicked Submit!");
          } else {
              let gameType = this.getAttribute("data-type");
              alert(`You clicked ${gameType}`);
          }
      });
  }
});

/**
 * game "loop" when the user enters answer, script is called
 */
  function runGame() {

    // create random numbers for the game
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;
  }

  runGame();
  
  function checkAnswer() {
  
  }
  
  function calculateCorrectAnswer() {
  
  }
  
  function incrementScore() {
  
  }
  
  function incrementWrongAnswer() {
  
  }
  
  function displayAdditionQuestion() {
  
  }
  
  function displaySubtractQuestion() {
  
  }
  
  function displayMultiplyQuestion() {
    
  }