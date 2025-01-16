// quiz for each section

function checkAnswer(quizId, correctAnswer) {
  const selectedOption = document.querySelector(`#${quizId} input[name="${quizId}"]:checked`);
  const resultElement = document.getElementById(`result${quizId.slice(-1)}`);
  if (selectedOption) {
    const selectedValue = parseInt(selectedOption.value);
    if (selectedValue === correctAnswer) {
      resultElement.textContent = "Correct! Great job!";
      resultElement.className = "result correct";
    } else {
      resultElement.textContent = "Wrong answer. Try again!";
      resultElement.className = "result wrong";
    }
  } else {
    resultElement.textContent = "Please select an answer.";
    resultElement.className = "result wrong";
  }
}

// confetti
const button = document.querySelector('#con-button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti()

button.addEventListener('click', () => {
  jsConfetti.addConfetti()
});

// math game
//document.addEventListener("DOMContentLoaded", function() {
  //let buttons = document.getElementsById("button");

  //for(let button of buttons) {
    //button.addEventListener("click", function() {
    
    })
  }
})

function runGame() {

}
function checkAnswer(){

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
function displayDivideQuestion() {

}
function displayTimesQuestion() {

}




