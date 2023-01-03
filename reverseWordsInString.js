var reverseWords = function(str) {
    return str.split(" ").filter(x=>x.length > 0).reverse().join(" ");
};