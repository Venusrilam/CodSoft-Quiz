let quiz = [];
let currentQuestion = 0;
let score = 0;

function addQuestion(){

    let question =
    document.getElementById("question").value;

    let option1 =
    document.getElementById("option1").value;

    let option2 =
    document.getElementById("option2").value;

    let option3 =
    document.getElementById("option3").value;

    let option4 =
    document.getElementById("option4").value;

    let correct =
    document.getElementById("correct").value;

    if(question === ""){
        alert("Enter Question");
        return;
    }

    quiz.push({
        question:question,
        options:[
            option1,
            option2,
            option3,
            option4
        ],
        correct:correct
    });

    alert("Question Added");

    document.getElementById("question").value="";
    document.getElementById("option1").value="";
    document.getElementById("option2").value="";
    document.getElementById("option3").value="";
    document.getElementById("option4").value="";
    document.getElementById("correct").value="";
}

function startQuiz(){

    if(quiz.length===0){
        alert("Add Questions First");
        return;
    }

    currentQuestion=0;
    score=0;

    showQuestion();
}

function showQuestion(){

    if(currentQuestion>=quiz.length){
        document.getElementById("quizSection").innerHTML="";
        document.getElementById("result").innerHTML=
        "Quiz Completed! Score: "
        + score + "/" + quiz.length;
        return;
    }

    let q = quiz[currentQuestion];

    let html = `
    <div class="question-box">
    <h3>${q.question}</h3>

    <div class="option">
    <input type="radio" name="answer" value="1"> ${q.options[0]}
    </div>

    <div class="option">
    <input type="radio" name="answer" value="2"> ${q.options[1]}
    </div>

    <div class="option">
    <input type="radio" name="answer" value="3"> ${q.options[2]}
    </div>

    <div class="option">
    <input type="radio" name="answer" value="4"> ${q.options[3]}
    </div>

    <button onclick="nextQuestion()">Next</button>

    </div>
    `;

    document.getElementById("quizSection").innerHTML =
    html;
}

function nextQuestion(){

    let answer =
    document.querySelector(
    'input[name="answer"]:checked');

    if(!answer){
        alert("Select an Option");
        return;
    }

    if(answer.value ==
       quiz[currentQuestion].correct){
        score++;
    }

    currentQuestion++;

    showQuestion();
}