// Creating object copy inside function without mutation (object personOne will not change, only its copy(updatedPerson))

//object personOne
const personOne = {
    name: "Bob",
    age: 21
}

//create function and create new object updatedPerson inside this function 
//change age (+1)
function increasePersonAge (person) {
    const updatedPerson  = Object.assign ({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

//call a function with an argument (persoOne) and assign it to new variable const updatedPersonOne
const updatedPersonOne = increasePersonAge (personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)
