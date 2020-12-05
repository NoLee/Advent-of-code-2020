var fs = require('fs');

var contents = fs.readFileSync('input_5_1', 'utf8');
var seating = contents.split("\n");
// seating = ["FBFBBFFRLR"]

valid = 0;
seatId=0;
seating.forEach(boardingPass => {
    let lower = 0;
    let upper = 127;
    let lowerC = 0;
    let upperC = 7;
    boardingPass.split("").forEach(letter => {
        if (letter == "F") {
            upper = Math.trunc((upper + lower) / 2)
        }
        else if (letter == "B") {
            lower = Math.trunc((upper + lower) / 2) + 1
        }
        else if (letter == "L") {
            upperC = Math.trunc((lowerC + upperC) / 2)
        }
        else if (letter == "R") {
            lowerC = Math.trunc((lowerC + upperC) / 2) + 1
        }
        // console.log(lowerC,upperC);
    });
    if (lower != upper) { console.log("ERROR ROW"); return }
    if (lowerC != upperC) { console.log("ERROR COL"); return }
    newSeatId = 8 * lower + lowerC;
    if (newSeatId > seatId) seatId = newSeatId;
})

console.log(seatId);