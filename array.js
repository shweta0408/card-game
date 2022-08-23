//ordered list array
let myNum = [1,7,8]
//to print 7
console.log(myNum[0])

//add element in array, here 4 will be added to existing array list
myNum.push(4)
console.log(myNum)

//remove last item in an array
myNum.pop()

let messages = [
               "Hi, everbody",
               "My name is Shweta Mishra",
               "I'm a software engeneering student"
]

let newMessage = "Nice to meet you!"

// to add above message into former array we use following line

messages.push(newMessage)



//to print messages one by one using array 

for (let i= 0; i<messages.length;  i+=1){
    console.log(messages[i])
}

// to print array content one by one
let cards = [7,3,9]
for ( let count=0; count < cards.length; count++){
    console.log(cards[count])
}

// greeting-el is defined in html
// to render greetingEl using for loop 
let sentence = ["hello" , "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for(let m = 0; m<sentence.length; m++){
    greetingEl.textContent = sentence[m] + " "
}