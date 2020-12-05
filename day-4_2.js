var fs = require('fs');

var contents = fs.readFileSync('input_4_1', 'utf8');
var passports = contents.split(" \n-- ");

valid = 0;
passports.forEach(el => {
    if (!el.includes("byr") || !el.includes("iyr") || !el.includes("eyr") || !el.includes("hgt") || !el.includes("hcl") || !el.includes("ecl") || !el.includes("pid")) {
        return;
    }

    var segments = el.split(" ")
    let invalid = false
    segments.forEach(seg => {
        let data = seg.split(":")
        let value;
        switch (data[0]) {
            case "byr":
                value = parseInt(data[1]);
                if (value < 1920 || value > 2002) invalid = true
                break;
            case "iyr":
                value = parseInt(data[1]);
                if (value < 2010 || value > 2020) invalid = true
                break;
            case "eyr":
                value = parseInt(data[1]);
                if (value < 2020 || value > 2030) invalid = true
                break;
            case "hgt":
                let inches = data[1].split("in")
                let cm = data[1].split("cm")
                if (inches.length == 2) {
                    value = parseInt(inches[0]);
                    if (value < 59 || value > 76) invalid = true;
                }
                else if (cm.length == 2) {
                    value = parseInt(cm[0]);
                    // console.log(value);
                    if (value < 150 || value > 193) invalid = true;
                }
                else {
                    invalid = true
                }
                break;
            case "hcl":
                const regex = /#([a-fA-F0-9]{6})/g;
                const found = data[1].match(regex);
                if (!found || data[1].length >= 8) invalid = true
                break;
            case "ecl":
                let eyecolor = data[1]
                let validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
                if (!validColors.includes(eyecolor)) invalid = true
                break;
            case "pid":
                if (data[1].length != 9) invalid = true
                break;
            default:
                break;
        }
    });
    if (invalid) return
    valid++
});

console.log(valid);