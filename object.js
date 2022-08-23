//objets stores in-depth -composite /complex data type 

let course = {
    title : "Learn CSS Grid for free",
    lessons: 16, 
    creator: "Shweta",
    level: 2, 
    isFree: true,
    tags: ["html", "css"]

}

// to see the no of members of object
console.log(course.length)


//build another object

let airbobCastle = {
     user: "Shweta",
     age: 18,
     isEligible: true,
     expertise: ["css", "javascript", "html" ]
}

console.log(airbobCastle.length)
console.log(airbobCastle.user)


//practice excercise 

let person = {
       name: "Shweta",
       age:   18,
       country: "India"
}


function logData (){
    console.log (person.name + "is" + person.age+ "years old and lives in"+ person.country)
}
//the output : "Shweta is 18 years old and lives in India"


// ---------another practice if/else ----------

let age = 15

if (age < 6){
    console.log("free")
}
else if (age >=6 && age<=17){
    console.log("child discount")
}
else if (age >= 18 && age <= 26){
    console.log("student discount")
}
else if (age >= 27 && age <= 66){
    console.log("full price")
}
else {
    console.log ("senior citizen discount")
}

