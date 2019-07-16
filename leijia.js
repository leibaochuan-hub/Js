function getSum(numsArr){
    var len = numsArr.length;//求长度
    var i;
    var result = 0; //默认值为0
    for (i = 0; i<len;i++){
        var num =numsArr[i]
        result += num;
    }
    return result;
}
getSum([1,2,3])