// let userInput = prompt('What\'s your name?');
const userInput = document.getElementById('userInput');
const convertButton = document.getElementById('btn');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
    let text = userInput.value;
    let convertedText = convertToBinary(text);
    result.innerHTML = convertedText;
});

const convertToBinary = (text) => {
    let arr = text.split('');
    let convertedInput = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            convertedInput += '00100000';
        } else {
            let asciiCode = arr[i].charCodeAt(0);
            let number = parseInt(asciiCode, 10);
            let binaryCode = number.toString(2);
            convertedInput += "0" + binaryCode;
        }
    }
    return convertedInput;
}



// console.log(convertToBinary(userInput));