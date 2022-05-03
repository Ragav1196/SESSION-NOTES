// TO TAKE ARRAY AS INPUT FROM COMMAND LINE
const MaxNum = (num) =>{   
    return Math.max(...num)
}

const splitFirst = (num) => {
    const arr = num[0].split("");    
    const finalResult = arr.slice(1)
    return finalResult.join("")
}

const splitLast = (num) => {    
    let length = num.length - 1
    const lastNum = num[length]
    lastNumLength = lastNum.length

    const arr = num[length].split("");    
    const result = arr.slice(0, lastNumLength-1)
    return result.join("")
}

const [ , , ...numbers] = process.argv

const resultNum = []

const middleNums = (num) =>{
    for(let i=1; i<num.length - 1; i++){
            resultNum.push(num[i])        
    }
    return resultNum
}

resultNum.push(splitFirst(numbers))
middleNums(numbers)
resultNum.push(splitLast(numbers))

console.log(MaxNum(resultNum))
