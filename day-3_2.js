let input = ["....#............#.###...#.#.#.",
    ".#.#....##.........#.....##.#..",
    ".#..#.#...####.##..#......#..##",
    "......#...#...#.......#........",
    "........#...###..#.#....#....#.",
    "..##.....#.....#.#.........#.#.",
    ".##.......#.#.#...#..#...##...#",
    "...##.....#....##....#...###.#.",
    "..#...#......##.#.##.....#.#..#",
    ".#....#.###.........#..........",
    ".#.#..##.....###.....###....#.#",
    "....###....#......#...#......##",
    "......##...#.##.........#.#..#.",
    "##.#....##...#..##....#.#..#.##",
    ".#...#..#.....#.#.......#...#..",
    "..........#..###.###......##..#",
    "..#.##.#..#......#.......###.#.",
    "...#...#.#.#..#...#.#..........",
    "#........#..#..#.#....#.##..###",
    "#...#.....#..####.........####.",
    ".....###..........#.#...##...#.",
    ".....#...#..#.......#....##.#..",
    "...........#..##.....#...#..#..",
    "......##..#........#...........",
    "#.#..#.#.#..#.....#....#.....#.",
    "..#....##....##...#.....#......",
    ".#.#....#..#.#......#..###...#.",
    ".......#...#.#....##..#..#..#..",
    ".#.#.#.......#....#.#.#.......#",
    ".#..........#.##.#...#..#.#.##.",
    "..#.#..........#.#....##.#.##..",
    "###..#..#.#...##.#.#..#........",
    "##....#...#....#....#...#.#....",
    "#...#.#....#.##..##...#.#......",
    "......#...#.###......##....#...",
    ".................#.###......#..",
    "##..#....#....##...###.#.#..###",
    "..#..........#..####..##..#...#",
    ".#......#..#.#...........##.#..",
    ".#..#......#...#.#.#..#.#.#.#.#",
    ".#......###.....#.#.#......##..",
    "#..........#.##...#...........#",
    "..#....#.##....#.........#.....",
    ".#..##....#...##.........#..#..",
    "....##..#.###..#.#...#..###..#.",
    "..#......#........#...#.#......",
    "........#..#..#..#...#.##......",
    ".##.#.#......#...#.........#...",
    "#..###.#...#....###.##..###....",
    "........##.............#....#..",
    "...#...............#....#.#....",
    "#..........#..#..#.#.....#...#.",
    ".#.............#...#.......#..#",
    ".#..#..#...#........##.........",
    ".....#.#..#.#..#..##.........#.",
    "..#..##...#....#.#...#.###..#..",
    "#...........##.....#...#.##....",
    "#.#.#.#........##......#...#.#.",
    "......#..#.###.#...#.##.##....#",
    ".#....#...#....#........#....#.",
    "..#.#..........#..##.......#..#",
    ".....#...##..#................#",
    ".#...............##...#.##...##",
    "#.####....##.....#.......#.##..",
    "......#.##.#...##..###..#.#....",
    ".#.##.#...##..#.......#.#..#...",
    "#...#.##..........##..........#",
    "#.###...#...#..#.....#.#.##..##",
    ".##.....#....#...##.....##.....",
    "...#........#..###.###...#.....",
    "##..#....#.....#...#.#....#.#..",
    "#....#....#.#..........#...#..#",
    "...##..#......#..#..#..#..#....",
    ".....##...#..####..##.........#",
    ".....#..#.#...#..#....##..##...",
    "..#.......##.#..#.##...#.#....#",
    ".#..#.#...##..##....#..#......#",
    "..##.##..##...###..#....#...#..",
    "........##.......##...##.....##",
    ".#....###...#..#..#..#.......#.",
    "#.###............#....##.....#.",
    "..........#...#...##..#...#....",
    "..#......#.##.......#....##..##",
    "..#..###.....#...#.......#.....",
    "#.#...##.....#...#....#.......#",
    "....##.##.#....#.....#.#....#..",
    "...#....#.###............#..###",
    "#..##..#.........##.....#.#...#",
    "....#.......##......#....#...#.",
    "....#..##.#..........#.........",
    "....#...#.###.......#...#.#....",
    "#..#..#...#.......##...#..#.##.",
    "#.......#...##.##......#.......",
    "##..##...##...#......#...#...##",
    "..#...#.#.####.#...##.....##...",
    "#...#..#..#...##......#.#..#..#",
    "..##..##.#.#..#...####.....###.",
    ".#........#..##.###...#.##.#...",
    "........#..#...##......#.#....#",
    "..#...###.......##..##..#....#.",
    ".##...#.#..#.##.......##.###...",
    "#....#.#.#........#....#..#.##.",
    "....#.##.#.##..#.#####.....###.",
    "#.#..#..#...#.#..#.......#.#...",
    "....#...#....###...............",
    ".###.#.....#.#.......###......#",
    "##...#.#.###....##..#...##.....",
    "...#.#..#.###.#.......#...#.#..",
    ".#...#....#...#..####....###...",
    "..#....##.....##.#.#.##....#...",
    "#....#..##.......#...##.##....#",
    ".##..#.......#..#....###.......",
    "#.##.....##.#.........#......##",
    ".####.#...#.....#..#...#.##..#.",
    "....#...........#.....#........",
    ".#............##...#.......#.#.",
    "#....#.##........#....#.#..#..#",
    "#....#.##....#...##...#..#..#..",
    "...#..#.####.#....#............",
    "....#......#.........#.........",
    "#....##....###.....#......#.#..",
    "...#..#....#........###..#...#.",
    "..#.#........#.#.#.###..#.#.#..",
    ".....###.....##.#....###.#.....",
    "##.#....#....##...##.###.#.##..",
    ".###.#..#.......##...#...##....",
    ".#...###........#.......##.##..",
    "#......####...#...##.#.######..",
    "....##.............#..##.##...#",
    "...........#..##.#...#.#.#...#.",
    "###.......#.##..#....#...#....#",
    ".........#.....#.#.#..##.#.....",
    "#...##..#....#..#.............#",
    "...#.......#.##.............#.#",
    ".....#..#...##......####..#....",
    ".#.#.#.....#...####..#...##...#",
    "#...#.#..#..#.#..#.##..........",
    ".....#.##..#.#.##..#.#.#....#.#",
    "...##..#...#...#..#....#.......",
    "........#.#..#...#...#.#...#...",
    "##..#........#..#.....#......##",
    ".........#..#...#......#......#",
    "..#.#.#........##...#.##.....##",
    ".###....##....#...#....#..#....",
    ".#.............###...#..##..###",
    ".##.##.##.......###.........#.#",
    "..#..###...#...#....#..#.#..#.#",
    "......#..#.#..#.....#.#........",
    "......#...####...#.#.....#.....",
    ".#...##.......#..#......#...#..",
    "#..#...#.......###..#..#.#.#.#.",
    ".....#.....###.##....#.#.##.#.#",
    "#........#....##...#..#.##..#..",
    "...#.#........##....#.#..###.#.",
    "#...#...##.........#........###",
    "##...#.##..##...#.....#.###.#..",
    "#.###.#.#..#...........##..#...",
    "........#.......#..#..#.###....",
    "#........#....#......###.......",
    "..#.###.######...#.###..#......",
    "...#...######..#.....#....#.#..",
    "..#.......#..#..#.........#...#",
    ".#...#..##.##.........##.......",
    ".........#.#.##.#..#....#.#...#",
    "#.......#....#......#.....###.#",
    "##..............#.###........#.",
    "..#.##..#.##.....#...#.#.#..###",
    "..#.#......#..#..##.#........#.",
    "..#.....#...#.#...#...###..#.#.",
    ".......#...........#..#..#.#.##",
    ".......#...##..#.###...........",
    ".#........#.###.#..#..#..#..#..",
    "##.#.##....#..###..#.##.##...#.",
    ".....#....##.#........#.#.#....",
    "....##....#..#..#....##....#.#.",
    "#.....##....#.....#.###.#....#.",
    ".#.##.##..#..#...#...........##",
    "...#..###..#.....##....#.......",
    "...#..##..###.#..#..#.#........",
    "......##..#.......#..##.....###",
    ".#...##.#.#.#......#...#.#.#.##",
    "....#.#....#...#........#...#..",
    "....#.#......#.#.###.#.#.##.#..",
    "#..#........###..#..#..#.....#.",
    "...#....#...##...#........##.##",
    ".....#..#..#.....#....#.#...#..",
    "..#.###....#.#..##......#.##.#.",
    "..####......#..#.#.#..#.#####..",
    ".......##..#..###.#............",
    "..###.#........#..........##.##",
    "#.#.........#.##.#......#..#...",
    "...#.....#.....##..#..##.##..#.",
    "#.#.##....#.......###....##....",
    "...##.#..#...##.#..#......#..#.",
    "..##.........#.##.#####...#.#..",
    ".#....#...#....#.#.....##...###",
    "##.....#..####............###.#",
    "......#...........#....#.......",
    ".#......#.....##...........###.",
    "#......##.......#.#.#..##.....#",
    "...###.#.....##.#...#.#....#.#.",
    "...###.......#...#.............",
    "..#..#.#....#.#.###.#.#.##..##.",
    "..##...#..#.#..##.#.##....##...",
    "..#...........#..#....#....#...",
    "#.##...........#..#.#..##.#.#..",
    "...##...##................#..#.",
    ".#...#.##......#.#......#.####.",
    "#.##....#....#.........#....###",
    ".....###........#.#.#.##...#.##",
    ".....#....#.#....#.........#..#",
    "..#...#.#.#.#...#...#...##.#..#",
    "###.......#.....#.............#",
    "#.####.#.......#.#.#.#..#.#....",
    "#..#..#####......#....#..##....",
    "...............#.....#.#....###",
    ".###.....#...#.##..#.#..#.#####",
    "#.##.....#......##.......##....",
    "..........###.......#...#.#....",
    "..#.#..#...##.....#........#.#.",
    "........##.##....#####.#.#..##.",
    "..##.#.#...#####..........#.#.#",
    "#.........#......##...#.....#..",
    ".##.#........#...#..##...#...#.",
    ".......##..#...#.....#.##......",
    "....#.#...##..##..#....##......",
    "#........#..........##..####.#.",
    "...###...#.#.###.#...#....#.#.#",
    ".....##.#.....#........#.#....#",
    "#.......#....#...##..#......#..",
    "...#..........#.#.#...#.#.###.#",
    "....##.....#.##..#.#.#.........",
    "#.##..##..#....#.........#...#.",
    ".###..........#...##.#..#......",
    ".....####.............##...###.",
    ".#..#....#..#...#..#...........",
    "#..#..##..#...#.##..#.###.#...#",
    "......#.#..###...#..#.....#..#.",
    "##.##......#...#.#...#.........",
    "....##.#.......#.#..##....#.#.#",
    "#..##..#...###.#....##.........",
    ".............#.#....#...##..#..",
    "..#....#...#.....#.##.#..##..##",
    "##.#..##.#..##.#.#.##.#...#.#..",
    ".##.#..#.#........##.#...##....",
    "#.........##....##..#......#...",
    ".#.#.......##...#..#......###.#",
    "........#.#.#.#......#....#..#.",
    "...##..#...#...#.##..#....#.#..",
    "...#.#.#.#.......#.......###..#",
    "...#..##..#####.#.....##.#..#..",
    ".......#.#.....#.....#...#...##",
    "#...#...#......##.#....##......",
    "#.....#.#.#.....#....#......#..",
    "..#..#.##.#......##..#.#..#..##",
    "####...#.....#....#.#..........",
    "....#.....###...#...##......#..",
    ".....#....#...#............#...",
    "...#...#..##.........#...#...##",
    "#.#..#.#...##.#.......#..#.#...",
    ".#.....#...##.............#...#",
    ".....#..##..#....#......#.##..#",
    "....#...###.................#..",
    "...###...#....#...#...#........",
    "....#.##.#.......#..#..........",
    "...#..#......#.#...###...#.#...",
    "..#.#..#...#.......#.......#.#.",
    ".#.#...#.#.##........#.........",
    "...#..#...#....#.#.#.#.#..###..",
    ".#..##......#.#.##..#.##....#..",
    "#....#.......##.....#.#........",
    "..###..#.#.#.......##....#.....",
    "........#.#.#....##...##..#....",
    "#....##.#....#...##..##...#....",
    "...#..##.#.....#...#.....##....",
    ".#.#..#..#...#....#..##.#....#.",
    "##.#.##....#.....#....#....#.#.",
    ".##......#............##...#...",
    "#..##.#.####.#.#....#..#..#.#.#",
    "#...##...#......##....###.....#",
    "..#.##.....#....#....#......#..",
    ".##.#...#.....#.#.#.#........##",
    ".#..#....#.#...........#...#...",
    "#.....#..#.....#.#.##.#.....#..",
    "....#.....#..#.#....###........",
    ".....###...........#.#..##.#.#.",
    "....###....#.......###..#...#.#",
    ".###.....#...##.#...##........#",
    "..#..#.#..#...#.#...#.#..#...#.",
    "#.####.......#....##.#..#.#..#.",
    "....#.#.##.#..###.........##.#.",
    "..#..#.#....#....#.##..........",
    "..##.###..#.#..#.#......#....#.",
    ".#..#.....##...#.#......##.#..#",
    "#.#....#..#.#.#........#.###...",
    "...#....##....##..###.###.#.#..",
    "..#....#.....#....##.#.........",
    "#.......#....#.........##..#...",
    ".#..#...#.#..#.#....#.#........",
    "...#..###...#.....#......##....",
    "..#...........#.....#..........",
    "....###.#...#......#...#..#....",
    ".....#.##..#..#....#.......#..#",
    "....##..#.#.#..............#.#.",
    ".#.#..#..#.#......#...#.#......",
    "....#.......#.##....##.#.#.#..#",
    "............#.#.#.....##.......",
    "........#...##.#..#......#...##",
    ".........#...#...#....#...#.##.",
    "..#.....#......#......#.....#..",
    "#....#...##..#.#....#.#...#.###",
    ".......#..#..#..#.#...#.....#.#",
    "...#.#...#......##.....#..#....",
    "...#.#.####..##.#..#...........",
    "..##..##....#.....####...#....#",
    "###.......#...##.#...#...#...#.",
    ".##..#.....#..####......#....#.",
    "#.....#..#..##..##...#..#..#...",
    ".#....#.....#...####..####.....",
    "..#....#...#......#........#.#.",
    "##.#.......#..#.....#..##..##..",
    ".#..#..#.#.#...#....##...#.##.#",
    "##...#..#....#.........##......"]

