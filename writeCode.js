// 1 Sum Zero 

// create function sumZero, takes in one paramter (num)
// if two numbers in array paramter sum equal 0 then return True 
// else if no two numbers in array return 0 return false

function sumZero(num){
    let value = "False"
    for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < num.length; j++) {
        if (i !== j) {
          if (num[i] + num[j] === 0) {
            value = "True"
          } 
        }
      }
    }
    return value
}

console.log(sumZero([1, 2, 3, -6])) // False
console.log(sumZero([1, 2, 3, -3])) // True
console.log('-----Break Answer-----')
// Runtime: O(n2)


// 2 Unique Characters 

// create a function UniqueChars that taakes in a single word string as parameter
// loop through the word paramter and return true if there are not any duplicate letters in word
// return false if there are multiple same lettes in word parameter

function UniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
console.log(UniqueChars('Moonday'))
console.log(UniqueChars('Monday'))
console.log('-----Break Answer-----')
// Runtime: O(n)



// 3 Pangram Sentence

// create function isPangram that takes in a string paramter 
// if string parameter has each letter in the alpahabet then return true 
// else if string doesn't include all aplhabets return false 
// loop through the string and determine whether the string includes each char 

function isPangram(str){
    let phrase = str.toLowerCase()
    let matches = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(let i= 0; i <str.length; i++){
        if(phrase.indexOf(matches[i]) < 0){
          return false 
        }
    } 
    return true 
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log('-----Break Answer-----')
// Runtime:  O(log n)



// 4 Longest Word 

// create a function findLongestWord that takes in a array of words as its paramater
// loop through the paramter and determine which word in the string has the longest length
// use the .length method to check the length of each word 
// return the length of the longest one 

function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    return len
  } 
console.log(findLongestWord(['hi', 'hello']))
console.log(findLongestWord(['hi', 'hello', 'thisworld']))
console.log('-----Last Answer-----')
// Runtime: O(log n)


