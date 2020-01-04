/* eslint-disable no-console */
// Function Definition
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate)
  // this is the function body
  console.log('Running Calculate Bill')
  const total = billAmount * (1 + taxRate)
  return total
}

// Function Call
const myTotal = calculateBill(100, 0.13)
const myTotal2 = calculateBill(200, 0.13)
// console.log(myTotal, myTotal2)

function sayHiTo(firstName) {
  return `Hello ${firstName}`
}

// const greeting = sayHiTo('Dre')
console.log(greeting)

// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15)

function doctorize(name) {
  return `Dr. ${name}`
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`
}
yell(doctorize('dre'))
