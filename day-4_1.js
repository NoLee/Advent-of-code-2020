var fs = require('fs');
 
var contents = fs.readFileSync('input_4_1', 'utf8');
var passports = contents.split(" \n-- ");

valid=0;
passports.forEach(el => {
    if (!el.includes("byr") || !el.includes("iyr") || !el.includes("eyr") || !el.includes("hgt") || !el.includes("hcl") || !el.includes("ecl") || !el.includes("pid")){
        return;
    }
    valid++
});

console.log(valid);