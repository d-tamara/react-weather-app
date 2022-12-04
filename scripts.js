const btn = document.getElementById('question-1');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
});



    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


