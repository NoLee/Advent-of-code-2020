var fs = require('fs');

var contents = fs.readFileSync('input_6_1', 'utf8');
var customGroups = contents.split("\r\n-- ");

sum=0;
customGroups.forEach(group => {
    passenger = group.split(" ")
    yesAnswers = [];
    passenger.forEach(allAnswers => {
        allAnswers = allAnswers.split('');
        yesAnswers = yesAnswers.concat(allAnswers)
    });
    let yesAnswersUnique = [];
    yesAnswers.map(letter => {
        if (yesAnswersUnique.find( x => x ===letter)) {
            return
        }
        yesAnswersUnique.push(letter)
    })
    sum +=yesAnswersUnique.length
});

console.log(sum)


