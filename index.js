const resultValue = document.querySelector('.result');

function getValue(e) {
    document.querySelector('.result').innerText += e;
}

function total() {
    const expression = resultValue.innerText;

    try {
        const result = eval(expression);
        resultValue.innerText = result;
    } catch (error){
        resultValue.innerText = "Error";
    }
}

function resetBtn () {
resultValue.innerText = '';
}