// let input = ["....#............#.###...#.#.#.",
// ".#.#....##.........#.....##.#.."]
index = 0;
sum1 = 0;
input.forEach((element, i) => {
    if (i == 0) return;
    index = index + 3;
    let el = element.split('')
    // console.log(el.length)
    if (index >= el.length) { //overflow
        index = index - el.length
    }
    // console.log(el[index])
    if (el[index] === "#") {
        sum1++
    }
});
console.log(sum1)

sum2 = 0;
index = 0;
input.forEach((element, i) => {
    if (i == 0) return;
    index = index + 1;
    let el = element.split('')
    // console.log(el.length)
    if (index >= el.length) { //overflow
        index = index - el.length
    }
    // console.log(el[index])
    if (el[index] === "#") {
        sum2++
    }
});
console.log(sum2)

sum3 = 0;
index = 0;
input.forEach((element, i) => {
    if (i == 0) return;
    index = index + 5;
    let el = element.split('')
    // console.log(el.length)
    if (index >= el.length) { //overflow
        index = index - el.length
    }
    // console.log(el[index])
    if (el[index] === "#") {
        sum3++
    }
});
console.log(sum3)

sum5 = 0;
index = 0;
input.forEach((element, i) => {
    if (i == 0) return;
    index = index + 7;
    let el = element.split('')
    // console.log(el.length)
    if (index >= el.length) { //overflow
        index = index - el.length
    }
    // console.log(el[index])
    if (el[index] === "#") {
        sum5++
    }
});
console.log(sum5)

sum4 = 0;
index = 0;
input.forEach((element, i) => {
    if (i == 0) return;
    if (i % 2 != 0) return;
    index = index + 1;
    let el = element.split('')
    // console.log(el.length)
    if (index >= el.length) { //overflow
        index = index - el.length
    }
    // console.log(el[index])
    if (el[index] === "#") {
        sum4++
    }
});
console.log(sum4)

console.log(sum1*sum2*sum3*sum4*sum5)