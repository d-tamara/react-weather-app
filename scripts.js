const question = document.querySelector('.question');

question.addEventListener('click', function() {
    this.style.backgroundColor = "red";
})


    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


