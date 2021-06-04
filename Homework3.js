//1. Given a number round it to the nearest 50 without using “if” operator
//(conditions).
let num = (`Type a number.`)
Math.round(num / 50)*50

//2. Find the sign of product of three numbers without multiplication
//operator. Display the specified sign.
let a = +prompt(`Type a number.`)
let b = +prompt(`Type a number.`)
let c = +prompt(`Type a number.`)
if (a === 0 || b === 0 || c === 0){
    console.log(`unsigned`)
} else if(a < 0 && b < 0 && c < 0){
    console.log(`-`)
} else if(a < 0 && b < 0 || a < 0 && c < 0 || b < 0 && c < 0){
    console.log(`+`)
} else if(a < 0 || b < 0 || c < 0){
    console.log(`-`)
} 


//3. Insert a digit and a number. Check whether the digits contains in the
//number or not.
let digit = +prompt(`Type a number.`)
let number = +prompt(`Type a number.`)
while (number != 0){
    if(number % 10 === digit){
        break;
        }
    number = Math.floor(number / 10)
}
if(number % 10 === digit){
    console.log(`Yes`)
} else {
    console.log(`No`)
}

//4. Enter a number. Find the difference between its biggest and smallest
//digits.













//5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
let num = +prompt(`Type a number.`)
let number = num
let digits;
let sum = 0
while(number != 0){
    digits = number % 10
    number = Math.floor(number / 10)
    sum += digits
} 
if(num === 2 || num === 3 || num === 5 || num === 7){
    console.log(`Yes`)
} else if (sum % 3 === 0 || num % 5 === 0 || num % 2 === 0) {
    console.log(`No`)
} else {
    console.log(`Yes`)
}

