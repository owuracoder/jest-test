function capitalizeString(word){
    let wordSplitToLetters = word.split("")
    let newWord = ''
    wordSplitToLetters.forEach(function(letter,idx){
        if(idx === 0){
            newWord += letter.toUpperCase()
        }else {
            newWord += letter
        }
    })
    return newWord
}

function reverseString(word){
    const lengthOfWord = word.length - 1
    let newWord = ''
    for(let i = lengthOfWord; i >= 0; i--){
        newWord += word[i]
    }
    return newWord
}

class Calculator{
    constructor(firstNumber, secondNumber){
        this.firstNumber = firstNumber,
        this.secondNumber = secondNumber
    }
    
    add(){
        return this.firstNumber + this.secondNumber
    }

    subtract(){
        return this.firstNumber - this.secondNumber
    }

    divide(){
        return (this.firstNumber / this.secondNumber)
    }

    multiply(){
        return this.firstNumber * this.secondNumber
    }
}

function generateCapitalLetters(){
    const capitalLetters = []
    let startNumb = 65
    let endNumb = 91
    for(let i = startNumb; i < endNumb; i++){
        capitalLetters.push(String.fromCharCode(i))
    }
    return capitalLetters
}

function generateSmallLetters(){
    const smallLetters = []
    let startNumb = 97
    let endNumb = 123
    for(let i = startNumb; i < endNumb; i++){
        smallLetters.push(String.fromCharCode(i))
    }
    return smallLetters
}


function ceaserCipher(words,shift){
    const capitalLetters = generateCapitalLetters()

    const smallLetters = generateSmallLetters()
    
    let cipheredText = []

    let wordGroups = words.split(" ")
    
    wordGroups.forEach(function(word){
        let wordCollected = ''
        for(let i = 0; i < word.length; i++){
            let upperCaseTest = word[i].toUpperCase()
            let lowerCaseTest = word[i].toLowerCase()
            if(word[i] == upperCaseTest && capitalLetters.includes(word[i])){
                let indexCapitalLetter = capitalLetters.indexOf(word[i])

                let shiftedIndexLetter = (indexCapitalLetter + shift) % 26

                let shiftedcapitalLetter = capitalLetters[shiftedIndexLetter]

                wordCollected += shiftedcapitalLetter

            }else if(word[i] == lowerCaseTest && smallLetters.includes(word[i]) ){
                let indexSmallLetter = smallLetters.indexOf(word[i])
                
                let shiftedIndexLetter = (indexSmallLetter + shift) % 26

                let shiftedSmallLetter = smallLetters[shiftedIndexLetter]
                
                wordCollected += shiftedSmallLetter

            }else {
                wordCollected += word[i]
            }
        }
        cipheredText.push(wordCollected)
    })
    return cipheredText.join(' ')
}

function analyzeArray(array){
    const calculateAverage = () => {
        let totalValue = array.reduce(function(prev,curr){
            return prev + curr
        },0)
        
        let totalElementsArray = array.length
    
        let average = Math.floor(totalValue/totalElementsArray)
        return average
    }

    const minValue = () => {
        const arrangedCollection = array.sort(function(a,b){
            return a - b
        })

        const minElement = arrangedCollection[0]

        return minElement
    }

    const maxValue = () => {
        const arrangedCollection = array.sort(function(a,b){
            return a - b
        })

        const lastCollectElement = arrangedCollection.length - 1

        return arrangedCollection[lastCollectElement]
    }

    const lengthOfArray = () => {
        const lengthOfCollection = array.length

        return lengthOfCollection
    }


    return {average: calculateAverage(),
            min: minValue(),
            max: maxValue(),
            length: lengthOfArray()}    
}

module.exports = {capitalizeString, reverseString, Calculator, ceaserCipher, analyzeArray}

