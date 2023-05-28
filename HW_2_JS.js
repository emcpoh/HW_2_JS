function inputStringValidation(inputString) {
    let validationCheck = false
    if (inputString.length < 5) {
        console.log("The minimum number of characters in input string is 5.")
        validationCheck = true
    }
    if (inputString.length > 64) {
        console.log("The maximum number of characters in input string is 64.");
        validationCheck = true
    }
    if (!/[a-zA-Z]/.test(inputString)) {
        console.log("Input string must contain letters.")
        validationCheck = true
    }
    if (!/[A-Z]/.test(inputString)) {
        console.log("The input string must contain at least one capital letter.")
        validationCheck = true
    }
    if (!/\d/.test(inputString)) {
        console.log("The input string must contain at least one digit.")
        validationCheck = true
    }
    if (!/@/.test(inputString)) {
        console.log("The input string must contain at least one '@'.")
        validationCheck = true
    }
    if (!inputString) {
        console.log("The input string should not be empty.")
        validationCheck = true
    }
    if (validationCheck == false) {
        console.log("The input string is valid.");
    }
};

inputStringValidation("The 1st example input") // <-- As an argument, pass the string that needs to be validated 