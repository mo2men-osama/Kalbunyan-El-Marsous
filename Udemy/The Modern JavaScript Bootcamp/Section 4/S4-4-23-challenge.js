// Section 4:
// 23.Multiple Arguments and Arguments Defaults

// Challenge # 2:

// total, tipPercent .2

let getTipPercent = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTipPercent(100)
console.log(tip)
