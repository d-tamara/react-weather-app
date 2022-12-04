fetch('Data/questions.json')
    .then((response) => response.json())
    .then((questions) => console.log(questions));


let question1 = document.getElementById('#question-1');
let question2 = document.getElementById('#question-2');
if(queston1) {
    question1.addEventListener('click', () => question1.style.backgroundColor='#3399ff')
}
if(question2) {
    question2.addEventListener('click', () => question2.style.backgroundColor='#3399ff')
}







