// Section 5:
// Lecture # 8
// 34.Exploring Number Methods

// Challenge # 6:

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge area
// 1 - 5 true if correct - false if not correct

let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))