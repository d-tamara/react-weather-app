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

window.onload = function () {

    let question1 = document.getElementById('question-1');
    let question2 = document.getElementById('question-2');
    question1.addEventListener('click', () => question1.classList.add = 'selected');
    question2.addEventListener('click', () => question2.classList.add = 'selected');


};




