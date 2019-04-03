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
        let asciiCode = arr[i].charCodeAt(0);
        console.log(asciiCode);
        let number = parseInt(asciiCode, 10);
        let binaryCode = number.toString(2);
        convertedInput += binaryCode;
    }
    return convertedInput;
}



// console.log(convertToBinary(userInput));