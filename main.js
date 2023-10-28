const startbutton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const answerButtons = document.getElementById('answer-btn')
const questionElement = document.getElementById('question')


let shuffleQuestion, currentTaskIndex;

startbutton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=>{
  resetState();
  currentTaskIndex++
  showNextQuestion();
})
function startGame(){
  resetState()
   startbutton.classList.add('hide')
   answerButtons.classList.remove('hide')
   question.classList.remove('hide')
    shuffleQuestion = questions.sort(()=>Math.random() - .5)
   currentTaskIndex = 0
   showNextQuestion()
}
function showNextQuestion(){
  showQuestion(shuffleQuestion[currentTaskIndex])
}
function showQuestion(questions){
  questionElement.innerText = questions.question
  questions.answer.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectedAnswer)
    answerButtons.appendChild(button)
  })
  
}
function selectedAnswer(e){
  let choice = e.target
  let correct = choice.dataset.correct;
  setClassStatus(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setClassStatus(button, button.dataset.correct)
  })
  if(shuffleQuestion.length > currentTaskIndex+ 1){
    nextButton.classList.remove('hide')
  } else{
    startbutton.innerText = 'Restart'
    nextButton.classList.add('hide')
    startbutton.classList.remove('hide')
  }
  
}
function resetState(){
  nextButton.classList.add('hide')
  while(answerButtons.firstElementChild){
    answerButtons.removeChild(answerButtons.firstElementChild)  
  }
}

function setClassStatus(element, correct){
  clearClassStatus(element)
  if (correct) {
    element.classList.add('correct')
    document.body.classList.toggle(correct ? 'correct': 'wrong')
  } else{
    element.classList.add('wrong')
    document.body.classList.toggle(correct ? 'correct': 'wrong')
  }
  nextButton.classList.remove('hide')
  
}


function clearClassStatus(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

let questions = [{
    question:'what is Wrong for 1+1 ?', 
    answer: [
      {text: '2',correct: false,},
      {text: '3',correct: true,},
      ]
  },
  {
    question:'Most used code editor in 2022?',
    answer:[
    {text:'vim editor', correct:false},
    {text:'Atom Code editor', correct:false},
    {text:'Visual Studio Code', correct:true},
    {text:'WebStrom', correct:false},
    ]
  },
  {
    question:'Most used Programming language in 2022',
    answer:[
      {text:'Python', correct:false},
      {text:'JavaScript', correct:true},
      {text:'java', correct:false},
      {text:'HTML', correct:false}
      ]
  }
]