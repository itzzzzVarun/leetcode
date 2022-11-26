/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let temp = []
    let length = 0
    for (let i = 0; i < s.length; i++) {
      if (temp.includes(s[i])) {
            temp.splice(0,temp.indexOf(s[i])+1)
        }
        temp.push(s[i])
        length = temp.length>length? temp.length:length
    } 
    return length
};
