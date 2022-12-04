let question1 = document.querySelector('#question-1');
let question2 = document.querySelector('#question-2');

question1.addEventListener('click', () => question1.style.backgroundColor='#3399ff')
question2.addEventListener('click', () => question2.style.backgroundColor='#3399ff')



    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


