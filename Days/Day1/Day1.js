import {string} from "./string.js"

const numbers = getNumbersOfLines(string);

console.log(sumArray(numbers));

// Sums all items of an array (with parseInt())
function sumArray(array) {
    let sum = 0;

    for (const number of array) {
        sum += parseInt(number);
    }

    return sum;
}


// Puts first and last number together of each line (into an array)
function getNumbersOfLines(string) {
    const lines = string.split("\n");
    const numbers = [];

    for (const line of lines) {
        numbers.push(findFirstNumber(line) + findLastNumber(line));
    }

    return numbers
}


// -- FIND NUMBER --

// Finds first number
// 7mhjsq7ninetwo3tbnkglngltwo -> 7
function findFirstNumber(string) {
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            return string[i];
        }
    }
    return '0';
}


// Finds last number
// 7mhjsq7ninetwo3tbnkglngltwo -> 3
function findLastNumber(string) {
    for (let i = string.length; i >= 0; i--) {
        if (!isNaN(parseInt(string[i]))) {
            return string[i];
        }
    }
    return '0';
}
