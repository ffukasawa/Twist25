let mult = parseInt(prompt("Entre com um numero inteiro acima de 1: "));
let i=1;
let result = 1;

while(i<(mult +1)){
    result *=i;
    i++;
}

alert('O fatorial de ' +mult + ' é: ' + result);
