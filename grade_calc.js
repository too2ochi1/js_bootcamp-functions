let gradeScore = function (studentScore, totalScore) {
    let percent = (studentScore/totalScore) * 100
    let Letter = ''
        if (percent >= 90) {
            Letter = 'an A'
        } else if (percent >= 80) {
            Letter = 'a B'
        }else if (percent >= 70) {
            Letter = 'a C'
        }else if (percent >= 60) {
            Letter = 'a D'
        }
        else {
            Letter = 'an F'
        }
        return `You got ${Letter} (${percent}%)!`
}

let Result = gradeScore (80, 93)
console.log (Result)