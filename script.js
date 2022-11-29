//  Input Variables

let billInput = document.getElementById("bill")
let customInput = document.getElementById("custom")
let peopleInput = document.getElementById("people")
let resetButtton = document.getElementById("reset")
// Tip Variables

let five = document.getElementById("tip")
let ten = document.getElementById("tip1")
let fifteen = document.getElementById("tip2")
let twentyFive = document.getElementById("tip3")
let fifty = document.getElementById("tip4")

// HTML ELEMENT EDIT VARIABLES

let totalElement = document.getElementById('totalAmount')
let tipElement = document.getElementById('tipTotal')
// 

let currentTip

let peopleValue = 0

let billValue = 0.0

let tipValue

let perPerson

let tipAmount

let finalTotal

// Bill Total event listener

billInput.addEventListener('input', billF)

peopleInput.addEventListener('input', peopleF)

function billF() {
    billValue = parseFloat(billInput.value)
    console.log("Bill cost: $" + billValue)
}

// People Event listener

function peopleF() {
    peopleValue = parseFloat(peopleInput.value)
    if (peopleValue === 0) {
        console.log("Cannot be zero")

    }
    else {
        console.log("Amount of people: " + peopleValue)
        calculateTotal()
    }
    
}

// Custom tip event listener

    customInput.addEventListener('input', customF)

    function customF() {
        currentTip = parseFloat(customInput.value)
        console.log("Tip value: " + currentTip)
    }

// function to calculate bill total per person

function calculateTotal() {
    perPerson = billValue / peopleValue
    console.log("Bill total per person: $" + perPerson)
    tipAmount = perPerson * currentTip
    finalTotal = tipAmount + perPerson
    totalElement.innerHTML = "$" + finalTotal
    tipElement.innerHTML = "$" + tipAmount
    console.log("Tip total per person: $" + perPerson)

}

// TIP EVENT LISTENERS

five.addEventListener('click', (e) => {
    currentTip = 0.05
    console.log("Tip value: $" + currentTip)
})
ten.addEventListener('click', (e) => {
    currentTip = 0.10
    console.log("Tip value: $" + currentTip)
})
fifteen.addEventListener('click', (e) => {
    currentTip = 0.15
    console.log("Tip value: $" + currentTip)
})
twentyFive.addEventListener('click', (e) => {
    currentTip = 0.25
    console.log("Tip value: $" + currentTip)
})
fifty.addEventListener('click', (e) => {
    currentTip = 0.50
    console.log("Tip value: $" + currentTip)
})

//  Reset event clicker

resetButtton.addEventListener('click', reset)

function reset() {
    currentTip = 0
    peopleValue = 0
    billValue = 0.0
    tipAmount = 0
    finalTotal = 0.0
    totalElement.innerHTML = 0.0
    tipElement.innerHTML = 0

}