// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "submit") {
              checkAnswer();
          } else {
              let gameType = this.getAttribute("data-type");
              runGame(gameType);
          }
      });
  }

  runGame("addition");
});

/**
 * game "loop" when the user enters answer, script is called
 */
  function runGame(gameType) {

  //create random numbers for the game
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2); 
  } else {
    alert(`Unknown game type; ${gameType}`);
    throw `Unknow game type: ${gameType}. Aborting"`;
  }
  }
  /**
   * check the user answer against the calculatedCorrectAnswer (read answer from DOM)
   */
  function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];
  // message to the user after submitting
    if(isCorrect) {
      alert("Correct, well done!");
    } else {
      alert(`Aaaaah, you answered ${userAnswer}. The correct answer is ${calculateAnswer[0]}`);
    }
     runGame(calculateAnswer[1]);
  }
  /**
  * Get the numbers and operators from the DOM
  */ 
  function calculateCorrectAnswer() {

    //parseInt returns whole number from DOM, not string
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
      return[operand1 + operand2, "addition"];
    } else {
      alert(`Unimplemented operator ${operator}`);
      // throw used to show a error message
      throw `Unimplemented operator ${operator}. Aborting!`;
    }
  }
  
  function incrementScore() {
  
  }
  
  function incrementWrongAnswer() {
  
  }
  
  // create the different math functions, with the random numbers created in line24
  function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
  
  }
  
  function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
  
  }

  function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
    
  }
  
  function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
    
  }