//1.Given a number print its digits count.
let num = Math.abs(+prompt(`Type a number`)) + ''
console.log(num.length)

//2.Count numbers of digit 9 in a number.
let number = prompt(`Type a number.`)
let nineCount = 0
for(let i = 0 ; i < number.length ; i++){
    if(number[i] == 9){
        nineCount++
    }
}
console.log(nineCount)

//3.Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)
let number1 = +prompt(`Type a number.`)
let number2 = +prompt(`Type a number.`)
let max = 0
let min = 0
let arr = []
if(number1 > number2){
    max = number1
    min = number2
} else {
    min = number1
    max = number2  
}
if(min === 1){
    arr.push(min)
}
for(let i = min ; i < max ; i++){
    if(min === 2){
        arr.push(i - 1)
    }
    min = i
    while(min != 2){
        if(min % 2 === 1){
            break;
        }
        if(min / 2 === 2){
            min = min / 2
            break;
        } else {
           min = min / 2
        }
    }      
}
//4.Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.
let num1 = prompt(`Type a number.`)
let i = 0
for(i = 0 ; i < num1.length ; i++){
     if(num1[i] == 0 && num1[i + 1] == 0 && num1[i + 2] == 0){
        break;
    } 
}
if(num1[i] == 0 && num1[i + 1] == 0 && num1[i + 2] == 0){
    console.log(`yes`)
} else {
    console.log(`no`)
}

//5.Insert two positive integers n and m between 1 and 10. Compute and print n m .
let n = +prompt(`Type a number.`)
let m = +prompt(`Type a number.`)
if(m === 0){
    n = 1
}
let num3 = n
for(let i = 1 ; i < m ; i++){
    n = n * num3
} 
