//1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
let number = prompt(`Type a number.`)
if (number % 2 === 0){
    console.log(`even`)    
} else {
    console.log(`odd`)
}


//2. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.
let a = prompt(`Type a number!`)
lastDigit = a % 10
middleDigit  = (a % 100 - lastDigit) / 10
firstDigit = (a-( `` + middleDigit + lastDigit)) / 100
if(lastDigit === 0){
    console.log(a)
} else {
    console.log(`` + lastDigit + middleDigit + firstDigit)
}


//3. Given five numbers as input. Calculate and print the average of the numbers(without
//using arrays).
let b,c,d,e,f
b = +prompt(`Type a number.`)
c = +prompt(`Type a number.`)
d = +prompt(`Type a number.`)
e = +prompt(`Type a number.`)
f = +prompt(`Type a number.`)
avg = (b + c + d + e + f) / 5


//4. Given three numbers. Sort them by the ascending order.
let number1 , number2 , number3
number1 = prompt(`Type a number.`)
number2 = prompt(`Type a number.`)
number3 = prompt(`Type a number.`)
if(number1 > number2 && number2 > number3){
    console.log(number3 , number2 , number1)
} else if (number1 > number3 && number3 > number2) {
    console.log(number2 , number3 , number1)
} else if (number2 > number1 && number1 > number3){
    console.log(number3 , number1 , number2)
} else if (number2 > number3 && number3 > number1){
    console.log(number1 , number3 , number2)
} else if (number3 > number2 && number2 > number1){
    console.log(number1 , number2 ,number3)
} else if (number3 > number1 && number1 > number2){
    console.log(number2 , number1 , number3)
}


//5.Given the following code rewrite it using only two if operators. (Hint: use logical
//operators.)
var n = +prompt(`Type a number.`)
var i = 0
var j = 0
if (n % 2 === 0 && Math.floor(n / 10)){
    i += 1
}
if (n % 3 === 0 && n % 10 === 1){
    j += 1
}
