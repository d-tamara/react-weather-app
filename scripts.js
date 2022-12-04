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


async function fetchExam() {

    const response = await fetch(('Data/questions.json'), {
        method: 'GET',

    });
    const exam = await response.json();
    return exam;

}

async function renderExam() {
    const exam = await fetchExam();
    console.log(exam);
}

renderExam();


let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');
if (question1) {
    question1.addEventListener('click', () => question1.style.backgroundColor = '#3399ff')
}
if (question2) {
    question2.addEventListener('click', () => question2.style.backgroundColor = '#3399ff')
}







