function changeColor() {
    alert('test');
}



/*
    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));*/



function getvals(){
    return fetch('Data/questions.json')
        .then((response) => response.json())

}

async function main() {
    const data = await getvals(); // Waits here until getvals() is done.
    console.log(data);
}

main();

