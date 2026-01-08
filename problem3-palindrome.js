// Problem 3
const isPalindrome = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return str === reversed;
};

isPalindrome("madam");