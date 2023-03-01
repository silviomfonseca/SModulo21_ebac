var soma = 0
var max = 1000; 
var step = 5 * 7; 
for (let i = 0; i <= max; i += step) 
    if(i % step ==0) {
        soma += i
    }

console.log(soma);