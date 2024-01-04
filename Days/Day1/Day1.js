const string = prompt();

console.log(getNumbersOfLines(string));

function getNumbersOfLines(string) {
    const lines = string.split("\n");
    const numbers = [];

    for (const line of lines) {
        numbers.push(findFirstNumber(line) + findLastNumber(line));
    }

    return numbers
}

function findFirstNumber(string) {
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            return string[i];
        }
    }
}

function findLastNumber(string) {
    for (let i = string.length; i >= 0; i--) {
        if (!isNaN(parseInt(string[i]))) {
            return string[i];
        }
    }
}
