var fs = require('fs');

var contents = fs.readFileSync('input_6_1', 'utf8');
var customGroups = contents.split("\r\n-- ");

sum = 0;
console.log(customGroups[customGroups.length-1]);
customGroups.forEach(group => {
    passenger = group.split(" ")
    yesAnswers = [];
    passenger.forEach(allAnswers => {
        allAnswers = allAnswers.split('');      
        yesAnswers.push(allAnswers)
    });
    yesAnswers[0].forEach( letter => {
        invalid=false;
        yesAnswers.forEach(group => {
            if (!group.find(x => x === letter)) invalid = true            
        });
        if (!invalid) sum++;
    })
});

console.log(sum)