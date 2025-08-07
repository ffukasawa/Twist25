
//laço de repetição FOR
let x;
for(x=0; x<10; x++){
    alert(`Valor atual: ${x}`);
}

//while

// é condicional
//posso trabalhar com ele como se fosse contado, mas a atualização da variável é manual
//não esquecer de inicializá-la fora do laço e de verificar se a condição é alcansável

//enquanto a condição for verdadeira faça:

let cont =0;
while(cont<10){
    console.log(`${cont} * 3 = ${(cont*3)}`);
    cont += 2;
}


//exemplo de laço condicional

//não sei quando vai parar

let letra = 'b';
while(letra != 'b'){
    letra = prompt('Vamos adivinhar a letra \n Digite uma letra:');
}

// do while

//executa a instrução pelo menos uma vez, independente se for verdade ou não pois a checagem da condição é no final
//sempre crie e inicialize a variável de controle fora do laço
//atualize a variável de controle dentro do laço

let fruta ='manga';
do{
    alert('A fruta é ' + fruta);
    fruta = prompt('Digite outra fruta: ')
}while(fruta != 'abacaxi');

//while true

let y=0;
while(true){
    console.log()
}


//Array

let feira =[] //define um array em branco
feira.push('laranja');
feira.push('morango');
feira.push('uva');
feira.push('ameixa');//insere no final

console.log(feira[0]);
console.log(feira[1]);
console.log(feira[2]);
console.log(feira[3]);

console.log('Quantidade de elementos: '+feira.length);

feira.pop();//pop remove do final
console.log('Quantidade de elementos: '+feira.length);
console.log(feira[0]);
console.log(feira[1]);
console.log(feira[2]);
console.log(feira[3]);

//feira.splice(0,1);

//for normal
let i =0;
for(i;i<feira.length;i++){
    console.log(feira[i]);
}

//for of

//copia o elemento
for (const n of feira){
    console.log(n);
}

//for in

//copia o indice
for (const j in feira) {
    console.log(feira[j]);
}

