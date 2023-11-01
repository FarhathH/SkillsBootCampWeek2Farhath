//printing output
// console.log("Hello World!")
// console.log("Figaro.... figaro, figaro, figaro, fiiiiigaaarooooooo!")
// console.log(5+5)
// console.log(5%1)
// console.log(10*19)

/* 
Multiline comment
*/

//variable that is changable
// let myNum = 10
// console.log(myNum)

//constant variable is immutable
// const gravity = 9.8
// console.log(gravity)

//concatenation practice
// let firstName = "Farhath"
// let lastName = "Hussain"
// console.log(firstName + " " + lastName)

//bool - checking if something is true or false
// console.log(4 < 5)
// console.log(4 == 5)
// console.log(4 > 5)

//applied syntax for implementing interpolation
// console.log(`${firstName} ${lastName}`)

//interpolate variables 'name' 'programme' and 'ideal job'
// let leName = "Farhath"
// let job = "retail worker"
// let idealJob = "Software Developer"

// console.log(`Hi I'm ${leName}. I'm currently a ${job}. I would like to be a ${idealJob}`)

//if statement for checking the condition is true or not
// if(4 < 5){
//     console.log("That's bloody lovely")
// }else if( 4 == 5){
//     console.log("This is maddness")
// }else{
//     console.log("Curses")
// }

//trying an old exercise of interpolating team scores with javascript using an abs function
// let teamOneScore = 1
// let teamTwoScore = 5
// let resultOne = teamOneScore - teamTwoScore
// let resultTwo = teamTwoScore - teamOneScore
// Difference = Math.abs(teamOneScore-teamTwoScore)
// if(teamOneScore > teamTwoScore){
//     console.log(`Team One wins by ${Difference}`)
// }else if(teamOneScore < teamTwoScore){
//     console.log(`Team Two wins by ${Difference}`)
// }else{
//     console.log("It's a draw")
// }


//Generate a random number using the Math library
// console.log(Math.random() * 10)
//using floor function to round down a random number generated and making a band between 0 and 10
// console.log(Math.floor(Math.random() * 11))

//attempt at generating a number between 0 and 250 by bringin up the number by 251 (making a band between 0 and 250).
// console.log(Math.floor(Math.random()*251))







//a for loop to iterate and increment from 0 to 9
// for (let i  = 0; i < 10; i++){
//     console.log(i)
// }

//Same loop for prints from 0 to 10
// for (let i  = 0; i <= 10; i++){
//     console.log(i)
// }

//Printing numbers from 10 to 20
//  for(let k = 10; k <= 20; k++){
//     console.log(k)
//  }

 //fizzbuzz exercise to replace multiples of 3, 5 or both with fizz, buzz or fizzbuzz
//   for(let i = 1; i <= 100; i++){
//     let output = ""
//     if(i % 3 == 0 && i % 5 == 0){
//         output += "Fizzbuzz"
//     }else if(i % 3 == 0){
//         output += "Fizz"
//     }else if(i % 5 == 0){
//         output += "Buzz"
//     }
//     if(output != ""){
//         console.log(output)
//     }else{
//         console.log(i)
//     }
//   }





// 5 times 1 equals 5
// 5 times 2 equals 10 etc.
//using 'for' loop to format the increment and multiplication in worded format from 1 to 12.
// for(let i = 1; i <= 12; i++){
//     let num = 120
//     console.log(`${i} times ${num} equals ${num * i}`)
// }



//creating and calling a function
//  function add(num1, num2){
//     console.log(num1 + num2)
// }

// add(5,6)
// add(4,13)
// add(7,17)
// add(16,29)

//another try with multiples this time
// function Multiples(num1, num2){
//     console.log(num1 * num2)
    
// }

// Multiples(34,2)
// Multiples(2,56)



//Print times table up to 12 with function and for loop declared and called many times
function multiply(num1, num2){
    for(let i = 0; i <= num2; i ++){
        console.log(`${num1} times ${i} equals ${num1 * i}`)
    }
    console.log("")
}

//incrementing the num value for multiplying
 for(let e = 2; e <= 12; e++){
    multiply(e,12)
 }




