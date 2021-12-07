// Section 3:
// 17.Logical "And" and "Or" Operators

// Challenge # 7:

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