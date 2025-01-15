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

// crossword section

const crosswordGrid = [
  ["P", "A", "T", "I", "E", "N", "C", "E", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "L", "O", "L", "A", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "B", "U", "T", "T", "E", "R", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "H", "A", "T", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "T", "R", "U", "S", "T", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
];

const answers = [
  "PATIENCE",
  "HOPE",
  "LOLA",
  "PERCY",
  "BUTTER",
  "HAT",
  "TRUST"

];
// create crossword grid
function renderCrossword() {
  const crossword = document.getElementById("lola-crossword");
  crosswordGrid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const div = document.createElement("div");
      if (cell) {
        div.classList.add("cell", "filled");
        const input = document.createElement("input");
        input.setAttribute("maxlength", "1");
        input.dataset.row = rowIndex;
        input.dataset.col = cellIndex;
        div.appendChild(input);
      }
      crossword.appendChild(div);
    });
  });
}

function checkCrossword() {
  let correct = true;
  answers.forEach((word, index) => {
    let answer = '';
    if (index === 0) { // Across: Patience
      for (let i = 0; i < word.length; i++) {
        const input = document.querySelector(`input[data-row="0"][data-col="${i}"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 1) { // Down: Hope
      for (let i = 0; i < word.length; i++) {
        const input = document.querySelector(`input[data-row="${i}"][data-col="1"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 2) { // Across: Lola
      for (let i = 2; i < 6; i++) {
        const input = document.querySelector(`input[data-row="2"][data-col="${i}"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 3) { // Across: Percy
      for (let i = 2; i < 7; i++) {
        const input = document.querySelector(`input[data-row="4"][data-col="${i}"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 4) { // Across: Butter
      for (let i = 2; i < 8; i++) {
        const input = document.querySelector(`input[data-row="4"][data-col="${i}"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 5) { // Across: Hat
      for (let i = 3; i < 6; i++) {
        const input = document.querySelector(`input[data-row="6"][data-col="${i}"]`);
        answer += input.value.toUpperCase();
      }
    } else if (index === 6) { // Down: Trust
      for (let i = 8; i < 13; i++) {
        const input = document.querySelector(`input[data-row="${i}"][data-col="${5}"]`);
        answer += input.value.toUpperCase();
      }
    }

    if (answer !== word) {
      correct = false;
    }
  });

  const message = document.getElementById("message");
  if (correct) {
    message.textContent = "Congratulations! You completed the crossword!";
    message.className = 'message correct';
  } else {
    message.textContent = "Some answers are incorrect. Keep trying!";
    message.className = 'message wrong';
  }
}

renderCrossword();