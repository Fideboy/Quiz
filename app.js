var currentQuestion = 0 ;
var quizContainer = document.querySelector('.quiz-container');
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById('options');
var nextButton = document.getElementById('nextBtn');

let questions = [
    {
        question: "1. What is the capital of France?",
        options: ["A. London", "B. Paris", "C. Rome", "D. Washington"],
        answer: 0
    },
    {
        question: "2. The first calculator was built by?",
        options: ["A. Marie Jacquad", "B. Balise Pascal", "C. Charles Babbage", "D. John Napier"],
        answer: 0
    },
    {
        question: "3. The outcome of a processed data in a computer is known as",
        options: ["A. raw fact", "B. information", "C. database", "D. computer result"],
        answer: 0
    }
];

function displayQuestion() {
    var currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = '';

    for (var i = 0; i < currentQ.options.length; i++) {
        var option = document.createElement('button');
        option.textContent = currentQ.options[i];
        option.value = i;
        option.addEventListener('click', checkAnswer);
        optionsElement.appendChild(option);
    };   
}
function checkAnswer(e) {
    var selectedOption = parseInt(e.target.value);
    var currentQ = questions[currentQuestion];

    if (selectedOption === currentQ.answer) {
        e.target.style.backgroundColor = 'green';
      } else {
        e.target.style.backgroundColor = 'red';
      }
    //e.target.style.backgroundColor = "blue";
}
Array.from(optionsElement.children).forEach(function (option) {
    option.disabled = true;
    if (parseInt(option.value) === currentQ.answer) {
      option.style.backgroundColor = 'green';
    }
  });

  nextButton.style.display = 'block';

  function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        nextButton.style.display = 'none';
      } else {
        quizContainer.innerHTML = '<h2>Quiz completed!</h2>';
      }
    }

    nextButton.addEventListener('click', nextQuestion);

displayQuestion();