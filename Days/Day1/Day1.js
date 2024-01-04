const string = prompt();

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
