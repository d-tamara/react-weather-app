/*let obj;

fetch('Data/questions.json')
    .then((response) => response.json())
    .then(data => {
        obj = data;
    })
    .then(() => {
        console.log(obj);
    });


console.log(obj);*/


async function fetchQuestions() {

    const response = await fetch(('Data/questions.json'), {
        method: 'GET',
    });
    const questions = await response.json();
    return questions;
}

async function renderQuestions() {
    const questions = await fetchQuestions();
    console.log(questions);

    questions.forEach(element => console.log(element));

    questions.forEach(element => console.log(element.firstQuestion, element.secondQuestion));


}


renderQuestions();



let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');
if (question1) {
    alert('test');
    question1.addEventListener('click', () => question1.style.backgroundColor = '#3399ff')
}
if (question2) {
    question2.addEventListener('click', () => question2.style.backgroundColor = '#3399ff')
}







