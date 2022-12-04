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

    document.getElementById('question-1').addEventListener('click', function () {
            this.classList.add('selected');
    });


};




