//1.Given an array of numbers. Write a function to separate odd and even numbers in different
//arrays.
function seperateNumbersIntoOddsAndEvens(arr){
    let odds = []
    let evens = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }
    console.log(odds , evens)
}

//2.Given a word and a list of possible anagrams, select the correct sublist.
function possibleAnagram(arr1 , word){
    let arrAnagram = []
    for(let i = 0 ; i < arr1.length ; i++){
        let anagram = arr1[i]
        let count = 0
        for(let j = 0 ; j < anagram.length ; j++){
            for(let n = 0 ; n < word.length ; n++){
                if(word[n] == anagram[j]){
                    count++
                }
            }
        }
        if(count === arr1[i].length){
            arrAnagram.push(anagram)
        }
    }
return arrAnagram;
}

 //3.Write a function which receives two strings and removes appearances of the second string from
//the first one.
function removeString2FromString1(string1 , string2){
    let newStr = ``
    for(let i = 0 ; i < string2.length ; i++){
        newStr = ``        
        for(let n = 0; n < string1.length ; n++){
            if(string1[n] !== string2[i]){
                newStr += string1[n]
            }
            if(n === string1.length - 1){
                string1 = newStr
            }
        }
    }
    return newStr;
}

//4.Given an array of numbers. Create an array containing only unique elements.
function findUniqueNumbers(arr2){
    let uniqueNumbers = []
        for(let i = 0 , j = 0; i < arr2.length ; i++ , j++){
            for(let n = 1 ; n < arr2.length ; n++){
            if(arr2[i] === arr2[n + j]){
                arr2[i] = 0
                }
            }       
        }
        for(let i = 0 ; i < arr2.length ; i++){
            if(arr2[i]){
                uniqueNumbers.push(arr2[i])
            }
    }
    return uniqueNumbers;
}

//5.Given a string and symbols. Change first symbol by the second one in the string.
function replaceLetters(str1 , str2 , str3){
    let newStr1 = ``
    for(let i = 0 ; i < str1.length ; i++){
        if(str1[i] !== str2){
            newStr1 += str1[i]        
            } else {
                newStr1 += str3
        }
    }
    return newStr1;
}

    
