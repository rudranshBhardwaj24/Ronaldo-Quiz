const quizData = [
  {
    question: "What is Cristiano Ronaldo's full name?",
    options: [
      "Cristiano Ronaldo dos Santos Aveiro",
      "Cristiano Ronaldo da Silva",
      "Cristiano Ronaldo Gomez",
      "Cristiano Ronaldo Nazario",
    ],
    answer: "Cristiano Ronaldo dos Santos Aveiro",
  },
  {
    question:
      "Which Portuguese club did Ronaldo start his professional career with?",
    options: ["FC Porto", "SL Benfica", "Sporting CP", "Boavista FC"],
    answer: "Sporting CP",
  },
  {
    question: "In which year did Ronaldo first win the Ballon d'Or?",
    options: ["2005", "2008", "2013", "2016"],
    answer: "2008",
  },
  {
    question: "What is Ronaldo's iconic goal celebration called?",
    options: ["The Jump", "The Roar", "The Siuuu", "The Fist Pump"],
    answer: "The Siuuu",
  },
  {
    question:
      "Who did Ronaldo score his famous bicycle kick goal against in the 2018 Champions League?",
    options: ["Bayern Munich", "Liverpool", "Juventus", "Atletico Madrid"],
    answer: "Juventus",
  },
  {
    question:
      "How many career hat-tricks has Ronaldo scored (across club and international matches)?",
    options: ["30+", "40+", "50+", "60+"],
    answer: "60+",
  },
  {
    question: "What is the name of Cristiano Ronaldo's clothing brand?",
    options: ["R7", "CR7", "Ronaldo Sport", "The CR Collection"],
    answer: "CR7",
  },
  {
    question:
      "Ronaldo holds the record for most goals in a single UEFA Champions League season. How many did he score?",
    options: ["14", "17", "20", "23"],
    answer: "17",
  },
  {
    question: "What is Ronaldo's jersey number for the Portugal national team?",
    options: ["10", "9", "17", "7"],
    answer: "7",
  },
];
const youWin = new window.Audio("/siuuuu.mp4");
const youLose = new window.Audio("");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
let score = 0;
// Function to shuffle and select 5 random questions
function getRandomQuestions() {
  const shuffled = quizData.sort(() => 0.5 - Math.random()); // Shuffle array randomly
  return shuffled.slice(0, 5); // Take the first 5 questions
}

// Get 5 random questions on game start
let currentQuestions = getRandomQuestions();
let currentQuestionIndex = 0;

function displayQuestion() {
  quizContainer.innerHTML = ""; // Clear previous question

  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Create question element
  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  questionEl.textContent = currentQuestion.question;
  quizContainer.appendChild(questionEl);

  // Create options buttons
  const optionsEl = document.createElement("div");
  optionsEl.classList.add("options");
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsEl.appendChild(button);
  });
  quizContainer.appendChild(optionsEl);
}

function checkAnswer(selectedOption) {
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Check if the selected option is one of the options in the current question
  if (currentQuestion.options.includes(selectedOption)) {
    if (selectedOption === currentQuestion.answer) {
      score++;
      document.getElementById("score").textContent = score; // Update score display
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  resultContainer.style.display = "block";
  quizContainer.style.display = "none";

  if (score >= 3) {
    youWin.play();
    resultContainer.innerHTML = "You win!";
  } else {
    resultContainer.innerHTML = "You lose!";
  }
}

// Start the game
displayQuestion();
