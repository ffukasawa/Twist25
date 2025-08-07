//estrutura de decisao

//if condicao

let data_hora, hora;

data_hora = new Date();
hora = data_hora.getHours();

if (hora < 12){
    alert('Bom dia raio de sol!')
}


//if else

if (hora> 17){
    alert('Boa noite!')
}

else{
    alert('Boa tarde')
}

//estrutura de decisaoencadeada

let previsao = 'nublado';
let tempMin = 19;
let tempMax = 22;

if(previsao == 'chuvoso'){
    alert('Pegue o guarda-chuva')
    if(tempMin < 10){
        alert('leve mais de um casaco')
    }
    else{
        alert('leve somente um casaco')
    }
}
else{
    if(previsao == 'nublado'){
        if(tempMin > 15){
            alert('Passe protetor e pegue um casaco')
        }
        else{
            alert('Agasalhe-se bem')
        }
    }
    else{
        alert('Aproveita o sol')
    }
}

//operador ternario

(tempMin<tempMax)?alert('temperaturas: OK'):alert('Revise as temperaturas')

let dia = data_hora.getDay();
dia = 3;

switch(dia){
    case 0:
        alert('Domingo');
        break;
    case 1:
        alert('Segunda')
        break;
    case 2:
        alert('Terça');
        break;
    case 3:
        alert('Quarta');
        break;
    case 4:
        alert('Quinta');
        break;
    case 5:
        alert('Sexta');
        break;
    case 6:
        alert('Sábado!!!!!!!!!!');
        break;
    default:
        alert("Dia da semana invalido");
    
}


