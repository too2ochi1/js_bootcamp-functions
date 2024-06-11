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

let getTip = function (total, tipPercent = .25) {
    let percentage = tipPercent * 100
     return `A ${percentage}% tip on $${total} would be $${total*tipPercent}`
}

let Finaltip1 = getTip(65, .27)
console.log(Finaltip1)