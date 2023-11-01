// console.log("Hello world") //testing output

// function multiply(num1, num2){
//     return num1 * num2 //returns value after running the rest of the code
// }

// console.log(multiply(1, 3)) //printing out the value as the function returns the value 
// //and doesn't anything with it

//create function called getRandomChance
// function getRandomChance(val, counter){
//checking if the value if higher or lower than 50
//     val = Math.ceil(Math.random() * 100) //used floor function and random function to generate random number from 1 to 100
//    for(let i = 0; i <= 100; i++){
//     if(val <= 50){
//     return true
//    }
//     else{
//     return false
//     }
// }

    
// }
// let counter = 0 //kept outside the for loop so that it doesn't reset when being incremented
//printing out function
// for(let i = 0; i <= 100; i++){
// let hit = getRandomChance() //assigning variable to function for if statements to be carried out
// if(hit == true){
//     counter++ //increments the coutner variable each time
// }
// }

// console.log(`Amount of hits: ${counter}`)


//testing to see that code works or if there are errors
// function add(num1, num2){
//     return num1 + num2
// }
// //assert function used for testing data
// console.assert(add(1,2) == 3, "Addition of positive integers not working")
// console.assert(add(-3,-2) == -5, "Addition of negative integers not working")
// console.assert(add(0,0) == 0, "Addition of null values not working")


// for(let i = 0; i <= 150; i++){
//     console.log(i)
// }




//example function 
// function getMaxNumber(numberList){
//     let hold = numberList[0]
//     for(let i = 0; i < numberList.length; i++){ 
//         if(hold < numberList[i]){ 
//             hold = numberList[i] 
//         }
//     }
//     return hold 
    
// }

// //example call
// console.log(getMaxNumber([1, 3, 8, 9, 6, 2]))
// console.log(getMaxNumber([0, 4, 7, 5, 3, 8]))
// console.log(getMaxNumber([10, 3, 8, 9, 6, 22]))


//Object Oriented Programming 
class Person{

   
        constructor(name, job, age){
            this.name = name
            this.job = job
            this.age = age
            
        }
    
     getBirthday(){
        return this.age++ //increase the person's age by one.
     }

        getDescription(){ //function to prompt output
            return `My name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}.`
        }

}
let person1 = new Person("Grimace", "Mascot", 1000) //created object
let person2 = new Person("Annastacia", "Stand User", 30) //second object
let person3 = new Person("Dani", "Carpenter", 35) // third object

//lists
const thePeople = [person1,person2, person3]

for(let i = 0; i < thePeople.length; i++){
     thePeople[i].getBirthday()
     console.log(thePeople[i].getDescription())
}
//objects that increment their ages
// person1.getBirthday()
// person2.getBirthday()




// console.log(person1.getDescription()) //will output person1 objects
// console.log(person2.getDescription()) //will output person2 objects




 
