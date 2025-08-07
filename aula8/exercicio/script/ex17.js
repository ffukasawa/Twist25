let feira =[] 
let soma=0;

for(let i = 0; i<6;i++){
    let preco = parseFloat(prompt("Entre com um preco"));
    feira.push(preco);
}


for (const n of feira){
    alert('preco: '+n);
    soma+= n;

}

alert('valor final da compra: ' + soma)