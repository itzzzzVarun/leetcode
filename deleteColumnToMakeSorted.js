var minDeletionSize = function(strs) {
    let count = 0
    let isSorted 
    for (let i=0; i<strs[0].length; i++) {
        isSorted = true
        for (let j=0; j<strs.length - 1; j++) {
            if (strs[j+1][i]<strs[j][i]) {
                isSorted = false
                break;
            }
        }
        if (!isSorted){
            count++
        }
    }
    return count;
};
minDeletionSize(["abc", "bce", "cae"])