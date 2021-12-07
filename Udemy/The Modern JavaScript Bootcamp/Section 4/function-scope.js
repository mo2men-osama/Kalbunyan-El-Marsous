// Global scope (convertFahrenheitToCelsius, firstTemp, secondTemp)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    
    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius 
}

let firstTemp = convertFahrenheitToCelsius(32)
let secondTemp = convertFahrenheitToCelsius(68)


console.log(firstTemp)
console.log(secondTemp)