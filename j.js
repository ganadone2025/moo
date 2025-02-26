const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        answer: "Blue Whale"
    }
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((data, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${data.question}</p>`;
        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");
        data.options.forEach(option => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
            optionsList.appendChild(listItem);
        });
        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function showResult() {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === data.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

document.getElementById("submit").addEventListener("click", showResult);

loadQuiz();