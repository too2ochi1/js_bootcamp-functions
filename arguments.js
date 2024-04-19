//Multiple arguments
let add = function (a,b,c) {
return a + b + c
}

let result = add(10,1,9)
console.log(result)


//Default arguments
let getScoreText = function (name = 'Player1', score = 0) {
    return 'Name: ' + name + ' ' + 'Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


//Challenge area

let getTip = function (bill) {
    return tip = bill * 0.3
}

let Finaltip1 = getTip(100)
let Finaltip2 = getTip(1000)

console.log('Your tip for this transaction is: ' + Finaltip1)
console.log('Your tip for this transaction is: ' + Finaltip2)