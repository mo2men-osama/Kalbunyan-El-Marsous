// Section 5:
// Lecture # 5
// 31.Build an Expense Tracker

// Challenge # 3:

// addIncome

// resetAccount

// getAccountSummary
// Account for Andrew has $900, $1000 in income, $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let myAccount = {
    name: 'Moamen Osama',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account, income) {
    account.income = account.income + income
}

let resetAccount = function(account) {
    account.expenses = 0 
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses.`
    
}


addIncome(myAccount, 2500)
addExpense(myAccount, 50)
addExpense(myAccount, 20)


console.log(getAccountSummary(myAccount))

resetAccount(myAccount)

console.log(getAccountSummary(myAccount))



