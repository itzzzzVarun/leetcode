/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let result = '';
    const roman = {
        "M"  : 1000,
        "CM" : 900,
        "D"  : 500,
        "CD" : 400,
        "C"  : 100,
        "XC" : 90,
        "L"  : 50,
        "XL" : 40,
        "X"  : 10,
        "IX" : 9,
        "V"  : 5,
        "IV" : 4,
        "I"  : 1
    }
    for (let i in roman) {
        while(num >= roman[i]) {
            //console.log(roman[i],num)
            //console.log(typeof(roman[i]), typeof(result))
            result += i
            num = num - roman[i]
            //console.log(result)
        }
    }
    return result
};

intToRoman(1994)


// It is a NAIVE solution of this problem.