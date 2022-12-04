function changeColor() {
    alert('test');
}

fetch('Data/questions.json')
    .then((response) => response.json())
    .then((questions) => console.log(questions))
.then((questions) => console.log(questions[1]));


