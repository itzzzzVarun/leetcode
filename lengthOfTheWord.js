
var lengthOfLastWord = function(s) {
    return s.trim().length - s.trim().lastIndexOf(' ')  - 1
};
lengthOfLastWord("Today is a nice day                                                                           ")