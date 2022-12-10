/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    function create(str, a, b){
        if( a === 0 ){
            result.push(str + ")".repeat(b));
            return;
        }
        if( a > 0 ){
            create( str + "(", a - 1, b );
        }
        if( a < b ) create( str + ")", a , b - 1 );
    }
    create( "", n, n )
    return result;
};