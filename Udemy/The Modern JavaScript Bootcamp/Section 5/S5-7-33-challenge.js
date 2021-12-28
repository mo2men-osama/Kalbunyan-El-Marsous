// Section 5:
// Lecture # 7
// 33.Exploring String Methods

// Challenge # 5:

// Challenge area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%'))
console.log(isValidPassword('asdfphjhspassword'))
