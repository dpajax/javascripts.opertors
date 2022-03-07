/** 
 * Unary  operators --> +, ++ ,==
 * Binary operators
 * -- Assignment 0perators --> =, +=, -=, /=, %=
 * ---Arithmetic Operators --> +, -, *, /, %
 * ---Comparison Operators --> <, >, <=, >=, ==, ===, !=, !==
 * ---Logical Operators   ---> && , //, !
 * Ternar operators
 */

 

// let num = "32"
// console.log(+num + 6);

// let num2 = 70
// // Increment & Decrement
// //num2 = num2 + 1
// //++num2 preIncrement
// //num2++ postIncrement
// console.log(num2--1)
// console.log(num2)

//Binary Operators
// ==> Assignment Operators
// let value = 500
// let newVal = value + 50,
// value = value + 50
// value += 150
// value *= 3
// value /= 100
// value %= 10
// console.log(value)

// Arithmetic Operator
// console.log(2+7)
// console.log(56-40)
// console.log(72 / 12)
// console.log(12 * 7)
// console.log(34 % 12)

//---> Comparison Operators
// console.log(2 < 3)    true
// console.log("3" > 2)   true
// console.log(3 <=3)     true
// console.log(3 >= 3)     true
// console.log(3 >= 3)    
// console.log(3 == "3")
// console.log(3 === "3")
// console.log(4 ==== 4.0)
// console.log(2 != "2")


//logical Operators
// And = (&&)
// console.log( true && true)   true
// console.log(true && false)   false
// console.log(false && true)    false
// console.log(false && false)    false
//    //OR  (//)
// console.log( true || false)   true
// console.log( false || true)   true
// console.log(true || true)    true
// console.log(false || false)    false


//NOT -- (!)
// console.log(!!true)

// let toggleBtn = document.querySelector(".toggle-btn")
// let h1 = document.querySelector('h1')
// let showH1 = true
 
// toggleBtn.onclick = function() {
//     showH1 == !showH1
//     if (showH1 === false){
//         h1.style.display = "none"
//         toggleBtn.style.backgroundColor = "black"
//     } else {
//             h1.style.display = "block"
//             toggleBtn.style.backgroundColor = "blue"
//         }
//     }


// let schoolbag = true
// let lunchbox = true

// if (schoolbag || lunchbox ){
//     alert('Go to school')
// } else{
//     alert('stay at home')
// }

// let drink = "coke"
// let isCold = true

// if (drink === "coke" & isCold){
//     alert('You are doing Well')
// }else{
//     alert('Comot for hia..i no want')
// }

// window.addEventListener("keypress", (e) => {         //e mean Event   or myKeyPressEvent      to listen yo an Event
//     console.log(e)
//     if (e.key === "Enter"){
//         alert("Correct,you be confam guy")
//     }
// })


// Ternary Operation ?
// let mickIsMarried = confirm('Is mick married?')
// mickIsMarried ? alert('Yes ooh.Na so oo') : alert('No jare .Who tell you')

// let answer = mickIsMarried ? "yes he is" : "no he isnt"
// alert(answer)

//                                     // we can also use a if statement
// if (mickIsMarried){     
//     answer = "Yes he is"
//     else{
//         answer = "No he isnt"
//     }
// }


//true ? alert('It is true') : alert('It is false')


// let passCode = "text123"
// let userInput= prompt('Enter yor secret pass code...')

// if (userInput === passCode){
//     alert('login Successful, Redirecting to dashboard..  ')

// }else if (userInput === 'admin'){
//     alert('logging in as admin')
//  } else if (userInput == "manager"){
//      alert('logging in as manager ')
//  }else {
//      alert('Login failed')
//  }

// switch (userInput){
//     case passCode: alert('Login successful')
//     break;
//     case 'admin' : alert('Hello Admin')
//     break;
//     case 'manager' : alert('Hello Manager')
//     break;
//     default: alert('Login failed')

// }


let userFruit = prompt('Enter your favorite...')

switch (userFruit.toLowerCase()){
    case 'mango': alert('Heyy mango')
    break;
    case 'pear' : alert('Hey pear')
    break;
    case 'apple' : alert('Hey apple')
    break;
    default: alert ('Invalid fruit')
}