// Section 4:
// 25.Template Strings

// Challenge # 3:

// A 25% tip on $40 would be $10

let getTipPercent = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}` 
}

let tip = getTipPercent(40, .25)
console.log(tip)