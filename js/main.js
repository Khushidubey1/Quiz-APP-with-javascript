const questions = [
  {
    "que": "What is the launch date for Chandrayaan 3 mission?",
    "a": "24 July 2023",
    "b": "14 July 2023",
    "c": "13 July 2023",
    "d": "04 July 2023",
    "correct": "b",
  },
  {
    "que": "The Chandrayaan 3 missions rover is known as",
    "a": "Vikram",
    "b": "Bheem",
    "c": "Pragyaan",
    "d": "Dhruv",
    "correct": "c",
  },
  {
    "que": "The mission life of the Lander and Rover equal to",
    "a": "14 Earth Days",
    "b": "24 Earth Days",
    "c": "16 Earth Days",
    "d": "12 Earth Days",
    "correct": "a",
  },
  {
    "que": "Which launcher is used for Chandrayaan-3?",
    "a": "GSLV",
    "b": "LVSM",
    "c": "GSLV-MK3",
    "d": "PSLV",
    "correct": "c",
  },
  {
    "que": "The mission objectives of Chandrayaan-3?",
    "a": "To demonstrate Rover roving on the moon an",
    "b": "To demonstrate a Safe and Soft Landing on Lunar Surface",
    "c": "To conduct in-situ scientific experiments.",
    "d": "All of the above",
    "correct": "d",
  }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
      return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz  = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
     right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionInputs.forEach(
    (input) => {
        if (input.checked){
         answer = input.value;
        }
    }
  )
  return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () => {
document.getElementById("box").innerHTML = `
<h3> Thank you for playing the Quiz.... </h3>
<h2> ${right} / ${total} are correct </h2>`
}
loadQuestion();
