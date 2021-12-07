let temp = 55

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan dishes')
} 
// At least one vegan? Make sure to offer up some vegan options.
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Some vegan options')
}
// Else, Offer up anything on the menu
else {
    console.log('Anything in menu')
}