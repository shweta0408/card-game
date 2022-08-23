//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
//let sum = firstCard + secondCard 
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = true
//let cards = [firstCard, secondCard] // array ordered list
let cards = []



let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player =  {
    playerName : "Shweta",
    playerCredit : "125"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ":"+ "$" + player.playerCredit


//function to get random card from 1 to 13 to avoid hardcoding
function getRandomCard(){
    //if 1     ---> return 11
    //if 11-13 ---> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 0-13
    if (randomNumber === 1){
        return 11
    } else if (randomNumber>10 ){
       return 10
    } else {
        return randomNumber 
    }
   
}


//to start game
function startGame(){
    isAlive= false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
   
    getGame()
}



function getGame(){
     //get first and second card
    //cardEl.textContent = "Card: " + firstCard+ "  " + secondCard
    //cardEl.textContent = "Card: " + cards[0] + ""+ cards[1]
    // get all the cards using loop

    cardEl.textContent = "Cards:"
    for (let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    if (sum < 21){
       message ="want to draw another card?"
       isAlive = true
      
    }
    else  if (sum === 21) {
       message= "Wohoo! You've got Blackjack"
        hasBlackJack = true
       
    }
    else if (sum > 21) {
        message= "Oops! You lost "
        isAlive = false 
    }

    messageEl.textContent = message  
    sumEl.textContent = "Sum: "+ sum

}


function newCard(){
  
      if (isAlive === true && hasBlackJack === false ){
        let Card = getRandomCard()
        sum+= Card
  
   //push the card to the cards array
    cards.push(Card)  
    getGame()
      }


    
   
    
  
}

