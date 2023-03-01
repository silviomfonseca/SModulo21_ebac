function mdc(x, y) {
    while (y !== 0){
        var z = x % y;
        x = y;
        y= z;
    }
    return x;
} 
console.log(mdc(30,15))
