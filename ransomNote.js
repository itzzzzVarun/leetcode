/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for (let letter of ransomNote) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1
    }
    for (let letter of magazine) {
        frequencyCounter2[letter] = (frequencyCounter2[letter]  || 0) + 1 
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (!(frequencyCounter1[key] == frequencyCounter2[key] || frequencyCounter1[key] < frequencyCounter2[key])) {
            return false
        }
    }
    return true
};