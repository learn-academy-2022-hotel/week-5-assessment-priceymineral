// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// TEST PSEUDO
// create test for codify fxn
// describe 
// it changes the following characters: "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// the actual result should equal the expected
// check for 'good' error (<function name> is not defined)

describe('codify', () => {
    it('it changes "a" to 4, "e" to 3, "i" to 1, and "o" to 0', () => {
        expect(codify(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(codify(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        expect(codify(secretCodeWord3)).toEqual('3cc3ntr1c')
    })
})
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// FXN PSEUDO
// initialize codify functino which takes one string input
// iterate over the string 
// replace each letter accordingly
// OR
// search a method that replaces words directly w/o need for a loop
// return the new word
const codify = (str) => {
    // str = str.replace('a', '4').replace('e', '3').replace('i', '1').replace('0', 'o') // only changes the first instance
    str = str.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, 0)

    return str
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// TEST PSEUDO
// intialize a test for a function called targetwords
// describe 
// it should return an array with only the words containing the target string
// expect the actual output to equal the expected
// check for 'good' error (<function name> is not defined)
describe('targetWords', () => {
    it('returns an array with the words in the input array containing the target string only', () => {
        expect(targetWords(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(targetWords(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// FXN PSEUDO
// create target words fxn that takes in an array and a target string
// initialize a new target array
// iterate over array
// check if current string contains target string (capital or lower case)
// if it does, push to new array
// return new array

const targetWords = (words, target) => {
    let targetWords = []
    target = target.toLowerCase()
    // let newTarget = new RegExp(target, "g") # unsuccessful attempt to use RegEx, received TypeError below
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().includes(target)) {
        // if (words[i].includes(newTarget)) { // TypeError: First argument to String.prototype.includes must not be a regular expression
        // at String.includes (<anonymous>)
            targetWords.push(words[i])
        }
    }

    return targetWords
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// TEST PSEUDO
// describe isFullHouse fxn 
// it determines if the input array is a full house 
// expect the actual input to equal the expected
// check for 'good' error (<function name> is not defined)
describe('isFullHouse', () => {
    it('determines if input array holds a full house', () => {
        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
        expect(isFullHouse(hand4)).toEqual(true)
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// FXN PSEUDO
// initialize isFullHouse to take one input array
// initialize a map
// iterate over hand
// if current number is not in map
    // add it 
    // if count incremented > 2
    // return false
// if it is in map
    // increment the map value

// if map.values array includes a 3 or a 2
    // return true
// else 
    // return false

const isFullHouse = (hand) => {
    if (hand.length < 5) return false

    let counts = {}
    let quit = 0

    // for (let i = 0; i < hand.length; i++) {
    //     if (counts[hand[i]]) {
    //         ++counts[hand[i]]
    //     } else {
    //         if (++quit > 2) return false
    //         counts[hand[i]] = 1
    //     }
    // }
    
    // for...of loop answer
    for (const card of hand) {
        if (counts[card]) {
            ++counts[card]
        } else {
            if (++quit > 2) return false
            counts[card] = 1
        }
    }

    if (Object.values(counts).includes(2)) return true

    return false
}
// Attempt to do challenge 3 using Map()
    // let counts = new Map() 
    // let quit = 0
    // for (let i = 0; i < hand.length; i++) {
    //     if (counts.get(hand[i])) {
    //         counts.set(hand[i], counts.get(hand[i])+1)
            
    //     } else {
    //         counts.set(hand[i], 1)
    //         if(quit++ > 2) {
    //             return false
    //         }
    //     }
    // }

    // console.log('counts => ', counts.values())
    // let vals = counts.values()
    // vals.forEach(num => { // TypeError: vals.forEach is not a function
    //     if (num === 2 || num === 3) {
    //         return true
    //     }
//     })

//     return false 
//     // if (counts.values().includes(3) || counts.values().includes(2)) {
//     //     return true
//     // }
