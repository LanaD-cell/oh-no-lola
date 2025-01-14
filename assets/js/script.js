// create quiz

// constant data to be used
const quizQuestions = [{
        question: "What lesson did Lola learn when helping Percy the porcupine with his hat?",
        options: [
            "Always trust your instincts",
            "It’s important to be kind and helpful to others, even when you don’t expect it",
            "You should never help others",
            "Don’t talk to strangers"
        ],
        answer: "It’s important to be kind and helpful to others, even when you don’t expect it"
    },


    {
        question: "What advice did Lola give to Butter the caterpillar about flying school?",
        options: ["Don’t worry about change; it will happen when it’s time.",
            "Never learn something new because it might be scary.",
            "You should leave flying school immediately.",
            "Only caterpillars who already know how to fly should go to school."
        ],
        answer: "Don’t worry about change; it will happen when it’s time."
    },

    {
        question: "Why did Lola decide to help the baby fox, even though her mommy warned her about being careful with foxes?",
        options: ["Lola believed all foxes were bad and wanted to teach it a lesson.", "Lola felt sorry for the baby fox and decided to help it, despite her fears.", "Lola was afraid of the baby fox and ran away.", "Lola was angry at the fox for being stuck in the snare."],
        answer: "Lola felt sorry for the baby fox and decided to help it, despite her fears."

    },


    {
        question: "What was the main lesson Lola learned from helping the baby fox?",
        options: ["Always trust your mommy’ s advice without question.", "It’ s important to trust your heart and be kind, even when you’ re scared.", "Never approach any animals you haven’ t met before.", "Foxes are always dangerous and should never be helped."],
        answer: "It’ s important to trust your heart and be kind, even when you’ re scared."

    },


    {
        question: "What did Lola feel after her first day at school?",
        options: ["She felt scared and wanted to leave school.", "She felt proud of what she had learned and accomplished.", " She felt like she didn’ t belong and was alone.", "She felt disappointed and didn’ t want to come back."],
        answer: "She felt proud of what she had learned and accomplished."

    },


    {
        question: "What was the most important lesson Lola learned throughout her adventure?",
        options: ["Always take the easiest path.", "Helping others and learning from experiences is what makes us grow.", "It’ s better to avoid making new friends.", "Being afraid will stop you from doing anything important."],
        answer: "Helping others and learning from experiences is what makes us grow."

    },


    {
        question: "What did Lola do when she saw other animals at school?",
        options: ["She stayed quiet and didn’ t talk to anyone.", "She ignored everyone and sat alone.", "She made new friends and shared her own adventure stories.", "She complained about the forest and the school."],
        answer: "She made new friends and shared her own adventure stories."

    },
    {
        question: "Why did Lola feel proud after her first day at school?",
        options: ["She was the best student in her class.", "She was the only one who arrived at school first.", "She didn 't have to learn anything.", "She had helped others during her journey and made new friends at school."],
        answer: "She had helped others during her journey and made new friends at school."

    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");


let currentQuestion = 0;
let score = 0;

//show question
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

//show answer
function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizQuestions[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

//show result
function showResult() {
quiz.innerHTML = `
<h1>Quiz Completed!</h1>
<p>Your score is: ${score}/${quizQuestions.length}</p>
`;
}

showQuestion();

// confetti
const button = document.querySelector('#con-button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti()

button.addEventListener('click',() => {
    jsConfetti.addConfetti()
}
);