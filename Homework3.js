//1. Given a number round it to the nearest 50 without using “if” operator
//(conditions).
let number2 = +prompt(`Type a number.`)
Math.round(number2 / 50)*50

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
} else if(a > 0 && b > 0 && c > 0){
    console.log(`+`)
}


//3. Insert a digit and a number. Check whether the digits contains in the
//number or not.
let digit = Math.abs(+prompt(`Type a number.`))
let number = Math.abs(+prompt(`Type a number.`))
let lastDigit = number % 10
while (number != 0){
    if(lastDigit === digit){
        break;
        }
        lastDigit = number % 10
    number = Math.floor(number / 10)
}
if(lastDigit === digit){
    console.log(`Yes`)
} else {
    console.log(`No`)
}

//4. Enter a number. Find the difference between its biggest and smallest
//digits.
let num = +prompt(`Type a number.`)
let maxDigit = num % 10
let minDigit = num % 10
while (num != 0){
    if(num % 10 > maxDigit){
        maxDigit = num % 10
    }
    if(num % 10 < minDigit){
        minDigit = num % 10
    }
    num = Math.floor(num / 10)
}
console.log(maxDigit - minDigit)

//5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
let num1 = +prompt(`Type a number.`)
if(num1 === 2 || num1 === 3 || num1 === 5 || num1 === 7){
    console.log(`Yes`)
} else if (num1 % 3 === 0 || num1 % 5 === 0 || num1 % 2 === 0 || Math.sqrt(num1) - Math.floor(Math.sqrt(num1)) === 0) {
    console.log(`No`)
} else {
    console.log(`Yes`)
}

