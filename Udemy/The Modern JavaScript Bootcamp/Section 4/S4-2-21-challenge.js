// Section 4: JavaScript Functions
// Lecture # 2
// 21.Function Basics

// Challenge # 1:

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