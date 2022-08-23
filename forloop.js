//count to ten using for loop
function newCount(){

// start : let count=1    
// finish : count<11
// steps of process : count+=1

   for (let count = 1; count < 11; count += 1 ){
     console.log(count)
 }  
 }

//loop to count from 10 to 20
function newCount(){
    for (let count = 10;  count>21;  count+= 1){
    console.log(count)
}
}

function anotherCount(){
   //loop to count from 0 to 100
    for(let i=10 ;  i<101 ;  i+=10){
        console.log(i)
    }
}


//--------practice excercise----------

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

for (let i=0 ; i<largeCountries.length ; i++){
    console.log("-"+largeCountries[i])
}

  //  ---------another excercise-------


let largestCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

largestCountries.pop()  // removes last element
largestCountries.push("Pakistan") // adds pakistan at last

largestCountries.shift()  // removes first element i.e Tuvalu
largestCountries.unshift("China") // adds china as first


//shift() is used to remove first element/item from starting of array
//unshift() is used to add an element/item from end point of array