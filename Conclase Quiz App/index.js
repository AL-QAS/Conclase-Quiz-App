const questions = [{
    question: 'What does HTML stand for?',
    a:"Hyper Trainer Marking Language",
    b:"Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct:'c'
},
{
    question: "Which of the following is the correct structure for an HTML document?",
    a: "<html><head></head><body></body></html>",
    b:  "<head><html></html><body></body></head>",
    c:  "<body><head></head><html></html></body>",
    d:  "<html><body></body><head></head></html>",
    correct:'a'
},
{
    question: "Which HTML element is used to define the title of a document?",
    a: "<head>",
    b:  "<title>",
    c:  "<header>",
    d:  "<top>",
    correct:'b'
},
{
    question: "What is the purpose of the <body> tag in HTML?",
    a:  "It defines the document's head section.",
    b:  "It contains all the content such as text, images, and links.",
    c:  "It is used to define the main content of an HTML document.",
    d:  "It specifies the body of the email content in HTML.",
    correct:'b'
},
]

const quiz = document.querySelector('.quiz')
const questionsInput = document.querySelector('.question');
const answerInput = document.querySelectorAll('.answer');
const a_text = document.querySelector('.a_text');
const b_text = document.querySelector('.b_text');
const c_text = document.querySelector('.c_text');
const d_text = document.querySelector('.d_text');
const submitBtn = document.querySelector('button[type="submit"]');

let questionIndex = 0;
let score = 0;
let questionNo = 1;

loadQuiz () 

function loadQuiz () {
    deselectAnswers ()
    
    
    const currentQuestion = questions[questionIndex];

    questionsInput.textContent = `${questionNo}. ${currentQuestion.question}`;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
  
}

function deselectAnswers () {
    answerInput.forEach(answer => answer.checked = false)
}

function getSelected () {
    let answers;
    answerInput.forEach(answer => {
        if(answer.checked){
            answers = answer.id
        }
        

    })
    return answers;
    


}



submitBtn.addEventListener('click',() => {
const answer= getSelected();

if(answer) {
    if(answer === questions[questionIndex].correct){
        score++
    } 

    questionIndex ++;
    questionNo++;

    if(questionIndex < questions.length){
        loadQuiz()
    } else{
        quiz.innerHTML = `<h2>You answerd ${score}/${questions.length} questions correctly</h2>
        <button onclick="location.reload()" type="submit">Do it again</button>`
    }
}
   
})

