// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area
let conversion = function (fahrenheit) {
    let celsius = (fahrenheit-32)/(9/5)
    return celsius
}

let temp1 = conversion(32)
let temp2 = conversion(68)

console.log(temp1)
console.log(temp2)