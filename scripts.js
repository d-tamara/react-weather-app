// First we detect the click event
document.getElementsByClassName('the-box').addEventListener('click', function () {
        this.classList.add('selected');
});

let questions = document.getElementsByClassName("question");


    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


