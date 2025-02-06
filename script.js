// Trigonometry Quiz Questions
const trigonometryQuizData = [
  { question: "What is sin(90°)?", options: ["0", "1", "0.5", "√2/2"], answer: "1" },
  { question: "What is cos(0°)?", options: ["1", "0", "∞", "√3/2"], answer: "1" },
  { question: "What is tan(45°)?", options: ["1", "0", "∞", "√3"], answer: "1" },
  { question: "What is the value of cot(30°)?", options: ["√3", "1/√3", "1", "0"], answer: "√3" },
  { question: "What is sec(60°)?", options: ["2", "√2", "√3", "2/√3"], answer: "2" },
  { question: "If sin(A) = 3/5, find cos(A).", options: ["4/5", "3/5", "5/4", "1"], answer: "4/5" },
  { question: "Find the hypotenuse when adjacent side = 6 and opposite side = 8.", options: ["10", "14", "√100", "8"], answer: "10" },
  { question: "What is sin²(45°) + cos²(45°)?", options: ["1", "0.5", "2", "√2"], answer: "1" },
  { question: "Which identity is true?", options: ["sin(A) = 1/csc(A)", "tan(A) = 1/cos(A)", "cot(A) = sin(A)", "sec(A) = tan²(A)"], answer: "sin(A) = 1/csc(A)" },
  { question: "What is tan²(A) + 1 equal to?", options: ["sec²(A)", "cos²(A)", "sin²(A)", "cot²(A)"], answer: "sec²(A)" }
];

// Statistics Quiz Questions
const statisticsQuizData = [
  { question: "What is the formula for mean in the direct method?", options: ["Σfixi/Σfi", "Σfiui/h", "A + ∑fiui/Σfi", "None"], answer: "Σfixi/Σfi" },
  { question: "How do you calculate the median class?", options: ["Class with highest frequency", "Middle class in cumulative frequency table", "First class", "Last class"], answer: "Middle class in cumulative frequency table" },
  { question: "If mean = 20, Σfixi = 200, what is Σfi?", options: ["10", "20", "30", "40"], answer: "10" },
  { question: "What is the mode formula?", options: ["L + h(fm-f1)/(2fm-f1-f2)", "A + Σfidi/Σfi", "Σfixi/Σfi", "L + Σfi/h"], answer: "L + h(fm-f1)/(2fm-f1-f2)" },
  { question: "Find the mean of 10, 20, 30.", options: ["20", "15", "10", "25"], answer: "20" },
  { question: "What is the step deviation method formula for mean?", options: ["A + h(Σfiui/Σfi)", "Σfixi/Σfi", "L + Σfidi/Σfi", "None"], answer: "A + h(Σfiui/Σfi)" },
  { question: "Which is NOT a measure of central tendency?", options: ["Mean", "Median", "Mode", "Standard deviation"], answer: "Standard deviation" },
  { question: "The sum of deviations of observations from the mean is always:", options: ["Positive", "Negative", "Zero", "None"], answer: "Zero" },
  { question: "Which measure is most affected by extreme values?", options: ["Mean", "Median", "Mode", "Range"], answer: "Mean" },
  { question: "In a cumulative frequency table, the last frequency is:", options: ["Median", "Sum of all frequencies", "Mode", "Mean"], answer: "Sum of all frequencies" }
];

// Load Quiz (Shared Function)
function loadQuiz(containerId, quizData) {
  const quizContainer = document.getElementById(containerId);
  if (!quizContainer) return;

  quizContainer.innerHTML = ""; // Clear previous content
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p><strong>${index + 1}. ${q.question}</strong></p>
      ${q.options.map(option => `
        <label>
          <input type="radio" name="q${index}" value="${option}">
          ${option}
        </label>
      `).join("")}
    `;
    quizContainer.appendChild(questionDiv);
  });
}

// Submit Trigonometry Quiz
function submitQuiz() {
  let score = 0;
  trigonometryQuizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  document.getElementById("result").textContent = `Your score: ${score}/${trigonometryQuizData.length}`;
}

// Submit Statistics Quiz
function submitStatisticsQuiz() {
  let score = 0;
  statisticsQuizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  document.getElementById("statistics-result").textContent = `Your score: ${score}/${statisticsQuizData.length}`;
}

// Determine which quiz to load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quiz-container")) {
    loadQuiz("quiz-container", trigonometryQuizData);
  }
  if (document.getElementById("statistics-quiz-container")) {
    loadQuiz("statistics-quiz-container", statisticsQuizData);
  }
});
