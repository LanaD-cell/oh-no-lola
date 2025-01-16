// confetti
const button = document.querySelector('#con-button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti()

button.addEventListener('click', () => {
  jsConfetti.addConfetti()
});

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

// math game
