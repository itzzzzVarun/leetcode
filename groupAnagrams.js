/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 const groupAnagrams = strs => {
    if (strs.length === 1) return [strs]
    let wordMap = new Map()

    for (let word of strs) {
        let sortedWord = word.split('').sort().join('')
        if (!wordMap.has(sortedWord)){ 
            wordMap.set(sortedWord, [word])
        }else{
            wordMap.get(sortedWord).push(word)
        }
    }

    return [...wordMap.values()]
};