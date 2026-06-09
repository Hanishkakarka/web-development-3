const quizData = [
{
    question: "Which language is used for webpage structure?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    answer: "HTML"
},
{
    question: "Which language is used for styling?",
    options: ["CSS", "HTML", "Java", "C"],
    answer: "CSS"
},
{
    question: "Which language adds interactivity?",
    options: ["Python", "JavaScript", "C++", "SQL"],
    answer: "JavaScript"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");

        btn.onclick = () => {
            if(option === q.answer){
                score++;
            }
            nextBtn.style.display = "block";
        };

        optionsEl.appendChild(btn);
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent =
            `Your Score: ${score} / ${quizData.length}`;
    }
});

loadQuestion();

async function getJoke() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        document.getElementById("joke").innerText =
            `${data.setup} - ${data.punchline}`;

    } catch(error) {
        document.getElementById("joke").innerText =
            "Failed to fetch joke.";
    }
}