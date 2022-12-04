document.getElementById('test').onclick = changeColor;

function changeColor() {
    document.body.style.color = "purple";
    return false;
}



    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


