console.log('Script Running');

let score=0;
let question=document.querySelector('#question');
let option1=document.querySelector('#option1')
let option2=document.querySelector('#option2')
let option3=document.querySelector('#option3')
let option4=document.querySelector('#option4')
let submit=document.querySelector('#submit')
const answers=document.querySelectorAll('.answer')
let box=document.querySelector('.box')
 let questionArray = [
{question:"Full form of JS",
a:"JavaScript",
b:"JavaStreet",
c:"JagguBandar",
d:"JavaSetInterval",
ans:"ans1"
},
{question:"Full form of HTML",
a:"Hyper Text Markup Language",
b:"Hyper Street Markup Language",
c:"Hypo Text Markup Language",
d:"Hameha Text Make Language",
ans:"ans1"
},
{question:"Full Form of PHP",
    a:"Processor Hyper Program",
    b:"HyperText Preprocessor",
    c:"Program HyperText Processor",
    d:"Program Processor Text",
    ans:"ans2"
},
{question:"Full Form of CSS",
    a:"Class Style Sheet",
    b:"Cascading Sheet Style",
    c:"Cascading Style Sheets",
    d:"Class Style Sheet",
    ans:"ans3"
}

//Array list ends
]
let questionCount=0
function loadQuestion() {
     var questionlist=questionArray[questionCount]
    
     question.innerText=questionlist.question
     option1.innerText=questionlist.a;
     option2.innerText=questionlist.b;
     option3.innerText=questionlist.c;
     option4.innerText=questionlist.d;

    }
    loadQuestion();
     
submit.addEventListener("click",function () {
    let useranswer;
    answers.forEach(currentCheckAnswer => {
        if(currentCheckAnswer.checked){
            useranswer =currentCheckAnswer.id;
            console.log(useranswer)
}

});
    
    if(useranswer===questionArray[questionCount].ans){
        console.log('Answer is Correct');
 score+=2;
 console.log(score)

;
        
}
else{console.log('try again');
score--;}
questionCount++;
removeradio();
if(questionCount<questionArray.length){
loadQuestion();}
else{
    let scoreboard=document.createElement('div')
    scoreboard.innerHTML=` <div class="scoreboard">
    <h1>Your Score is</h1>
    <h2 class="score">${score}</h2>
</div>`
box.appendChild(scoreboard)
}
    
    
});
function removeradio() {
    let checkanswer;
    answers.forEach(checkedElement => {
        if(checkedElement.checked){
            checkanswer=checkedElement.id
            checkedElement.checked=false;

        }
        
    })
    
}