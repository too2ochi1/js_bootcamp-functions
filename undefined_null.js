let name = 55

if (name === undefined) {
    console.log('Please provide a name')
} else if (name >= 4) {
    console.log('That is a number')
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function (num) {
    console.log(num)
}

square()


// The use of "Null", when making a website with a form that refreshes, Null is used in replacement of Undefined. For example:
let age = 21

age = null

console.log(age)