// Tu código aquí.
let actualValue = 0;
let counter = document.querySelector('#counter');

function suma(){
    actualValue++;
    counter.textContent = actualValue;
    pintar();
}

function resta(){
    actualValue--;
    counter.textContent = actualValue;
    pintar();
}

function pintar(){
    if (actualValue < 0){
        counter.style.color = "red";
    } else if (actualValue > 0){
        counter.style.color = "green";
    } else {
        counter.style.color = "grey";
    }
}