//exemplo sobre os padroes de versao JS
num = 10;
console.log(num);

var x ='valor 1';
let y = 'valor 2';
console.log(x,y);

var x='valor 3';
let k = 'valor 4';
console.log(x,y);

const B = 12;
//B= B-10;
console.log(B);

//string

let s1,s2,s3;
s1 ='Bom '
s2 = "dia"
s3 = `, amigas`

//concatenação
let resp1, resp2;
resp1 = s1+s2;
console.log(resp1);

resp2 = resp1 + s3;
console.log(resp2);

//template de string ${}

let val1,val2,val3;
val1 = "boa tarde";
val2 = 'boa noite!!';
//no val3 so vale com crase
val3 = `Bom dia!!! \n ${val1}!! \n ${val2}`;
console.log(val3);

let num1,num2;
num1 = 5;
num2 = 7;

console.log('Resultado da soma de '+ num1+' e '+num2+" = "+(num1+num2));
console.log(`Resultado da soma de ${num1} e ${num2} = ${(num1+num2)}`);

/*
    INTERAÇÂO COM O USUÁRIO
*/

// caixa de alerta
alert("revisão de caixa de alerta");

//caixa de confirmação
//retorna true=ok ou false=cancelar

//ja que retorna algo, deve-se colocar dentro de uma variável
let confirmacao = confirm('Deseja realmente cancelar a ação??');
console.log(confirmacao)

//entrada de dados
//prompt -> toda entrada é uma string
let texto = prompt('Digite um texto qualquer: ');
console.log(texto);

//conversão de tipos
//inteiro = parseInt("10");
//float = parseFloat("1.55");

num1 = parseInt(prompt('Digite um numero inteiro: '));
console.log(num1);

num2 = parseFloat(prompt('Digite um numero qualquer'));
console.log(num2);