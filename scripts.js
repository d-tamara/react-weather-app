function changeColor() {
    alert('test');
}

fetch('Data/questions.json')
    .then((response) => response.json())
    .then((questions) => console.log(questions));



console.log(questions.length);


