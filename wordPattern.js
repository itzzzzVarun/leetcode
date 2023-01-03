var wordPattern = function(pattern, s) {
    let wrdArr = []
    let match = {}
    let i = 0
    for (let word of s.split(" ")) {
        wrdArr[i] = word
        i++
    }
    if (wrdArr.length !== pattern.length) {
        return false
    }
    for (let j = 0; j<pattern.length; j++) {
        if (pattern[j] in match) {
            if (match[pattern[j]] !==  wrdArr[j]) {
                return false
            }
        } else {
            if (Object.values(match).includes(wrdArr[j])) {
                return false
            }
            match[pattern[j]] =  wrdArr[j]
        }
    }
    return true
}
wordPattern("abba", "dog dog dog dog")