// Section 5:
// Lecture # 3
// 29.Using Objects with Functions

// Challenge # 2:

// Challenge Area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: (fahrenheit + 459.67) * 5/9
    }
}

let temps = convertFahrenheit(74)
console.log(temps)