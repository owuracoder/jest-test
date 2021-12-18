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


console.log(analyzeArray([1,8,3,4,2,6]))