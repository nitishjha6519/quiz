const quizQuestions=[

{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
];

const newQuestion= document.getElementById("question");
const optiona = document.getElementById("a_label");
const optionb = document.getElementById("b_label");
const optionc = document.getElementById("c_label");
const optiond = document.getElementById("d_label");
const answerRadio= document.querySelectorAll(".answer");

const btn=document.querySelector(".btn");
const quizResult=document.querySelector(".quizContainer");
const showResult=document.querySelector(".showResult");

let index=0;
let score=0;

function loadQuiz(){
	deselectAnswers();
	const currentQuestion=quizQuestions[index];

	newQuestion.textContent=currentQuestion.question;
	optiona.textContent=currentQuestion.a;
	optionb.textContent=currentQuestion.b;

	optionc.textContent=currentQuestion.c;

	optiond.textContent=currentQuestion.d;

}
loadQuiz();


function deselectAnswers() {
	answerRadio.forEach(eachOption => {
		eachOption.checked = false;
	})

}	

function getSelected(){
	let selectedAnswer;
	answerRadio.forEach(eachOption=>{
		if(eachOption.checked){
			selectedAnswer=eachOption.id;
		}
	})
	if(selectedAnswer==quizQuestions[index].correct){
		++score;
	}
	console.log(selectedAnswer) ;

}





btn.addEventListener("click", function(){
	const selectedAnswer=getSelected();

	
		index++;


	if(index<quizQuestions.length){
		loadQuiz();
	}
	else{
	quizResult.innerHTML=`your score is ${score} out of  ${quizQuestions.length} questions `;

		
	
		
    

	}


})
