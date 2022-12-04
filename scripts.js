// First we detect the click event
document.getElementsByClassName('question').addEventListener('click', function () {
        this.classList.add('selected');
});




    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


