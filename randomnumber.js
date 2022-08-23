//the random number are between 0 to 1

let randomNumber = Math.random()
console.log(randomNumber)

//floor function The Math.floor() function returns the largest 
//  integer less than or equal to a given number or simply round off

let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)
//the result will be 3

let newRandomNumber = Math.floor(Math.random()*6)
//this will generate from 0, 1,2,3,4, to 5 whole number

let newRandomNumber2 = Math.floor(Math.random()*6) + 1
//this will generate from 1,2,3,4,5 to 6 whole number


// rollDice function thar returns to numbe btw 1 to 6

function rollDice(){
    let randomDice = Math.floor(Math.random() * 6) + 1
    return randomDice
}


// ------practice session-------
// to get random item from array
 let hands = ["rock", "paper", "scissor"]

 function getHands (){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
 }

 console.log(getHands())