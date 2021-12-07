// function - input (argument), code (return value), output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    return celsius 
}
// Call a couple of times (32 -> 0) (68 -> 20)
let firstTemp = convertFahrenheitToCelsius(32)
let secondTemp = convertFahrenheitToCelsius(68)

// Print the converted values
console.log(firstTemp)
console.log(secondTemp)